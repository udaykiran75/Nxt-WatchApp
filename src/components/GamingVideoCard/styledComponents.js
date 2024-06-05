import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const GameVideoListCard = styled.li`
  list-style-type: none;
  margin-bottom: 25px;
`
export const GameVideoImage = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const GameTitle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const TotalViews = styled.p`
  font-family: Roboto;
  font-size: 11px;
  color: #606060;
  line-height: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
