import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const VideoItemCard = styled.li`
  list-style-type: none;
  display: felx;
  justify-content: flex-start;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`
export const ThumbnailImg = styled.img`
  width: 170px;
  height: 130px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 220px;
  }
`
export const TrendingProfileImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    width: 35px;
    height: 35px;
  } ;
`
export const VideoContentDiv = styled.div`
  display: flex;
  width: 212px;
  height: 130px;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 222px;
  }
  background-color: ${props => (props.displayMode ? '#212121' : '#ffffff')};
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 6px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  } ;
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 2;
  } ;
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 7px;
  margin-bottom: 7px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 2;
  } ;
`
export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 2;
  } ;
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
