import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemCard,
  ThumbnailImg,
  VideoContentDiv,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
  NavLink,
} from './styledComponents'

const TrendingVideoCard = props => {
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
          <NavLink to={`/videos/${id}`}>
            <VideoItemCard>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentDiv displayMode={isDarkMode}>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </VideoContentDiv>
            </VideoItemCard>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideoCard
