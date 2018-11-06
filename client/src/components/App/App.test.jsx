import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

jest.mock('./apiCalls');

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render correctly', async () => {
    const renderer = new ShallowRenderer();
    await renderer.render(<App />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
