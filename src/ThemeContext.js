import React from 'react'

const ThemeContext = React.createContext({
  isDarkMode: false,
  activeTab: 'Home',
  changeActiveTab: () => {},
  toggleTheme: () => {},
})
export default ThemeContext
