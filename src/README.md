## 📝 Project description

This project is a React-based web application for project management. The application allows you to:

View active and completed projects (by deadline),

Go to the project creation page,

Use local storage (localStorage) to store data,

Have navigation between pages thanks to react-router-dom.


## 📦 Tech stack

- **@emotion/react** - CSS-in-JS для MUI
- **@emotion/styled** - CSS-in-JS для MUI
- **mui/icons-material** - Material UI Icons, Font Awesome, etc.
- **Material UI (MUI)** — A component library for fast and responsive layout
- **axios** — Working with API
- **cra-template** — Template from Create React App
- **dayjs** — Comparing and formatting dates
- **React** — a library for creating user interfaces
- **React Router DOM** — page routing
- **React Icons** — icons for visual design
- **Jest** - is a testing framework

## 📁 Project structure
├── public/
├── src/
    ├── components/
    │ ├── Header.js
    │ ├── Sidebar.js
    │ ├── ProjectCard.js
    │ ├── ProjectCard.test.js
    │ └── CreateProjectPage.js
    │ └── ViewProjectPage.js
    ├── images/
    │ └── Header.png
    ├── pages/
    │ ├── VacanciesPage.js
    │ └── VacancyDetailPage.js
    ├── App.js
    └── index.js
    ├── README.md
    └── package.json


## 🛠️ Installing and running the project

1. **Clone the repository**

```bash
git clone https://github.com/Yevhenii199/technical-task.git
cd technical-task

2. **Install dependencies**

npm install

3. **Run the application in development mode**

npm start

🧪 Testing

# Run all tests
npm test

✅ The project uses the built-in testing framework from Create React App (Jest) to write and run unit tests. Sample tests are in src/tests/ProjectCard.test.js.

📦 Project build

npm run build

Compiles the project into the build/ folder for deployment.

💾 Data storage

Projects are stored in localStorage as an array of objects.

When ViewProjectPage loads, projects are filtered by the current date:

Active: deadline >= today

Completed: deadline < today






