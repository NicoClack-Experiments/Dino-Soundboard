# Use the official Microsoft Node.js devcontainer image
ARG VARIANT="22-bookworm"
FROM mcr.microsoft.com/devcontainers/javascript-node:${VARIANT}

# Install system dependencies common for SSG tooling
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
	&& apt-get -y install --no-install-recommends \
	git \
	curl \
	ca-certificates \
	build-essential \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*

# Create workspace directory with restricted permissions
RUN mkdir -p /workspace && \
	chown node:node /workspace && \
	chmod 755 /workspace

# Set restrictive umask for new files
RUN echo "umask 027" >> /home/node/.bashrc && \
	echo "umask 027" >> /home/node/.zshrc

# Configure npm with safe defaults
RUN mkdir -p /home/node/.npm-global && \
	chown -R node:node /home/node/.npm-global
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/home/node/.npm-global/bin:${PATH}"

# Add restrictive npm configuration — scripts blocked by default for sandboxing
RUN echo "engine-strict=true" >> /home/node/.npmrc && \
	echo "ignore-scripts=true" >> /home/node/.npmrc && \
	echo "audit=true" >> /home/node/.npmrc && \
	echo "fund=false" >> /home/node/.npmrc && \
	chown node:node /home/node/.npmrc

# Set restrictive PATH — no world-writable dirs
ENV PATH="/workspace/node_modules/.bin:/home/node/.npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

USER node
WORKDIR /workspace
