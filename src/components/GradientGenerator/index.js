import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainGradientContainer,
  MainHeading,
  DescriptionElement,
  DirectionListContainer,
  ColorSelectionContainer,
  ColorValuesContainer,
  SelectedColor,
  InputElement,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    finalFirstColor: '',
    finalSecondColor: '',
    finalDirection: '',
    generate: false,
  }

  onChangeActiveDirection = id => {
    const clickedDirectionItem = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === id,
    )
    this.setState({
      activeDirection: id,
      direction: clickedDirectionItem[0].value,
    })
  }

  onChangeFirstInput = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondInput = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickGenerateButton = () => {
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      finalFirstColor: firstColor,
      finalSecondColor: secondColor,
      finalDirection: direction,
      generate: true,
    })
  }

  render() {
    const {
      activeDirection,
      firstColor,
      secondColor,
      finalFirstColor,
      finalSecondColor,
      finalDirection,
      generate,
    } = this.state

    return (
      <MainGradientContainer
        data-testid="gradientGenerator"
        isGenerateClick={generate}
        first={finalFirstColor}
        second={finalSecondColor}
        displayDirection={finalDirection}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <DescriptionElement>Choose Direction</DescriptionElement>
        <DirectionListContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              isActive={activeDirection === eachDirection.directionId}
              onChangeActiveDirection={this.onChangeActiveDirection}
            />
          ))}
        </DirectionListContainer>
        <DescriptionElement>Pick the Colors</DescriptionElement>
        <ColorSelectionContainer>
          <ColorValuesContainer>
            <SelectedColor>{firstColor}</SelectedColor>
            <SelectedColor>{secondColor}</SelectedColor>
          </ColorValuesContainer>
          <ColorValuesContainer>
            <InputElement
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstInput}
            />
            <InputElement
              type="color"
              value={secondColor}
              onChange={this.onChangeSecondInput}
            />
          </ColorValuesContainer>
        </ColorSelectionContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </MainGradientContainer>
    )
  }
}

export default GradientGenerator
