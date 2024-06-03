import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosHomeBgContainer,
  SavedHomeBodyContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedHeading,
  NoSavedText,
  SavedVideosContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideos, isDarkMode, activeTab} = value

      if (activeTab === 'Home') {
        return <Redirect to="/" />
      }

      const videosLength = savedVideos.length

      return videosLength > 0 ? (
        <SavedVideosHomeBgContainer>
          <Header />
          <SavedHomeBodyContainer>
            <Sidebar />
            <SavedVideosContainer
              data-testid="savedVideos"
              displayMode={isDarkMode}
            />
          </SavedHomeBodyContainer>
        </SavedVideosHomeBgContainer>
      ) : (
        <SavedVideosHomeBgContainer>
          <Header />
          <SavedHomeBodyContainer>
            <Sidebar />
            <NoSavedVideosContainer displayMode={isDarkMode}>
              <NoSavedVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeading displayMode={isDarkMode}>
                No saved videos found
              </NoSavedHeading>
              <NoSavedText displayMode={isDarkMode}>
                You can save your videos while watching them
              </NoSavedText>
            </NoSavedVideosContainer>
          </SavedHomeBodyContainer>
        </SavedVideosHomeBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default SavedVideos
