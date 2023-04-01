import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PreviewLink } from '../src';

const App = () => {
  return (
    <div>
      <PreviewLink href="https://json-color-palette-generator.vercel.app/" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
