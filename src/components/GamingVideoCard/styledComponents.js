import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const GameVideoListCard = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
`
export const GameVideoImage = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const GameTitle = styled.h1`
  font-family: Roboto;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const TotalViews = styled.p`
  font-family: Roboto;
  font-size: 11px;
  color: #606060;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
