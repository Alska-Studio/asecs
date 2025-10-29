# Sharp Lambda Layer for ARM64

This Dockerfile builds an AWS Lambda layer for the sharp lionary on ARM64 (Graviton2) architecture.

## Prerequisites

- Docker with buildx support
- AWS CLI configured with appropriate credentials
- Docker authentication to AWS ECR (handled automatically by the script)

## AWS Credentials

**Important:** Never add AWS credentials directly to the Dockerfile. Instead:

1. **Use AWS SSO profiles (recommended for organizations):**
   ```bash
   export AWS_PROFILE="your-org-profile"
   export ECR_REPO="your-account-id.dkr.ecr.us-east-1.amazonaws.com/sharp-lambda-layer"
   export AWS_REGION="us-east-1"
   ```

   The script will automatically:
   - Detect the AWS profile
   - Login to SSO if needed (`aws sso login`)
   - Use the profile for all AWS commands

2. **Use AWS CLI configuration:**
   ```bash
   aws configure
   ```

3. **Or use environment variables:**
   ```bash
   export AWS_ACCESS_KEY_ID="your-access-key"
   export AWS_SECRET_ACCESS_KEY="your-secret-key"
   export AWS_REGION="us-east-1"
   ```

4. **Or use IAM roles** (if running on EC2/ECS/Lambda)

## Building for Local Use

Build the Lambda layer zip file:

```bash
./build-layer.sh
```

This creates `sharp-layer.zip` that you can upload to Lambda as a layer.

## Deploying to ECR

First, create an ECR repository if you haven't already:

```bash
# With AWS profile
aws ecr create-repository --repository-name sharp-lambda-layer --region us-east-1 --profile your-org-profile

# Or without profile
aws ecr create-repository --repository-name sharp-lambda-layer --region us-east-1
```

Then set the environment variables and build. **With AWS SSO profile:**

```bash
export AWS_PROFILE="your-org-profile"
export ECR_REPO="your-account-id.dkr.ecr.us-east-1.amazonaws.com/sharp-lambda-layer"
export AWS_REGION="us-east-1"
./build-layer.sh
```

**Without profile:**
```bash
export ECR_REPO="your-account-id.dkr.ecr.us-east-1.amazonaws.com/sharp-lambda-layer"
export AWS_REGION="us-east-1"
./build-layer.sh
```

The script will:
1. Authenticate Docker with ECR using your AWS credentials (or profile)
2. Build the image for ARM64 architecture
3. Push the image to your ECR repository

### Optional: Injecting AWS Credentials During Build

If you need to use AWS credentials inside the Dockerfile during build (e.g., to pull from private ECR), you can use Docker BuildKit secrets. First, uncomment the secret mounting section in the Dockerfile, then:

```bash
# Mount AWS credentials as BuildKit secret
DOCKER_BUILDKIT=1 docker buildx build \
    --platform linux/arm64 \
    --secret id=aws_credentials,src=$HOME/.aws/credentials \
    --secret id=aws_config,src=$HOME/.aws/config \
    -t your-image .
```

**Note:** This is usually not necessary for this sharp layer build, as we authenticate before the build.

## Using the Layer from ECR

After pushing to ECR, you can:

### Option 1: Use as Lambda Layer (from zip)
Extract the zip and publish as a Lambda layer:
```bash
docker run --rm -v $(pwd):/output sharp-layer cp /tmp/sharp-layer.zip /output/
aws lambda publish-layer-version \
  --layer-name sharp \
  --zip-file fileb://sharp-layer.zip \
  --compatible-architectures arm64 \
  --compatible-runtimes nodejs20.x nodejs22.x
```

### Option 2: Use as Lambda Container Image
If you want to use this as a container image for Lambda, you'll need to modify the Dockerfile to create a proper Lambda function image (with a handler).

## Current Configuration

- **Base Image:** `public.ecr.aws/lambda/nodejs:22-arm64`
- **Architecture:** ARM64 (Graviton2)
- **Node.js Version:** 22
- **Package:** sharp (latest)

## Notes

- The layer is built specifically for ARM64 architecture
- Sharp's native dependencies are automatically compiled for ARM64
- The zip file size is typically around 15-20MB
