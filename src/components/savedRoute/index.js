import {Component} from 'react'
import {FaFire} from 'react-icons/fa'

import ContextController from '../../ContextConfiguration/configurationcontext'
import TrendingVideoComponent from '../TrendingVideoRoute'
import Navbar from '../Navbar'
import SideBarComponent from '../sideBar'

import {
  SideBar,
  MainContainer,
  VideoContainer,
  Heading,
  VideoListContainer,
  BtnImageCont,
  FailureCont,
  ImageFailure,
  HeaderCont,
  HeadingFooter,
  NameText,
} from './StyledComponent'

const statusTrendingArray = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SavedVideosRoute extends Component {
  state = {videoList: [], status: ''}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = () => (
    <ContextController.Consumer>
      {value => {
        const {savedVideos} = value
        this.setState({videoList: savedVideos})
      }}
    </ContextController.Consumer>
  )

  failurePage = () => (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value

        return (
          <FailureCont>
            <ImageFailure
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <HeadingFooter
              color={isDark ? '#e2e8f0' : '#00306e'}
              fontSize="20px"
            >
              No saved videos found
            </HeadingFooter>
            <NameText>Save your videos by clicking a button</NameText>
          </FailureCont>
        )
      }}
    </ContextController.Consumer>
  )

  successPageLoad = () => (
    <ContextController.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        const listOfVideos = savedVideos.map(each => (
          <TrendingVideoComponent data={each} key={each.id} />
        ))

        return (
          <>
            <HeaderCont backgroundColor={isDark ? '#181818' : '#f1f1f1'}>
              <BtnImageCont backgroundColor={isDark ? '#000000' : '#d7dfe9'}>
                <FaFire />
              </BtnImageCont>

              <Heading color={isDark ? '#ebebeb' : '#212121'}>
                Saved Videos
              </Heading>
            </HeaderCont>

            <VideoListContainer>{listOfVideos}</VideoListContainer>
          </>
        )
      }}
    </ContextController.Consumer>
  )

  renderResultPage = status => {
    switch (status) {
      case statusTrendingArray.success:
        return this.successPageLoad()
      case statusTrendingArray.failure:
        return this.failurePage()

      default:
        return ''
    }
  }

  render() {
    const {status, videoList} = this.state

    return (
      <ContextController.Consumer>
        {value => {
          const {isDark, savedVideos} = value

          return (
            <>
              <Navbar />
              <MainContainer data-testid="savedVideos">
                <SideBar>
                  <SideBarComponent />
                </SideBar>
                <VideoContainer
                  backgroundColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                >
                  {savedVideos.length === 0
                    ? this.failurePage()
                    : this.successPageLoad()}
                </VideoContainer>
              </MainContainer>
            </>
          )
        }}
      </ContextController.Consumer>
    )
  }
}

export default SavedVideosRoute
