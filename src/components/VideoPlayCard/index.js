import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'

import {VideoPlayerContainer} from './styledComponents'

const VideoPlayCard = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoPlayerContainer>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="270px"
            />
          </VideoPlayerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoPlayCard
