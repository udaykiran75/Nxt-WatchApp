import {Redirect} from 'react-router-dom'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import Sidebar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosHomeBgContainer,
  SavedHomeBodyContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedHeading,
  NoSavedText,
  SavedVideosContainer,
  SavedHeaderDiv,
  SavedImgCon,
  SavedHeading,
  SavedVideosDiv,
  DestopOverflowContainer,
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
            >
              <SavedHeaderDiv displayMode={isDarkMode}>
                <SavedImgCon displayMode={isDarkMode}>
                  <CgPlayListAdd color="#ff0b37" size={30} />
                </SavedImgCon>
                <SavedHeading displayMode={isDarkMode}>
                  Saved Videos
                </SavedHeading>
              </SavedHeaderDiv>
              <DestopOverflowContainer>
                <SavedVideosDiv>
                  {savedVideos.map(eachVideo => (
                    <TrendingVideoCard
                      videoDetails={eachVideo}
                      key={eachVideo.id}
                    />
                  ))}
                </SavedVideosDiv>
              </DestopOverflowContainer>
            </SavedVideosContainer>
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
