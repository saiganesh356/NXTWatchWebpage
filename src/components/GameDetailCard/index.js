import ContextController from '../../ContextConfiguration/configurationcontext'

import {
  ListItems,
  ImageElement,
  ParaText,
  NameText,
  LinkCont,
} from './StyledComponent'

const GameDetailCard = props => {
  const {data} = props
  const {id, viewsCount, thumbnailUrl, title} = data

  return (
    <ContextController.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ListItems>
            <LinkCont to={`/videos/${id}`}>
              <ImageElement src={thumbnailUrl} alt="video thumbnail" />
              <ParaText color={isDark ? '#ebebeb' : '#00306e'}>
                {title}
              </ParaText>
              <NameText>{`${viewsCount} Watching Worldwide`}</NameText>
            </LinkCont>
          </ListItems>
        )
      }}
    </ContextController.Consumer>
  )
}

export default GameDetailCard
