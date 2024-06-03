import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  TabitemsContainer,
  NavLink,
  TabListItem,
  TabListName,
  ContactContainer,
  Contact,
  SocialMediaContainer,
  SocialMediaImg,
  ContactContent,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, activeTab, changeActiveTab} = value

      const activeTabBgColor = isDarkMode ? '#424242' : '#ebebeb'

      const onClickHomeTab = () => {
        changeActiveTab('Home')
      }

      const onClickTrendingTab = () => {
        changeActiveTab('Trending')
      }

      const onClickGameingTab = () => {
        changeActiveTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeActiveTab('Saved videos')
      }

      return (
        <SideBarContainer displayMode={isDarkMode}>
          <TabitemsContainer>
            <NavLink to="/">
              <TabListItem
                key="home"
                onClick={onClickHomeTab}
                bgcolor={activeTab === 'Home' ? activeTabBgColor : null}
              >
                <AiFillHome
                  size={24}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <TabListName displayMode={isDarkMode}>Home</TabListName>
              </TabListItem>
            </NavLink>
            <NavLink to="/trending">
              <TabListItem
                key="trending"
                onClick={onClickTrendingTab}
                bgcolor={activeTab === 'Trending' ? activeTabBgColor : ''}
              >
                <HiFire
                  size={24}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <TabListName displayMode={isDarkMode}>Trending</TabListName>
              </TabListItem>
            </NavLink>
            <NavLink to="/gaming">
              <TabListItem
                key="gaming"
                onClick={onClickGameingTab}
                bgcolor={activeTab === 'Gaming' ? activeTabBgColor : ''}
              >
                <SiYoutubegaming
                  size={24}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <TabListName displayMode={isDarkMode}>Gaming</TabListName>
              </TabListItem>
            </NavLink>
            <NavLink to="/saved-videos">
              <TabListItem
                key="saved"
                onClick={onClickSavedVideosTab}
                bgcolor={activeTab === 'Saved videos' ? activeTabBgColor : ''}
              >
                <CgPlayListAdd
                  size={24}
                  color={activeTab === 'Saved videos' ? '#ff0b37' : '#909090'}
                />
                <TabListName displayMode={isDarkMode}>Saved videos</TabListName>
              </TabListItem>
            </NavLink>
          </TabitemsContainer>
          <ContactContainer>
            <Contact isDarkMode={isDarkMode}>CONTACT US</Contact>
            <SocialMediaContainer>
              <SocialMediaImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactContent isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactContent>
          </ContactContainer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default SideBar
