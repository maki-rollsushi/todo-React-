# React ToDo App

A simple, lightweight ToDo application built with React. This app allows users to add, complete, and delete tasks, with persistent local storage support.

## 🚀 Features

* ✅ Add new tasks
* ✅ Mark tasks as complete
* ✅ Delete tasks
* ✅ View tasks by status: "Open" or "Completed"
* ✅ Persistent data using `localStorage`

## 💠 Tech Stack

* **React** (Functional components + Hooks)
* **JavaScript (ES6+)**
* **LocalStorage** for client-side persistence

## 📁 Project Structure

```
/src
│
├── components/
│   ├── Header.js
│   ├── Tabs.js
│   ├── TodoInput.js
│   └── TodoList.js
│
└── App.js
```

## 💿 Data Persistence

The app uses the browser's `localStorage` to store tasks. This means your tasks will persist even after a page refresh. However, **clearing browser data or switching devices will remove your tasks**.

```js
// Saving todos
localStorage.setItem('todo-app', JSON.stringify({ todos }));

// Loading todos on startup
const saved = JSON.parse(localStorage.getItem('todo-app'));
setTodos(saved.todos);
```

## 🧠 How It Works

* `App.js` handles all core state logic for tasks.
* `addTodo`, `completeTodo`, and `deleteTodo` functions manage task updates and persist them to `localStorage`.
* The UI is broken into separate components (`Header`, `Tabs`, `TodoList`, and `TodoInput`) for maintainability.
* The app supports filtering between "Open" and "Completed" tasks using the `Tabs` component.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## ✨ Future Improvements

* Support for editing existing todos
* Dark mode
* User authentication to sync todos across devices
* Backend integration for real persistence

## 📄 License

This project is licensed under the MIT License.

---

> Made with ❤️ using React
