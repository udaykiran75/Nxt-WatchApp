import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureCard from '../FailureCard'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingMainContainer,
  GamingBodyContainer,
  GamingVideosContainer,
  GamingHeaderDiv,
  GamingImgCon,
  GamingHeading,
  GamingLoadingContainer,
  DestopOverflowContainer,
  GamingListContainer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class GamingRoute extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryButton = () => {
    this.getGamingVideos()
  }

  renderLoadingView = () => (
    <GamingLoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </GamingLoadingContainer>
  )

  renderFailureView = () => <FailureCard retryButton={this.onRetryButton} />

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <GamingListContainer>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </GamingListContainer>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inprogress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode, activeTab} = value

          if (activeTab === 'Home') {
            return <Redirect to="/" />
          }

          return (
            <GamingMainContainer>
              <Header />
              <GamingBodyContainer>
                <SideBar />
                <GamingVideosContainer
                  data-testid="gaming"
                  displayMode={isDarkMode}
                >
                  <GamingHeaderDiv displayMode={isDarkMode}>
                    <GamingImgCon displayMode={isDarkMode}>
                      <SiYoutubegaming color="#ff0b37" size={30} />
                    </GamingImgCon>
                    <GamingHeading displayMode={isDarkMode}>
                      Gaming
                    </GamingHeading>
                  </GamingHeaderDiv>
                  <DestopOverflowContainer>
                    {this.renderApiStatusView()}
                  </DestopOverflowContainer>
                </GamingVideosContainer>
              </GamingBodyContainer>
            </GamingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default GamingRoute
