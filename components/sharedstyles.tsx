import styled from 'styled-components'

const VertContainer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const HorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  max-width: 800px;
  margin-top: 32px;
  gap: 16px;
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Block = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: black;
`

const Title = styled.h1<{backgroundColor: string}>`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  a {
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { HorContainer, VertContainer, Main, Title, Description, CodeTag }
