import {IoMdHome} from 'react-icons/io'
import {useLocation} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import ContextControl from '../../ContextConfiguration/configurationcontext'

import {
  OptionsCont,
  ListItem,
  LinkCont,
  ImageElement,
  ButtonElement,
} from './StyledComponent'

const RoutePopUp = () => {
  const {pathname} = useLocation()
  return (
    <ContextControl.Consumer>
      {value => {
        const {isDark} = value
        const backgroundColorSele = isDark ? '#181818' : '#f1f1f1'
        return (
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
                  <ImageElement color={pathname === '/' ? '#ff0b37' : ''}>
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
                  <ImageElement
                    color={pathname === '/trending' ? '#ff0b37' : ''}
                  >
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
                  <ImageElement color={pathname === '/gaming' ? '#ff0b37' : ''}>
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
                  <ImageElement
                    color={pathname === '/saved-videos' ? '#ff0b37' : ''}
                  >
                    <RiMenuAddFill />
                  </ImageElement>
                  Saved Videos
                </ButtonElement>
              </LinkCont>
            </ListItem>
          </OptionsCont>
        )
      }}
    </ContextControl.Consumer>
  )
}
export default RoutePopUp
