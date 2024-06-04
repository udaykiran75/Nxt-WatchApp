import ThemeContext from '../../context/ThemeContext'

import {
  VideoCard,
  ThumbnailImage,
  VideoLink,
  VideoContentContainer,
  VideoProfile,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
  DesktopViews,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#f9f9f9' : '#231f20'
        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoCard>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentContainer displayMode={isDarkMode}>
                <VideoProfile src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <DesktopViews>
                    <ChannelName color={textColor}>{name}</ChannelName>
                    <ViewsAndDate color={textColor}>
                      {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                    </ViewsAndDate>
                  </DesktopViews>
                </ContentSection>
              </VideoContentContainer>
            </VideoCard>
          </VideoLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeVideoCard
