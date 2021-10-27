import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  .page {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #747474;
    border: 1px solid #c4c4c4;
    border-left: none;
    width: 3em;
    height: 3em;
    
    cursor: pointer;
    user-select: none;
  }

  .page:nth-child(1) {
    border-left: 1px solid #c4c4c4;
  }

  .page:nth-child(${props => props.paginaAtual + 1}) {
    font-weight: bold;
    color: #FF8AB5;
  }

  .page:hover {
    background-color: #f5f5f5;
  }
`

export { Container }