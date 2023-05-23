import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 150px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    width: 110px;
  }
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: #334155;
  border-width: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 110px;
  }
`
