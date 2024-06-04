import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureCard from '../FailureCard'
import VideoPlayCard from '../VideoPlayCard'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailMainContainer,
  VideoDetailBodyContainer,
  VideoDetailContainer,
  LoadingContainer,
  FailureContainer,
} from './styledComponents'

const apiStatusConstents = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apiStatusConstents.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  formatedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
  })

  getVideoDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstents.inprogress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formatedData(data)
      this.setState({
        apiStatus: apiStatusConstents.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstents.failure})
    }
  }

  onRetryButton = () => {
    this.getVideoDetailsData()
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureCard retryButton={this.onRetryButton} />
    </FailureContainer>
  )

  onClickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderPlayVideoCard = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state

    return (
      <VideoPlayCard
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLiked={this.onClickLiked}
        clickDisLiked={this.onClickDisLiked}
      />
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstents.inprogress:
        return this.renderLoadingView()
      case apiStatusConstents.success:
        return this.renderPlayVideoCard()
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
          const {isDarkMode} = value

          return (
            <VideoDetailMainContainer>
              <Header />
              <VideoDetailBodyContainer>
                <SideBar />
                <VideoDetailContainer
                  data-testid="videoItemDetails"
                  displayMode={isDarkMode}
                >
                  {this.renderApiStatusView()}
                </VideoDetailContainer>
              </VideoDetailBodyContainer>
            </VideoDetailMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoDetailsView
