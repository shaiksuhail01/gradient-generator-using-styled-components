import styled from 'styled-components'

export const MainGradientContainer = styled.div`
  background-image: linear-gradient(
    ${props =>
      props.isGenerateClick === true
        ? `to ${props.displayDirection}`
        : 'to top'},
    ${props => (props.isGenerateClick === true ? props.first : '#8ae323')},
    ${props => (props.isGenerateClick === true ? props.second : '#014f7b')}
  );
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
`

export const DescriptionElement = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`
export const DirectionListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const ColorSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const ColorValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SelectedColor = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  padding-left: 58px;
  padding-right: 58px;
`
export const InputElement = styled.input`
  margin-left: 38px;
  margin-right: 38px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #334155;
  padding:0px
  font-size: 20px;
  width:100px;
  height:50px;
`
export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #1e293b;
  background-color: #00c9b7;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-width: 0px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  margin-top: 26px;
`
