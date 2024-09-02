import {IoMdHome} from 'react-icons/io'
import {useLocation} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {
  MainContainer,
  ListItem,
  OptionsCont,
  ImageElement,
  ButtonElement,
  HeadingFooter,
  FooterCont,
  ImageContList,
  ImageFacebook,
  LinkCont,
} from './StyledComponent'
import ContextController from '../../ContextConfiguration/configurationcontext'

const SideBarComponent = () => {
  const {pathname} = useLocation()
  return (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value

        const backgroundColorSele = isDark ? '#181818' : '#f1f1f1'

        return (
          <MainContainer backgroundColor={isDark ? '#231f20' : '#ffffff'}>
            <OptionsCont>
              <ListItem
                backgroundColor={pathname === '/' ? backgroundColorSele : ''}
              >
                <LinkCont to="/">
                  <ButtonElement
                    id="HOME"
                    color={isDark ? '#e2e8f0' : '#1e293b'}
                    fontWeight={pathname === '/' ? 'bold' : '500'}
                  >
                    <ImageElement color={isDark ? '#e2e8f0' : '#1e293b'}>
                      <IoMdHome />
                    </ImageElement>
                    Home
                  </ButtonElement>
                </LinkCont>
              </ListItem>
              <ListItem
                backgroundColor={
                  pathname === '/trending' ? backgroundColorSele : ''
                }
              >
                <LinkCont to="/trending">
                  <ButtonElement
                    id="TRENDING"
                    color={isDark ? '#e2e8f0' : '#1e293b'}
                    fontWeight={pathname === '/trending' ? 'bold' : '500'}
                  >
                    <ImageElement color={isDark ? '#e2e8f0' : '#1e293b'}>
                      <FaFire />
                    </ImageElement>
                    Trending
                  </ButtonElement>
                </LinkCont>
              </ListItem>
              <ListItem
                backgroundColor={
                  pathname === '/gaming' ? backgroundColorSele : ''
                }
              >
                <LinkCont to="/gaming">
                  <ButtonElement
                    id="GAMING"
                    color={isDark ? '#e2e8f0' : '#1e293b'}
                    fontWeight={pathname === '/gaming' ? 'bold' : '500'}
                  >
                    <ImageElement color={isDark ? '#e2e8f0' : '#1e293b'}>
                      <SiYoutubegaming />
                    </ImageElement>
                    Gaming
                  </ButtonElement>
                </LinkCont>
              </ListItem>
              <ListItem
                backgroundColor={
                  pathname === '/saved-videos' ? backgroundColorSele : ''
                }
              >
                <LinkCont to="/saved-videos">
                  <ButtonElement
                    id="SAVED VIDEOS"
                    color={isDark ? '#e2e8f0' : '#1e293b'}
                    fontWeight={pathname === '/saved-videos' ? 'bold' : '500'}
                  >
                    <ImageElement color={isDark ? '#e2e8f0' : '#1e293b'}>
                      <RiMenuAddFill />
                    </ImageElement>
                    Saved Videos
                  </ButtonElement>
                </LinkCont>
              </ListItem>
            </OptionsCont>
            <FooterCont>
              <HeadingFooter
                color={isDark ? '#e2e8f0' : '#00306e'}
                fontSize="20px"
              >
                CONTACT US
              </HeadingFooter>
              <ImageContList>
                <ImageFacebook
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ImageFacebook
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ImageFacebook
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImageContList>
              <HeadingFooter
                color={isDark ? '#e2e8f0' : '#00306e'}
                fontSize="15px"
              >
                Enjoy! Now to see your channels and recommendations!
              </HeadingFooter>
            </FooterCont>
          </MainContainer>
        )
      }}
    </ContextController.Consumer>
  )
}

export default SideBarComponent
