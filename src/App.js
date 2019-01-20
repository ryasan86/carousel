import React, { Component } from 'react';
import styled from 'styled-components';
import { SLIDES } from './constants';

class App extends Component {
  state = {
    closed: false
  };

  slideLeft = () => {};

  render() {
    return (
      <AppWrap>
        <SlideContainer>
          <SlideImg
            src={SLIDES[0].imgUrl}
            alt="musician"
            closed={this.state.closed}
          />
        </SlideContainer>
        <button onClick={() => this.setState({ closed: !this.state.closed })}>
          slide
        </button>
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SlideContainer = styled.div`
  height: 60%;
  width: 80%;
`;

const SlideImg = styled.img`
  height: 100%;
  width: ${({ closed }) => (closed ? '0' : '100%')};
  overflow-y: hidden;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`;

export default App;
