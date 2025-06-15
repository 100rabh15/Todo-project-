
# Todo App

A simple Todo application built with **Node.js/Express** for the backend and **vanilla JavaScript** for the frontend.

## Features

- Add, update, complete, and delete tasks
- Dynamic UI with fetch API
- RESTful backend
- In‑memory storage (easy to swap with a database)

## Project Structure

```
todo-github/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Open your browser
open http://localhost:3000
```

## Development

Uses **nodemon** for auto‑reloading during development:

```bash
npm run dev
```

## Deploying to GitHub

1. Create a new repository on GitHub.
2. Run:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <YOUR_REPO_URL>
    git push -u origin main
    ```

3. (Optional) Deploy on platforms such as **Render**, **Railway**, or **Vercel**.

## License

MIT
