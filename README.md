# Pocket Notes

A note-taking application built with React and Vite as part of the Cuvette React Module Test. The application allows users to create note groups and organize their notes efficiently with a clean, intuitive interface.

## Features

- Create and manage multiple note groups with custom colors
- Add timestamped notes to each group
- Persistent data storage using browser localStorage
- Responsive design for desktop and mobile devices
- Clean, modern user interface with gradient backgrounds

## Technology Stack

- React 18
- Vite
- CSS Modules
- LocalStorage API

## Installation and Setup

Clone the repository:
```
git clone https://github.com/NaveenRagunathan/cuvette-note-taker.git
cd cuvette-note-taker
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

The application will be available at http://localhost:5173

## Build for Production

To create a production build:
```
npm run build
```

The optimized files will be generated in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── NotesPanel/
│   │   ├── LandingScreen.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NoteInput.jsx
│   │   └── NotesPanel.jsx
│   └── Sidebar/
│       ├── CreateGroupModal.jsx
│       ├── GroupItem.jsx
│       └── Sidebar.jsx
├── services/
│   └── localStorage.service.js
├── utils/
│   ├── date.utils.js
│   └── validation.utils.js
├── App.jsx
└── main.jsx
```

## Key Functionality

### Group Management
Users can create note groups with custom names and choose from six predefined colors. Groups are displayed in the sidebar and can be selected to view their associated notes.

### Note Creation
Each note is automatically timestamped with the date and time of creation. Notes are displayed in a clean card format within the selected group.

### Data Persistence
All groups and notes are stored in the browser's localStorage, ensuring data persists across sessions without requiring a backend server.

### Responsive Design
The application adapts to different screen sizes, with a mobile-friendly layout that includes a back button for easy navigation.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Browser Compatibility

The application works on all modern browsers including Chrome, Firefox, Safari, and Edge.

## Author

Naveen Ragunathan

## Acknowledgments

This project was developed as part of the Cuvette React Module Test assessment.
