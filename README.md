
# SaptJanm-Task

## Description

This project is a web application built with React and Vite, which aims to provide a user-friendly interface with various interactive components like profiles, dashboards, and user authentication.

## Tools/Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that focuses on speed and performance for modern web applications.
- **Hot Module Replacement (HMR)**: Enabled for a faster development experience.
- **Polling mode**: Ensures file changes are detected on certain systems.

## Setup Instructions

Follow these steps to set up and run the application locally:

### 1. Clone the repository
```bash
git clone <repository-url>
```

### 2. Navigate to the project directory
```bash
cd <project-directory>
```

### 3. Install dependencies
Make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 4. Start the development server
To run the application locally in development mode:
```bash
npm run dev
```

This will start the Vite development server. By default, it will be available at `http://localhost:5173/`.

### 5. Open the application
Open your browser and go to `http://localhost:5173/` to view the application running locally.

---

## Design Approach

This application is designed with modular components to ensure scalability and reusability. Key components such as the `DashboardHeader`, `Footer`, and `ProfileCard` are separated to make the codebase maintainable and easy to extend.

- **Component-based design**: Each part of the UI is encapsulated in its own component for ease of testing and reuse.
- **State management**: React’s built-in state management is used for handling user input and application state.
- **Responsive design**: The components are designed to adapt to various screen sizes, providing a smooth experience on both desktop and mobile devices.

## File Structure
The main components are as follows:
- `DashboardHeader.jsx`: The header of the dashboard with user navigation.
- `DropdownMenu.jsx`: A menu with options for the user to select.
- `Footer.jsx`: The footer section of the application.
- `Hero.jsx`: The hero section on the homepage.
- `ProfileCard.jsx`: The user's profile card for displaying profile information.
- `Testimonials.jsx`: Section for displaying user testimonials.
- `WobbleCard.jsx`: A custom interactive card component.
- Additional components for handling user authentication and profile management (`SignIn.jsx`, `ProfileCreation.jsx`, etc.).
