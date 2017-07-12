import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Main from './main.jsx';

class App extends React.Component {
  render () {
    return (<div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>);
  }
}

render(<App/>, document.getElementById('app'));