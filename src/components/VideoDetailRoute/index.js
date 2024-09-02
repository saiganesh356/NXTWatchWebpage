import {Component} from 'react'
import {BsDot} from 'react-icons/bs'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ContextController from '../../ContextConfiguration/configurationcontext'
import Navbar from '../Navbar'
import SideBarComponent from '../sideBar'

import {
  SideBar,
  MainContainer,
  VideoContainer,
  VideoItemCont,
  LoaderContainer,
  FailureCont,
  ImageFailure,
  ReactPlayerCont,
  ParaText,
  TextCont,
  TextAndImage,
  NameText,
  DotElement,
  TextContElement,
  ButtonElement,
  LikeBttn,
  DisLikeBttn,
  SaveBttn,
  HorizantalLine,
  ImageProfile,
  TextContainer,
  ParaTextDes,
  HeadingFooter,
  RetryBttn,
} from './StyledComponent'

const statusDetailArray = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'LOADING',
}

class VideoDetailRoute extends Component {
  state = {
    videoDetails: {},
    status: statusDetailArray.isLoading,
    videoStatus: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  convertInto = each => ({
    profilrUrl: each.profile_image_url,
    name: each.name,
    subscriberCount: each.subscriber_count,
  })

  convertIntoCamelCase = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewsCount: data.view_count,
    videoUrl: data.video_url,
    channel: this.convertInto(data.channel),
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
  })

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
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
      const convertIntoCamel = this.convertIntoCamelCase(data.video_details)
      this.setState({
        videoDetails: convertIntoCamel,
        status: statusDetailArray.success,
      })
    } else {
      this.setState({status: statusDetailArray.failure})
    }
  }

  loading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  videoStatus = event => {
    this.setState({videoStatus: event.target.id})
  }

  saveVideo = () => {
    const {videoDetails} = this.state
  }

  successPageLoad = () => {
    const {videoDetails, videoStatus} = this.state
    const {
      videoUrl,
      title,
      viewsCount,
      publishedAt,
      channel,
      description,
      id,
    } = videoDetails
    const {profilrUrl, name, subscriberCount} = channel
    return (
      <ContextController.Consumer>
        {value => {
          const {isDark, saveVideo, savedVideos} = value
          const alreadyExists = savedVideos.filter(each => each.id === id)

          const saveVideoIntoArray = () => {
            saveVideo(videoDetails)
          }
          return (
            <VideoItemCont>
              <ReactPlayerCont url={`${videoUrl}`} controls width="100%" />
              <TextCont>
                <ParaText color={isDark ? '#d7dfe9' : '#00306e'}>
                  {title}
                </ParaText>
                <TextContElement>
                  <TextAndImage>
                    <NameText>{`${viewsCount} views`}</NameText>
                    <DotElement color={isDark ? '#64748b' : '#1e293b'}>
                      <BsDot />
                    </DotElement>
                    <NameText>{publishedAt}</NameText>
                  </TextAndImage>
                  <TextAndImage>
                    <ButtonElement
                      id="LIKE"
                      onClick={this.videoStatus}
                      color={videoStatus === 'LIKE' ? '#2563eb' : '#64748b'}
                    >
                      <LikeBttn /> Like
                    </ButtonElement>
                    <ButtonElement
                      onClick={this.videoStatus}
                      id="DISLIKE"
                      color={videoStatus === 'DISLIKE' ? '#2563eb' : '#64748b'}
                    >
                      <DisLikeBttn /> Dislike
                    </ButtonElement>
                    <ButtonElement
                      onClick={saveVideoIntoArray}
                      color={alreadyExists.length !== 0 ? '#2563eb' : '#64748b'}
                    >
                      <SaveBttn /> Save
                    </ButtonElement>
                  </TextAndImage>
                </TextContElement>
              </TextCont>
              <HorizantalLine />
              <TextAndImage>
                <TextAndImage>
                  <ImageProfile src={profilrUrl} />
                  <TextContainer>
                    <ParaText color={isDark ? '#ebebeb' : '#00306e'}>
                      {name}
                    </ParaText>
                    <NameText>{subscriberCount} subscribers</NameText>

                    <ParaTextDes color={isDark ? '#d7dfe9' : '#00306e'}>
                      {description}
                    </ParaTextDes>
                  </TextContainer>
                </TextAndImage>
              </TextAndImage>
            </VideoItemCont>
          )
        }}
      </ContextController.Consumer>
    )
  }

  retryForLoading = () => {
    this.setState({status: statusDetailArray.isLoading}, () =>
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
      case statusDetailArray.success:
        return this.successPageLoad()
      case statusDetailArray.failure:
        return this.failurePage()
      case statusDetailArray.isLoading:
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
              <MainContainer data-testid="videoItemDetails">
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

export default VideoDetailRoute
