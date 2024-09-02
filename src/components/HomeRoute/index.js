import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'

import VideoComponent from '../VideoRoute'

import ContextController from '../../ContextConfiguration/configurationcontext'
import SideBarComponent from '../sideBar'
import {
  SideBar,
  MainContainer,
  VideoContainer,
  AdContainer,
  ImageElement,
  BtnImageCont,
  Heading,
  ButtonGetNow,
  ButtonRemove,
  InputContainer,
  InputElement,
  ImageContSearch,
  AllElementsCont,
  VideoListContainer,
  LoaderContainer,
  FailureCont,
  ImageFailure,
  HeadingFooter,
  NameText,
  RetryBttn,
  EmptyCont,
} from './StyledComponent'

const statusMentionArray = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'LOADING',
}

class HomeRoute extends Component {
  state = {
    videoList: [],
    status: statusMentionArray.isLoading,
    searched: '',
    hideAds: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  convertInto = each => ({
    profilrUrl: each.profile_image_url,
    name: each.name,
  })

  convertIntoCamelCase = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    channel: this.convertInto(data.channel),
    viewsCount: data.view_count,
    publishedAt: data.published_at,
  })

  getDetails = async () => {
    this.setState({status: statusMentionArray.isLoading})

    const {searched} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searched}`
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
        status: statusMentionArray.success,
      })
    } else {
      this.setState({status: statusMentionArray.failure})
    }
  }

  getSearched = event => {
    this.setState({searched: event.target.value})
  }

  renderSearched = () => {
    this.setState({searched: ''})
    this.getDetails()
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

  emptyArray = () => (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value

        return (
          <EmptyCont>
            <ImageFailure
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingFooter
              color={isDark ? '#e2e8f0' : '#00306e'}
              fontSize="20px"
            >
              No Search results found
            </HeadingFooter>
            <NameText>Try different key words or remove search filter</NameText>
            <RetryBttn onClick={this.retryForLoading}>Retry</RetryBttn>
          </EmptyCont>
        )
      }}
    </ContextController.Consumer>
  )

  successPageLoad = () => {
    const {videoList, hideAds} = this.state

    const successFullCont = (
      <VideoListContainer
        height={hideAds ? '90%' : '300px'}
        smallDevices={hideAds ? '90%' : '40%'}
      >
        {videoList.map(each => (
          <VideoComponent data={each} key={each.id} />
        ))}
      </VideoListContainer>
    )

    return <>{videoList.length === 0 ? this.emptyArray() : successFullCont}</>
  }

  retryForLoading = () => {
    this.setState({status: statusMentionArray.isLoading}, () =>
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
      case statusMentionArray.success:
        return this.successPageLoad()
      case statusMentionArray.failure:
        return this.failurePage()
      case statusMentionArray.isLoading:
        return this.loading()
      default:
        return this.loading()
    }
  }

  removeAds = () => {
    this.setState({hideAds: true})
  }

  render() {
    const {status, searched, hideAds} = this.state

    return (
      <ContextController.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Navbar />
              <MainContainer
                data-testid="home"
                backgroundColor={isDark ? '#181818' : '#f9f9f9'}
              >
                <SideBar>
                  <SideBarComponent />
                </SideBar>
                <VideoContainer
                  backgroundColor={isDark ? '#181818' : '#f9f9f9'}
                >
                  <AdContainer
                    property={hideAds ? 'none' : 'flex'}
                    data-testid="banner"
                  >
                    <BtnImageCont>
                      <ImageElement
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <ButtonRemove
                        fontSize="25px"
                        color="#1e293b"
                        data-testid="close"
                        onClick={this.removeAds}
                      >
                        <IoMdClose />
                      </ButtonRemove>
                    </BtnImageCont>
                    <Heading>Buy Nxt Watch Premium</Heading>
                    <ButtonGetNow>GET IT NOW</ButtonGetNow>
                  </AdContainer>
                  <AllElementsCont>
                    <InputContainer
                      borderColor={isDark ? '#7e858e' : '#d7dfe9'}
                    >
                      <InputElement
                        type="search"
                        onChange={this.getSearched}
                        color={isDark ? '#313131' : '#7e858e'}
                        value={searched}
                        placeholder="search"
                      />
                      <ImageContSearch
                        backgroundColor={isDark ? '#313131' : '#ebebeb'}
                        data-testid="searchButton"
                      >
                        <ButtonRemove
                          fontSize="15px"
                          color="#7e858e"
                          onClick={this.renderSearched}
                          data-testid="searchButton"
                        >
                          <FaSearch />
                        </ButtonRemove>
                      </ImageContSearch>
                    </InputContainer>

                    {this.renderResultPage(status)}
                  </AllElementsCont>
                </VideoContainer>
              </MainContainer>
            </>
          )
        }}
      </ContextController.Consumer>
    )
  }
}

export default HomeRoute
