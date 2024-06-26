import React from 'react'

const ThemeContext = React.createContext({
  isDarkMode: false,
  activeTab: 'Home',
  savedVideos: [],
  changeActiveTab: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
})
export default ThemeContext
