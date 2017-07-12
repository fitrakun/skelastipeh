import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (<div>
        <footer>
        </footer>
        <div id="side-nav-loggedin" className="sidenav-box">
          <div className="sn-menuitem">
            <ul id="side-nav-menuitem">
              <li><Link to='/Kelas'>
                  <span className="side-iconnav"><i className="material-icons">class</i></span>
                  <span className="side-iconnav">Kelas</span>
                </Link></li>
              <li><a href>
                  <span className="side-iconnav"><i className="material-icons">style</i></span>
                  <span className="side-iconnav">Topik</span>
                </a></li>
              <li><a href>
                  <span className="side-iconnav"><i className="material-icons">school</i></span>
                  <span className="side-iconnav">Tes</span>
                </a></li>
            </ul>
          </div>
          <div id="side-nav-classindex" className="sn-menuitem">
            <h4 className="subtitle-menuitem">Daftar Kelas (2)</h4>
            <ul id="side-nav-menuitem">
              <li><a href>
                  <span className="side-iconnav"><div className="classlogo-sidenav">A</div></span>
                  <span className="side-iconnav">Algoritma</span>
                </a></li>
              <li><a href>
                  <span className="side-iconnav"><div className="classlogo-sidenav">S</div></span>
                  <span className="side-iconnav">Skelas</span>
                </a></li>
            </ul>
          </div>
        </div>
      </div>);
  }
}
export default Footer;