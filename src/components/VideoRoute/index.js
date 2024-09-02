import {BsDot} from 'react-icons/bs'

import ContextController from '../../ContextConfiguration/configurationcontext'

import {
  MainContainer,
  InnerContainer,
  ImageEle,
  TextAndImage,
  ImageProfile,
  ParaText,
  TextContainer,
  NameText,
  DotElement,
  LinkCont,
} from './StyledComponent'

const VideoComponent = props => {
  const {data} = props
  const {thumbnailUrl, title, channel, viewsCount, publishedAt, id} = data
  const {profilrUrl, name} = channel

  return (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value
        return (
          <MainContainer>
            <LinkCont to={`/videos/${id}`}>
              <InnerContainer>
                <ImageEle src={thumbnailUrl} alt="video thumbnail" />
                <TextAndImage>
                  <ImageProfile src={profilrUrl} alt="channel logo" />
                  <TextContainer>
                    <ParaText color={isDark ? '#ebebeb' : '#00306e'}>
                      {title}
                    </ParaText>
                    <NameText>{name}</NameText>
                    <TextAndImage>
                      <NameText>{`${viewsCount} views`}</NameText>
                      <DotElement color={isDark ? '#64748b' : '#1e293b'}>
                        <BsDot />
                      </DotElement>
                      <NameText>{publishedAt}</NameText>
                    </TextAndImage>
                  </TextContainer>
                </TextAndImage>
              </InnerContainer>
            </LinkCont>
          </MainContainer>
        )
      }}
    </ContextController.Consumer>
  )
}

export default VideoComponent
