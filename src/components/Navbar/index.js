import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {TiAdjustBrightness} from 'react-icons/ti'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import RoutePopUp from '../MenuPopup'

import ContextController from '../../ContextConfiguration/configurationcontext'
import {
  NavbarSm,
  LogoImg,
  BttnCont,
  BttnElement,
  NavbarMdBttn,
  ImgElementProfile,
  BtnLogout,
  ButtonPopupCont,
  ParaText,
  ButtonCancel,
  ButtonContainerLogout,
  SmallDevicesPopup,
  ButtonRemove,
  BttnContainer,
  LinkCont,
} from './StyledComponent'

const Navbar = props => (
  <>
    <ContextController.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const changePageTheme = () => {
          changeTheme()
        }

        const clearCookies = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const overlayStyles = {
          height: '100vh',
          backgroundColor: isDark ? '#181818' : '#ffffff',
        }

        const lightUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const darkUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        return (
          <>
            <NavbarSm theme={isDark ? '#231f20' : '#ffffff'}>
              <LinkCont to="/">
                <LogoImg src={isDark ? darkUrl : lightUrl} alt="website logo" />
              </LinkCont>
              <BttnCont>
                <BttnElement
                  onClick={changePageTheme}
                  color={isDark ? '#e2e8f0' : '#181818'}
                  data-testid="theme"
                >
                  {isDark ? <TiAdjustBrightness /> : <FaMoon />}
                </BttnElement>
                <Popup
                  modal
                  trigger={
                    <BttnElement color={isDark ? '#e2e8f0' : '#181818'}>
                      <GiHamburgerMenu />
                    </BttnElement>
                  }
                  overlayStyle={overlayStyles}
                >
                  {close => (
                    <>
                      <SmallDevicesPopup
                        backgroundColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                      >
                        <BttnContainer>
                          <ButtonRemove
                            fontSize="25px"
                            color={isDark ? '#e2e8f0' : '#181818'}
                            data-testid="close"
                            onClick={() => close()}
                          >
                            <IoMdClose />
                          </ButtonRemove>
                        </BttnContainer>

                        <RoutePopUp />
                      </SmallDevicesPopup>
                    </>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <BttnElement
                      color={isDark ? '#e2e8f0' : '#181818'}
                      onClick={clearCookies}
                    >
                      <FiLogOut />
                    </BttnElement>
                  }
                >
                  {close => (
                    <ButtonPopupCont
                      backgroundColor={isDark ? '#231f20' : '#ffffff'}
                    >
                      <ParaText color={isDark ? '#ebebeb' : '#00306e'}>
                        Are you sure, you want to logout
                      </ParaText>
                      <ButtonContainerLogout>
                        <ButtonCancel
                          onClick={() => close()}
                          borderColor={isDark ? '#64748b' : '#64748b'}
                          textColor="#64748b"
                          backgroundColor="transparent"
                        >
                          cancel
                        </ButtonCancel>
                        <ButtonCancel
                          backgroundColor="#3b82f6"
                          borderColor="transparent"
                          textColor="#ffffff"
                          onClick={clearCookies}
                        >
                          confirm
                        </ButtonCancel>
                      </ButtonContainerLogout>
                    </ButtonPopupCont>
                  )}
                </Popup>
              </BttnCont>
              <NavbarMdBttn>
                <BttnElement
                  onClick={changePageTheme}
                  color={isDark ? '#e2e8f0' : '#181818'}
                >
                  {isDark ? <TiAdjustBrightness /> : <FaMoon />}
                </BttnElement>
                <BttnElement>
                  <ImgElementProfile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </BttnElement>
                <Popup
                  modal
                  trigger={
                    <BtnLogout color={isDark ? '#f1f1f1' : '#3b82f6'}>
                      Logout
                    </BtnLogout>
                  }
                >
                  {close => (
                    <ButtonPopupCont
                      backgroundColor={isDark ? '#231f20' : '#ffffff'}
                    >
                      <ParaText color={isDark ? '#ebebeb' : '#00306e'}>
                        Are you sure, you want to logout
                      </ParaText>
                      <ButtonContainerLogout>
                        <ButtonCancel
                          onClick={() => close()}
                          borderColor={isDark ? '#64748b' : '#64748b'}
                          textColor="#64748b"
                          backgroundColor="transparent"
                        >
                          cancel
                        </ButtonCancel>
                        <ButtonCancel
                          backgroundColor="#3b82f6"
                          borderColor="transparent"
                          textColor="#ffffff"
                          onClick={clearCookies}
                        >
                          confirm
                        </ButtonCancel>
                      </ButtonContainerLogout>
                    </ButtonPopupCont>
                  )}
                </Popup>
              </NavbarMdBttn>
            </NavbarSm>
          </>
        )
      }}
    </ContextController.Consumer>
  </>
)

export default withRouter(Navbar)
