import styled from 'styled-components'

enum State {
  Guessing,
  Won,
  Lost,
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  max-width: 800px;
  margin-top: 32px;
  gap: 8px;
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

type Props = {
  callbackFn: (guess: string) => void;
  gameState: State;
}

export default function Cards({gameState, callbackFn}) {

  callbackFn = gameState === State.Guessing ? callbackFn : () => {};

  return (
    <FlexContainer>
      <Card onClick={() => callbackFn('M')}>
        Der
      </Card>
      <Card onClick={() => callbackFn('F')}>
        Die
      </Card>
      <Card onClick={() => callbackFn('N')}>
        Das
      </Card>
    </FlexContainer>
  )
}
