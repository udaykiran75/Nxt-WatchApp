import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 7vh;
  }
  background-color: ${props => (props.displayMode ? '#383838' : '#f9f9f9')};
`
export const HeaderLogo = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const ThemeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`
export const MobileMenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const UserProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MoboileLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 350px;
  }
  background-color: ${props => (props.displayMode ? '#383838' : '#f9f9f9')};
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
  text-align: center;
  @media screen and(min-width:768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  width: 90px;
  height: 35px;
  color: ${props => (props.displayMode ? '#d7dfe9' : '#475569')};
  border: 1px solid ${props => (props.displayMode ? '#d7dfe9' : '#475569')};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  width: 90px;
  height: 35px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const DesktopLogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 85px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  font-family: Roboto;
  border: 1px solid ${props => (props.displayMode ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.displayMode ? '#ffffff' : '#4f46e5')};

  @media screen and (max-width: 576px) {
    display: none;
  }
`
