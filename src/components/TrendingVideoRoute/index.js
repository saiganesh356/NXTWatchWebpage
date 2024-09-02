import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import ContextController from '../../ContextConfiguration/configurationcontext'

import {
  MainContainer,
  InnerContainer,
  ImageEle,
  TextAndImage,
  ParaText,
  TextContainerNames,
  NameText,
  DotElement,
  LinkCont,
} from './StyledComponent'

const TrendingVideoComponent = props => {
  const {data} = props
  const {thumbnailUrl, title, channel, viewsCount, publishedAt, id} = data
  const {name} = channel

  return (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LinkCont to={`/videos/${id}`}>
            <MainContainer>
              <InnerContainer>
                <ImageEle src={thumbnailUrl} alt="video thumbnail" />
                <TextAndImage>
                  <ParaText color={isDark ? '#ebebeb' : '#212121'}>
                    {title}
                  </ParaText>
                  <NameText>{name}</NameText>
                  <TextContainerNames>
                    <NameText>{viewsCount}</NameText>
                    <DotElement color={isDark ? '#64748b' : '#1e293b'}>
                      <BsDot />
                    </DotElement>
                    <NameText>{publishedAt}</NameText>
                  </TextContainerNames>
                </TextAndImage>
              </InnerContainer>
            </MainContainer>
          </LinkCont>
        )
      }}
    </ContextController.Consumer>
  )
}

export default TrendingVideoComponent
