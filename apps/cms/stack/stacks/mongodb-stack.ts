import { CustomStack } from '@agapi-development-tools/nextjs-aws-adapter/cdk';
import { StackProps, CfnOutput } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { NextjsProps } from 'node_modules/@agapi-development-tools/nextjs-aws-adapter/src/cdk/types';

export class MongoDbEc2Stack extends CustomStack {
  constructor(scope: Construct, id: string, props: NextjsProps, stackProps: StackProps) {
    super(scope, `${id}-mongodb`, props, stackProps);

    // -------------------------------
    // Configuration
    // -------------------------------
    const adminUser = 'admin';
    const adminPass = 'ChangeThisPassword123';

    // Pre-created in AWS, use your PEM locally
    const keyPair = ec2.KeyPair.fromKeyPairName(this, 'MongoDBKeyPair', 'mongodb-cdk-key');

    // -------------------------------
    // Use default VPC
    // -------------------------------
    const vpc = ec2.Vpc.fromLookup(this, 'DefaultVPC', { isDefault: true });

    // -------------------------------
    // Security Group
    // -------------------------------
    const sg = new ec2.SecurityGroup(this, 'MongoDBSG', {
      vpc,
      allowAllOutbound: true,
      securityGroupName: 'MongoDBPublicSG'
    });

    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(27017), 'Allow MongoDB');

    // -------------------------------
    // EC2 Instance
    // -------------------------------
    const instance = new ec2.Instance(this, 'MongoDBInstance', {
      vpc,
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      securityGroup: sg,
      keyPair: keyPair
    });

    // -------------------------------
    // UserData: Install MongoDB
    // -------------------------------
    instance.userData.addCommands(
      'sudo yum update -y',
      'sudo yum install -y wget',
      'sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo <<EOF\n[mongodb-org-7.0]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/7.0/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://pgp.mongodb.com/server-7.0.asc\nEOF',
      'sudo yum install -y mongodb-org',
      // Configure MongoDB to listen on all interfaces (0.0.0.0)
      // Update bindIp to 0.0.0.0 to accept external connections
      'sudo sed -i "s/^  bindIp:.*/  bindIp: 0.0.0.0/" /etc/mongod.conf',
      'sudo sed -i "s/^  #bindIp:.*/  bindIp: 0.0.0.0/" /etc/mongod.conf',
      // If no bindIp line exists, add it after net: (must be done before starting)
      'if ! grep -q "^  bindIp:" /etc/mongod.conf; then sudo sed -i "/^net:/a\\  bindIp: 0.0.0.0" /etc/mongod.conf; fi',
      'sudo systemctl start mongod',
      'sudo systemctl enable mongod',
      // Wait for MongoDB to start
      'sleep 10',
      // Create admin user (before enabling auth)
      `mongosh --eval "db.getSiblingDB('admin').createUser({user:'${adminUser}', pwd:'${adminPass}', roles:['root']})"`,
      // Enable authorization
      'sudo sed -i "/#security:/a security:\\n  authorization: enabled" /etc/mongod.conf',
      'sudo systemctl restart mongod'
    );

    // -------------------------------
    // Outputs
    // -------------------------------
    new CfnOutput(this, 'EC2PublicIP', {
      value: instance.instancePublicIp,
      description: 'Public IP of MongoDB EC2 instance'
    });

    new CfnOutput(this, 'SSHCommand', {
      value: `ssh -i ${keyPair.keyPairName}.pem ec2-user@${instance.instancePublicIp}`,
      description: 'SSH command to connect'
    });

    new CfnOutput(this, 'MongoConnectCommand', {
      value: `mongosh "mongodb://${adminUser}:${adminPass}@${instance.instancePublicIp}:27017/admin"`,
      description: 'MongoDB connection string'
    });
  }
}
