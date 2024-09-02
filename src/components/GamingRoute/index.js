import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import ContextController from '../../ContextConfiguration/configurationcontext'
import Navbar from '../Navbar'
import SideBarComponent from '../sideBar'
import GameDetailCard from '../GameDetailCard'

import {
  SideBar,
  MainContainer,
  VideoContainer,
  Heading,
  VideoListContainer,
  BtnImageCont,
  LoaderContainer,
  FailureCont,
  ImageFailure,
  HeaderCont,
  HeadingFooter,
  NameText,
  RetryBttn,
} from './StyledComponent'

const statusTrendingArray = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'LOADING',
}

class GamingRoute extends Component {
  state = {videoList: [], status: statusTrendingArray.isLoading}

  componentDidMount() {
    this.getDetails()
  }

  convertIntoCamelCase = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewsCount: data.view_count,
  })

  getDetails = async () => {
    this.setState({status: statusTrendingArray.isLoading})

    const url = `https://apis.ccbp.in/videos/gaming`
    const token = Cookies.get('jwt_token')
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, option)

    if (response.ok) {
      const data = await response.json()
      const convertIntoCamel = data.videos.map(each =>
        this.convertIntoCamelCase(each),
      )
      this.setState({
        videoList: convertIntoCamel,
        status: statusTrendingArray.success,
      })
    } else {
      this.setState({status: statusTrendingArray.failure})
    }
  }

  loading = () => (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#3b82f6'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ContextController.Consumer>
  )

  successPageLoad = () => {
    const {videoList} = this.state
    return (
      <ContextController.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <HeaderCont backgroundColor={isDark ? '#181818' : '#f1f1f1'}>
                <BtnImageCont backgroundColor={isDark ? '#000000' : '#d7dfe9'}>
                  <SiYoutubegaming />
                </BtnImageCont>

                <Heading color={isDark ? '#ebebeb' : '#212121'}>Gaming</Heading>
              </HeaderCont>

              <VideoListContainer>
                {videoList.map(each => (
                  <GameDetailCard data={each} key={each.id} />
                ))}
              </VideoListContainer>
            </>
          )
        }}
      </ContextController.Consumer>
    )
  }

  retryForLoading = () => {
    this.setState({status: statusTrendingArray.isLoading}, () =>
      this.getDetails(),
    )
  }

  failurePage = () => (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value

        const lightUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const darkUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureCont>
            <ImageFailure
              src={isDark ? darkUrl : lightUrl}
              alt="failure view"
            />
            <HeadingFooter
              color={isDark ? '#e2e8f0' : '#00306e'}
              fontSize="20px"
            >
              Oops! Something Went Wrong
            </HeadingFooter>
            <NameText>
              We are having some trouble to complete your request{' '}
            </NameText>
            <RetryBttn onClick={this.retryForLoading}>Retry</RetryBttn>
          </FailureCont>
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
      case statusTrendingArray.isLoading:
        return this.loading()
      default:
        return this.loading()
    }
  }

  render() {
    const {status} = this.state

    return (
      <ContextController.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Navbar />
              <MainContainer data-testid="gaming">
                <SideBar>
                  <SideBarComponent />
                </SideBar>
                <VideoContainer
                  backgroundColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                >
                  {this.renderResultPage(status)}
                </VideoContainer>
              </MainContainer>
            </>
          )
        }}
      </ContextController.Consumer>
    )
  }
}

export default GamingRoute
