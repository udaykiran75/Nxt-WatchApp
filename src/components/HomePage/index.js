import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideos from '../HomeVideos'
import FailureCard from '../FailureCard'

import {
  HomebgContainer,
  HomeBodyContainer,
  BannerContainer,
  BannerLeftPart,
  BannerImage,
  BannerText,
  BannerRightPart,
  BannerCloseButton,
  BannerButton,
  SearchBoxContiner,
  SearchInput,
  SearchIconButton,
  BodyContainer,
  HomeVideosContainer,
  LoadingContainer,
} from './styledComponents'

const apiStatusConstent = {
  intial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePage extends Component {
  state = {
    searchInput: '',
    videosList: [],
    displayBaner: 'flex',
    apiStatus: apiStatusConstent.intial,
  }

  componentDidMount() {
    this.getAllHomeVideos()
  }

  onCloseBanner = () => {
    this.setState({displayBaner: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getAllHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstent.inprogress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const allData = await response.json()
      const formatedData = allData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videosList: formatedData,
        apiStatus: apiStatusConstent.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstent.failure})
    }
  }

  onClickSearchIcon = () => {
    this.getAllHomeVideos()
  }

  onRetryButton = () => {
    this.setState({searchInput: ''}, this.getAllHomeVideos)
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => <FailureCard retryButton={this.onRetryButton} />

  renderHomeVideos = () => {
    const {videosList} = this.state
    return (
      <HomeVideos homeVideos={videosList} retryButton={this.onRetryButton} />
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstent.inprogress:
        return this.renderLoadingView()
      case apiStatusConstent.failure:
        return this.renderFailureView()
      case apiStatusConstent.success:
        return this.renderHomeVideos()
      default:
        return null
    }
  }

  render() {
    const {displayBaner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const searchIconColor = isDarkMode ? '#ffffff' : '#000000'

          return (
            <HomebgContainer>
              <Header />
              <HomeBodyContainer displayMode={isDarkMode}>
                <SideBar />
                <BodyContainer data-testid="home" displayMode={isDarkMode}>
                  <BannerContainer data-testid="banner" display={displayBaner}>
                    <BannerLeftPart>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={20} />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerContainer>
                  <SearchBoxContiner displayMode={isDarkMode}>
                    <SearchInput
                      type="search"
                      displayMode={isDarkMode}
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchIconButton
                      type="button"
                      data-testid="searchButton"
                      displayMode={isDarkMode}
                      onClick={this.onClickSearchIcon}
                    >
                      <AiOutlineSearch size={17} color={searchIconColor} />
                    </SearchIconButton>
                  </SearchBoxContiner>
                  <HomeVideosContainer>
                    {this.renderApiStatusView()}
                  </HomeVideosContainer>
                </BodyContainer>
              </HomeBodyContainer>
            </HomebgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default HomePage
