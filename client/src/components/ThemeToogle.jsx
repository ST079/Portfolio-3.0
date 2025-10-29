import React from 'react'

const ThemeToogle = () => {
    const [darkMode, setDarkMode] = React.useState(true);
    
  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full"
      >
        {darkMode ? "💻" : "⚜️"}
      </button>
    </div>
  );
}

export default ThemeToogle