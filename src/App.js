import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideos from './components/SavedVideos'
import VideoDetailsView from './components/VideoDetailsView'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkMode: false, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  changeActiveTab = tabId => {
    this.setState({activeTab: tabId})
  }

  render() {
    const {isDarkMode, activeTab, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkMode,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
