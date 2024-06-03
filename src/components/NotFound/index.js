import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundMainBgContainer,
  NotFoundBodyContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, activeTab} = value

      const imageUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundMainBgContainer>
          <Header />
          <NotFoundBodyContainer>
            <SideBar />
            <NotFoundContainer displayMode={isDarkMode}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading displayMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText displayMode={isDarkMode}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </NotFoundBodyContainer>
        </NotFoundMainBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
