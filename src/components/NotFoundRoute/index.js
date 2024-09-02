import Navbar from '../Navbar'
import SideBarComponent from '../sideBar'
import ContextController from '../../ContextConfiguration/configurationcontext'

import {
  MainContainer,
  SideBar,
  FailureCont,
  HeadingFooter,
  NameText,
  ImageFailure,
} from './StyledComponent'

const NotFound = () => (
  <ContextController.Consumer>
    {value => {
      const {isDark} = value

      const lightUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const darkUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Navbar />
          <MainContainer
            data-testid="trending"
            backgroundColor={isDark ? '#181818' : '#f9f9f9'}
          >
            <SideBar>
              <SideBarComponent />
            </SideBar>
            <FailureCont>
              <ImageFailure src={isDark ? darkUrl : lightUrl} alt="not found" />
              <HeadingFooter
                color={isDark ? '#e2e8f0' : '#00306e'}
                fontSize="20px"
              >
                Page Not Found
              </HeadingFooter>
              <NameText>
                we are sorry, the page you requested could not be found.
              </NameText>
            </FailureCont>
          </MainContainer>
        </>
      )
    }}
  </ContextController.Consumer>
)

export default NotFound
