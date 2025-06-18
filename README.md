## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (latest stable version, ideally v20.10.10)
- Docker

### Installation

1. **Install NPM packages**
```bash
npm install --save
```

### Starting the Express server


1. **Start Express server using npm scripts**

From the root of your /api directory...

```bash
npm run start:dev
```

2. **Start Express server using Docker Compose**


From the root of the node-docker-mongo directory...

```bash
docker compose up
```


This will start the Node.js application using the settings defined in your environment configuration.