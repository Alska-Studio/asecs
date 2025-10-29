# Build a Lambda layer for sharp on ARM64
FROM public.ecr.aws/lambda/nodejs:22-arm64


# Install sharp dependencies
RUN microdnf install -y \
  zip \
  && microdnf clean all

# Optional: Uncomment if you need to use AWS credentials during build
# RUN --mount=type=secret,id=aws_credentials \
#     mkdir -p /root/.aws && \
#     cp /run/secrets/aws_credentials /root/.aws/credentials && \
#     chmod 600 /root/.aws/credentials

# Create the layer directory structure
# Lambda expects: nodejs/node_modules/
WORKDIR /layer
RUN mkdir -p nodejs/node_modules

# Install sharp in the layer directory
WORKDIR /layer/nodejs
RUN npm init -y && \
    npm install sharp

# Create the layer zip file
WORKDIR /layer
RUN zip -r /tmp/sharp-layer.zip nodejs

# Default command to output the zip location
CMD ["echo", "Lambda layer created at /tmp/sharp-layer.zip"]
