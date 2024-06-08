## Todo List Web Application

### Overview
This project is a simple web application where authenticated users can manage their todo lists. Users can log in using Google Single Sign-On (SSO) via Firebase Authentication. Once logged in, users can add, view, mark as completed/favorite, or remove todo tasks. The application also supports searching and filtering tasks by status. The frontend is built using React, and Firebase or LocalSorage is used to store and retrieve data.

### Project Structure
```
todo-list-app/
│
├── public/                  # Public assets and HTML template
│   └── index.html           # Main HTML file
│
├── src/                     # Source code directory
│   ├── assets/              # Images, icons, and other assets
│   ├── components/          # React components
│   ├── firebaseConfig/      # Firebase configuration setup
│   ├── pages/               # React page components
│   ├── App.tsx              # Main React application component
│   └── main.tsx             # Entry point of the application
│
├── .gitignore               # Git ignore file
├── package.json             # Node.js dependencies
├── README.md                # Project summary and installation guide
└── tsconfig.json            # TypeScript configuration file
```

### Installation

1. **Clone the repository:**
   ```
   git clone `https://github.com/tasmin75/To-Do-Application`
   ```
   
2. **Navigate to the project directory:**
   ```
   cd GrowthCx (folder)
   ```
   
3. **Install dependencies:**
   ```
   npm install
   ```
   
4. **Set up Firebase:**
   - Created a Firebase project and set up authentication.
   - Obtained Firebase configuration settings and updated `firebaseConfig.ts` file in `src/firebaseConfig/` directory.

5. **Start the development server:**
   ```
   npm run dev or yarn dev
   ```
   
6. **Open the application in your browser:**
   ```
   http://localhost:5173
   ```

### Tech Stack

- **React**: Frontend library for building user interfaces.
- **Firebase Authentication**: Used for user authentication with Google Single Sign-On (SSO).
- **Local Storage**: Stores and retrieves todo tasks data.
- **React Router**: For routing within the application.
- **TypeScript**: Provides static typing to JavaScript for enhanced development experience.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **Figma**: Design tool for creating layout designs and prototypes.
- **React Icons**: For icons used in the application


Feel free to reach out if you have any questions or need further assistance!