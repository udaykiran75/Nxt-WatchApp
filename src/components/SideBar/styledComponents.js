import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.nav`
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  background-color: ${props => (props.displayMode ? '#231f20' : '#ffffff')};
`
export const TabitemsContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const TabListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 6px;
  min-width: 95px;
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100%;
  }
  background-color: ${props => props.bgcolor};
`
export const TabListName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  margin: 0px;
  padding-left: 7px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    font-size: 15px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#383838')};
`
export const ContactContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding: 10px;
  }
`
export const Contact = styled.p`
  font-family: Roboto;
  font-size: 17px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ContactContent = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
`
