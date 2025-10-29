#!/bin/bash
# Script to connect to MongoDB running on EC2
# Usage: ./connect-mongodb.sh [environment]
# Example: ./connect-mongodb.sh dev

set -e

ENV=${1:-dev}
STACK_NAME="MongoDbStack-${ENV}"

echo "Connecting to MongoDB for environment: ${ENV}"
echo "Stack: ${STACK_NAME}"

# Get stack outputs
OUTPUTS=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --query 'Stacks[0].Outputs' \
  --output json 2>/dev/null)

if [ $? -ne 0 ]; then
  echo "Error: Stack ${STACK_NAME} not found"
  echo "Make sure you've deployed the stack and are using the correct AWS profile"
  exit 1
fi

# Extract values
MONGO_ENDPOINT=$(echo $OUTPUTS | jq -r '.[] | select(.OutputKey=="MongoDBEndpoint") | .OutputValue')
MONGO_CONNECTION_STRING=$(echo $OUTPUTS | jq -r '.[] | select(.OutputKey=="MongoDBConnectionString") | .OutputValue')
MONGO_USERNAME=$(echo $OUTPUTS | jq -r '.[] | select(.OutputKey=="MongoDBUsername") | .OutputValue')

if [ -z "$MONGO_ENDPOINT" ]; then
  echo "Error: Could not retrieve MongoDB endpoint from stack outputs"
  exit 1
fi

echo ""
echo "MongoDB Connection Details:"
echo "  Endpoint: ${MONGO_ENDPOINT}"
echo "  Username: ${MONGO_USERNAME}"
echo ""
echo "Connecting with mongosh..."
echo ""

# Check if mongosh is installed
if ! command -v mongosh &> /dev/null; then
  echo "mongosh is not installed. Installing..."

  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    if ! command -v brew &> /dev/null; then
      echo "Please install Homebrew first: https://brew.sh"
      exit 1
    fi
    brew tap mongodb/brew
    brew install mongosh
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if command -v apt-get &> /dev/null; then
      wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
      echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
      sudo apt-get update
      sudo apt-get install -y mongosh
    elif command -v yum &> /dev/null; then
      echo '[mongodb-org-6.0]' | sudo tee /etc/yum.repos.d/mongodb-org-6.0.repo
      echo 'name=MongoDB Repository' | sudo tee -a /etc/yum.repos.d/mongodb-org-6.0.repo
      echo 'baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/' | sudo tee -a /etc/yum.repos.d/mongodb-org-6.0.repo
      echo 'gpgcheck=1' | sudo tee -a /etc/yum.repos.d/mongodb-org-6.0.repo
      echo 'enabled=1' | sudo tee -a /etc/yum.repos.d/mongodb-org-6.0.repo
      echo 'gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc' | sudo tee -a /etc/yum.repos.d/mongodb-org-6.0.repo
      sudo yum install -y mongosh
    fi
  else
    echo "Unsupported OS: $OSTYPE"
    echo "Please install mongosh manually: https://www.mongodb.com/docs/mongodb-shell/install/"
    exit 1
  fi
fi

# Connect to MongoDB
mongosh "${MONGO_CONNECTION_STRING}" --quiet

