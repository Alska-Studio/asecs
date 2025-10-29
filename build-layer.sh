#!/bin/bash
set -e

# Configuration
LAYER_NAME=${LAYER_NAME:-"sharp-layer"}
AWS_REGION=${AWS_REGION:-"eu-north-1"}
AWS_PROFILE=${AWS_PROFILE:-"asecs-dev"}

# If using AWS SSO, check if we need to login
if [[ "$AWS_PROFILE" != "default" ]]; then
    echo "Using AWS profile: $AWS_PROFILE"
    # Try to refresh SSO credentials if needed
    aws sso login --profile "$AWS_PROFILE" || true
    export AWS_PROFILE="$AWS_PROFILE"
fi

echo "Building Lambda layer for sharp (ARM64)..."

# Build the Docker image
docker buildx build --platform linux/arm64 -t sharp-layer .

# Extract the zip file from the container
echo "Extracting layer zip from container..."
CONTAINER_ID=$(docker create sharp-layer)
docker cp "$CONTAINER_ID:/tmp/sharp-layer.zip" ./sharp-layer.zip
docker rm "$CONTAINER_ID"

echo "Layer ZIP created: ./sharp-layer.zip"
echo ""

# Determine AWS CLI options based on profile
AWS_CLI_OPTS=""
if [[ "$AWS_PROFILE" != "default" ]]; then
    AWS_CLI_OPTS="--profile $AWS_PROFILE"
fi

# Publish the layer to Lambda
echo "Publishing Lambda layer: $LAYER_NAME..."
LAYER_VERSION_JSON=$(aws lambda publish-layer-version \
    --layer-name "$LAYER_NAME" \
    --description "Sharp library layer (ARM64) for image processing" \
    --zip-file fileb://./sharp-layer.zip \
    --compatible-runtimes nodejs18.x nodejs20.x nodejs22.x \
    --compatible-architectures arm64 \
    --region "$AWS_REGION" \
    $AWS_CLI_OPTS \
    --output json)

# Extract the layer ARN from the response
LAYER_ARN=$(echo "$LAYER_VERSION_JSON" | jq -r '.LayerVersionArn')
LAYER_VERSION=$(echo "$LAYER_VERSION_JSON" | jq -r '.Version')

echo ""
echo "✓ Layer published successfully!"
echo "  Layer Name: $LAYER_NAME"
echo "  Version: $LAYER_VERSION"
echo "  Layer ARN: $LAYER_ARN"
echo ""
echo "Update your CDK code with this ARN:"
echo "  LayerVersion.fromLayerVersionArn(scope, 'SharpLayer', '$LAYER_ARN')"
echo ""

# Clean up the temporary zip file
rm -f ./sharp-layer.zip
echo "Cleaned up temporary files."
