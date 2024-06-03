import {BsMoon} from 'react-icons/bs'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  HeaderLogo,
  OptionsContainer,
  LogoLink,
  ThemeButton,
  MobileMenuButton,
  UserProfileImage,
  ModalContainer,
  MoboileLogoutButton,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  DesktopLogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, toggleTheme, changeActiveTab} = value
      const logoImage = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcon = isDarkMode ? (
        <FiSun color="#ffffff" size={25} />
      ) : (
        <BsMoon size={25} />
      )

      const moboileMenu = isDarkMode ? (
        <GiHamburgerMenu color="#ffffff" size={25} />
      ) : (
        <GiHamburgerMenu color="#000000" size={25} />
      )

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onChangeActiveTab = () => {
        changeActiveTab('Home')
      }

      return (
        <HeaderContainer displayMode={isDarkMode}>
          <LogoLink to="/">
            <HeaderLogo
              src={logoImage}
              alt="website logo"
              onClick={onChangeActiveTab}
            />
          </LogoLink>
          <OptionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {themeIcon}
            </ThemeButton>
            <MobileMenuButton type="button">{moboileMenu}</MobileMenuButton>
            <UserProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <MoboileLogoutButton type="button">
                  <FiLogOut
                    size={25}
                    color={`${isDarkMode ? '#ffffff' : '#00306e'}`}
                  />
                </MoboileLogoutButton>
              }
            >
              {close => (
                <ModalContainer displayMode={isDarkMode}>
                  <ModalDesc displayMode={isDarkMode}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      displayMode={isDarkMode}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <DesktopLogoutButton displayMode={isDarkMode} type="button">
                  Logout
                </DesktopLogoutButton>
              }
            >
              {close => (
                <ModalContainer displayMode={isDarkMode}>
                  <ModalDesc displayMode={isDarkMode}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      displayMode={isDarkMode}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Header)
