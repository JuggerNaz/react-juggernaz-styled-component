import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import styled, {css} from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const JuggerButton = styled(Button)`
  color: crimson;
  border-color: crimson;
`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Wrapper>
          <Title>Salam! JuggerNaz first styled component!</Title>
          <Button>Read More!</Button><Button primary>Or Less!</Button>
          <JuggerButton>JuggerNaz!</JuggerButton>
        </Wrapper>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
