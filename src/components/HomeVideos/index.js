import ThemeContext from '../../context/ThemeContext'

import {
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultText,
  NoSearchResultRetryButton,
  HomeVideosContainer,
} from './styledComponents'

import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, retryButton} = props
  const numberOfVideos = homeVideos.length
  const onClickRetryButton = () => {
    retryButton()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return numberOfVideos > 0 ? (
          <HomeVideosContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideosContainer>
        ) : (
          <NoSearchResultContainer>
            <NoSearchResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultHeading displayMode={isDarkMode}>
              No Search results found
            </NoSearchResultHeading>
            <NoSearchResultText displayMode={isDarkMode}>
              Try different key words or remove search filter
            </NoSearchResultText>
            <NoSearchResultRetryButton onClick={onClickRetryButton}>
              Retry
            </NoSearchResultRetryButton>
          </NoSearchResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeVideos
