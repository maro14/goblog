
# Overview

This project is a blog application that allows users to create, view, and search for posts. It provides an API to interact with the blog functionality.

## Installation

To install and set up the project, follow these steps:

1. Clone the project repository.
2. Navigate to the project directory.
3. Run `pnpm install` to install the dependencies.
4. Configure the environment variables.
5. Run `pnpm start` to start the server.

## Usage

To use the project, follow these guidelines:

1. Make requests to the provided API endpoints to perform various actions on the blog.
2. Use the API documentation to understand the available endpoints and their expected request/response formats.
3. Interact with the blog functionality by creating new posts, retrieving posts, searching for posts, etc.

## Routes

The project provides the following API routes:

### GET /

Get all posts from the blog.

### GET /:id

Get a specific post by its ID.

### GET /search/:query

Search for posts based on a query.

### POST /

Create a new post.

## Controllers

The project includes the following controllers to handle the API routes:

- `addPost`: Handles the creation of a new post.
- `getPosts`: Handles retrieving all posts from the database.
- `getPost`: Handles retrieving a specific post by its ID.
- `searchOnePost`: Handles searching for posts based on a query.

## Models

The project uses the following data model:

### Post Model

- `title` (String, required): The title of the post.
- `category` (String): The category of the post.
- `author` (String, required): The author of the post.
- `content` (String): The content of the post.
- `createdAt` (Date): The timestamp of when the post was created.

## Dependencies

The project uses the following dependencies:

- express
- mongodb
- pnpm
- react
- react router
- axios

## Development Setup

To set up the project for development, follow these steps:

1. Clone the project repository.
2. Install the development dependencies by running the server `cd server pnpm install` for client `cd client pnpm install`.
3. Start the development server using `pnpm run dev`.
4. Make changes to the code and test your modifications.

## Deployment

To deploy the project to a production environment, follow these steps:

1. Set up a production server or hosting platform.
2. Configure the necessary environment variables.
3. Build the project using in client `pnpm run build` and  `pnpm run dev`.
4. Start the server using `pnpm dev`.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
