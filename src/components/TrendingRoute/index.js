import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureCard from '../FailureCard'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingMainContainer,
  TrendingBodyContainer,
  TrendVideoConatiner,
  TrendingHeading,
  TrendHeaderDiv,
  TrendImgCon,
  TrendLoadingContainer,
  TrendVideosDiv,
  DestopOverflowContainer,
} from './styledComponents'

const apiStatusConstents = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class TrendingRoute extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusConstents.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstents.inprogress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const formatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideos: formatedData,
        apiStatus: apiStatusConstents.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstents.failure})
    }
  }

  onRetryButton = () => this.getTrendingVideos()

  renderLoadingView = () => (
    <TrendLoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </TrendLoadingContainer>
  )

  renderFailureView = () => <FailureCard retryButton={this.onRetryButton} />

  renderTrendVideos = () => {
    const {trendingVideos} = this.state
    return (
      <TrendVideosDiv>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendVideosDiv>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstents.success:
        return this.renderTrendVideos()
      case apiStatusConstents.inprogress:
        return this.renderLoadingView()
      case apiStatusConstents.failure:
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
            <TrendingMainContainer>
              <Header />
              <TrendingBodyContainer>
                <SideBar />
                <TrendVideoConatiner
                  data-testid="trending"
                  displayMode={isDarkMode}
                >
                  <TrendHeaderDiv displayMode={isDarkMode}>
                    <TrendImgCon displayMode={isDarkMode}>
                      <HiFire color="#ff0b37" size={30} />
                    </TrendImgCon>
                    <TrendingHeading displayMode={isDarkMode}>
                      Trending
                    </TrendingHeading>
                  </TrendHeaderDiv>
                  <DestopOverflowContainer>
                    {this.renderApiStatusView()}
                  </DestopOverflowContainer>
                </TrendVideoConatiner>
              </TrendingBodyContainer>
            </TrendingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default TrendingRoute
