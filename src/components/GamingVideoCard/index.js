import ThemeContext from '../../context/ThemeContext'
import {
  GameVideoListCard,
  GameVideoImage,
  GameTitle,
  TotalViews,
  NavLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${id}`}>
            <GameVideoListCard>
              <GameVideoImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle displayMode={isDarkMode}>{title}</GameTitle>
              <TotalViews>{viewCount} Watching Worldwide</TotalViews>
            </GameVideoListCard>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideoCard
