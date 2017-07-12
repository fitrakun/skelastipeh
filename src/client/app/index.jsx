import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Main from './main.jsx';
import TambahKelas from './tambahkelas.jsx';
import Kelas from './kelas.jsx';
import Topik from './topik.jsx';
import Tag from './tag.jsx';
import Tes from './tes.jsx';
import IsiKelas from './isikelas.jsx';

class App extends React.Component {
  render () {
    return (<div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>);
  }
}

render(<Router history={history} >
  <div>
        <Route exact path="/" component={App}/>
        <Route path="/Kelas" component={Kelas}/>
        <Route path="/TambahKelas" component={TambahKelas}/>
        <Route path="/Topik" component={Topik}/>
        <Route path="/Tag" component={Tag}/>
        <Route path="/Tes" component={Tes}/>
        <Route path="/IsiKelas" component={IsiKelas}/>
  </div>
</Router>, document.getElementById('app'));
// render(<App/>, document.getElementById('app'));