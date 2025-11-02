#!/bin/bash
set -e

# Print the directory where this script is executed from
__PWD="$(pwd)"
__DIRNAME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Calculate $DIR relative to $EXEC_DIR
if [[ "$__DIRNAME" == "$__PWD"* ]]; then
  __RELATIVE_DIRNAME="${__DIRNAME#$__PWD/}"
  __RELATIVE_DIRNAME="${__DIRNAME:-.}"
else
  __RELATIVE_DIRNAME="$__DIRNAME"
fi

echo "Building Lambda Layer..."
docker buildx build -f $__RELATIVE_DIRNAME/stacks/next-lambda-layer/Dockerfile --platform linux/arm64 -t next-lambda-layer .

# Extract the zip file from the container
echo "Extracting layer zip from container..."
CONTAINER_ID=$(docker create next-lambda-layer -f $__RELATIVE_DIRNAME/stacks/next-lambda-layer/Dockerfile)

docker cp "$CONTAINER_ID:/tmp/next-lambda-layer.zip" $__RELATIVE_DIRNAME/stacks/next-lambda-layer/next-lambda-layer.zip
docker rm "$CONTAINER_ID"

echo "Lambda Layer created: $__RELATIVE_DIRNAME/stacks/next-lambda-layer/next-lambda-layer.zip"
