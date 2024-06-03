import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCard = styled.li`
  display: flex;
  flex-direction: column;
  justy-content: space-between;
  margin-bottom: 20px;
`
export const ThumbnailImage = styled.img`
  width: 176.1px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 310px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoContentContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 176.1px;
  min-height: 150px;
  @media screen and (min-width: 768px) {
    width: 310px;
    min-height: 105px;
  }
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${props => (props.displayMode ? '#212121' : '#ffffff')};
`
export const VideoProfile = styled.img`
  width: 12%;
  height: 12%;
  @media screen and (min-width: 768px) {
    width: 10%;
  }
`
export const ContentSection = styled.div`
  margin-left: 10px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const DesktopViews = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
