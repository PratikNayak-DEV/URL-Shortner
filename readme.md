# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the MongoDB server (make sure MongoDB is installed and running on your machine):
    ```sh
    mongod
    ```

4. Start the application:
    ```sh
    npm start
    ```

## Usage

Once the server is running, you can use the API to shorten URLs.

### Example

To shorten a URL, send a POST request to `http://localhost:8001/url` with a JSON body containing the URL to be shortened:

```json
{
  "url": "https://www.example.com"
}
```

## Project Structure

```markdown
url-shortener/
├── .gitignore
├── connect.js
├── controllers/
│   └── url.js
├── index.js
├── models/
│   └── url.js
├── package.json
├── readme.md
└── routes/
    └── url.js
```