
# Chatbot API

The Chatbot API is used to communicate with the OpenAI and retrieve responses to prompts sent by clients. For security purposes, the OpenAI keys are stored on the backend to prevent unauthorized access.

To ensure quick processing of requests and responses with low latency, we are using `Fastify`. It provides faster responses compared to `Express`. For example, a simple GET route that returns a 'Hello World!' response takes **2** seconds with `Fastify` compared to **11** seconds with `Express`.




## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Chatbot API serves as the backend for a chatbot that communicates with OpenAI to retrieve responses based on client prompts. This project focuses on secure key management and low-latency request processing.

## Features

- Secure storage of OpenAI keys on the backend
- Low-latency request processing using Fastify
- Scalable and maintainable codebase

## Technologies Used

- Node.js
- Fastify
- OpenAI

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/haroonfayyaz17/chatbot-be.git
    ```

2. Navigate to the project directory:
    ```bash
    cd chatbot-be
    ```

3. Install the dependencies:
    ```bash
    yarn install
    ```

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your OpenAI keys and other necessary configuration.

## Usage

To start the server, run the following command:
```bash
npm start
```

The server will start on the port specified in your environment variables. You can then send requests to the API endpoints.

## API Endpoints

- `GET /test-api` - A request to test whether your server is working or not.
- `POST /` - Send all the completions in the body in order to make request to OpenAI [Chat Completions API](https://platform.openai.com/docs/guides/text-generation/chat-completions-api) .

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
