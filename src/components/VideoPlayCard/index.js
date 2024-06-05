import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoOptionsContainer,
  ViewsAndYearDiv,
  Text,
  IconsContainer,
  ReatIconButton,
  ActiveText,
  HorizantalLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  StyledReactPlayer,
} from './styledComponents'

const VideoPlayCard = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const {
    id,
    title,
    videoUrl,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoDetails

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDisLike = () => {
    clickDisLiked()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode, savedVideos, addVideo} = value
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const disLikeColor = isDisLiked ? '#2563eb' : '#64748b'

        const onSaveVideo = () => {
          addVideo(videoDetails)
        }

        let isSaved
        const index = savedVideos.findIndex(eachVideo => eachVideo.id === id)

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : '#64748b'

        return (
          <VideoPlayerContainer>
            <StyledReactPlayer url={videoUrl} controls width="100%" />
            <VideoTitle displayMode={isDarkMode}>{title}</VideoTitle>
            <VideoOptionsContainer>
              <ViewsAndYearDiv>
                <Text displayMode={isDarkMode}>{viewCount} views</Text>
                <Text displayMode={isDarkMode}>&#8226; {publishedAt}</Text>
              </ViewsAndYearDiv>
              <IconsContainer>
                <ReatIconButton type="button" onClick={onClickLike}>
                  <AiOutlineLike size={25} color={likeColor} />
                  <ActiveText isActive={isLiked}>Like</ActiveText>
                </ReatIconButton>
                <ReatIconButton type="button" onClick={onClickDisLike}>
                  <AiOutlineDislike size={25} color={disLikeColor} />
                  <ActiveText isActive={isDisLiked}>Dislike</ActiveText>
                </ReatIconButton>
                <ReatIconButton type="button" onClick={onSaveVideo}>
                  <BiListPlus size={25} color={saveIconColor} />
                  <ActiveText isActive={isSaved}>
                    {isSaved ? 'Saved' : 'Save'}
                  </ActiveText>
                </ReatIconButton>
              </IconsContainer>
            </VideoOptionsContainer>
            <HorizantalLine />
            <ChannelContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName displayMode={isDarkMode}>{name}</ChannelName>
                <ChannelSubscribers displayMode={isDarkMode}>
                  {subscriberCount} Subscribers
                </ChannelSubscribers>
              </ChannelInfo>
            </ChannelContainer>
            <ChannelDescription displayMode={isDarkMode}>
              {description}
            </ChannelDescription>
          </VideoPlayerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoPlayCard
