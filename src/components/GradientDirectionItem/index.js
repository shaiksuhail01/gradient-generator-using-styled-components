import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onChangeActiveDirection} = props
  const {directionId, displayText} = directionDetails

  const onChangeDirection = () => {
    onChangeActiveDirection(directionId)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onChangeDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
