import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstents = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apiStatusConstents.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  getVideoDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstents.inprogress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    console.log(id)

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    } else {
      this.setState({apiStatus: apiStatusConstents.failure})
    }
  }

  render() {
    return <div />
  }
}
export default VideoDetailsView
