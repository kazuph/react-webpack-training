import "./style.scss"
import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return <div className="hoge">
    <div className="fuga">
      Hello World!
    </div>
  </div>
};

ReactDOM.render(<App />, document.getElementById('root'))
