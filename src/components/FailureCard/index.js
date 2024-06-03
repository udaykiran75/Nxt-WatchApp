import ThemeContext from '../../context/ThemeContext'
import {
  FailureCardContainer,
  FailureImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

const FailureCard = props => {
  const {retryButton} = props

  const onRetryButton = () => {
    retryButton()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const image = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureCardContainer>
            <FailureImage src={image} alt="failure view" />
            <FailedHeading displayMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote displayMode={isDarkMode}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
            <RetryButton type="button" onClick={onRetryButton}>
              Retry
            </RetryButton>
          </FailureCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureCard
