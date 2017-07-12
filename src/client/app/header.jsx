import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render () {
    return (<div>
            <header id="h-logged-in" className="topnav-format">
                <div className="collapsemenu-header">
                    <i className="material-icons">menu</i>
                </div>
                <div className="container">
                    <div className="header-justified">
                        <div className="header-display logo-order">
                            <div className="logo-header"><a href=""><img src="img/logo-logged.png" height="24px"/></a></div>
                        </div>
                        <div className="header-display name-order">
                            <div className="titlepart-header">
                                <h1>Hai, Farid. Selamat Belajar.</h1>
                            </div>
                        </div>
                        <div className="header-display nav-order">
                            <div className="header-display helpnav-display">
                                <a href="" className="iconnav-href"><span className="iconnav"><i className="material-icons">search</i></span></a>
                                <a href="" className="iconnav-href"><span className="iconnav"><i className="material-icons">help_outline</i></span></a>
                            </div>
                            <div id="menu-trigger-toggle" className="header-display accountnav-display dropdown">
                                <a id="dLabel" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="iconnav img-profile"><i className="material-icons">account_circle</i></span>
                                    <span className="name-info header-display">Farid Aulia Tanjung</span>
                                    <span className="iconnav log-profile"><i className="material-icons">expand_more</i></span>
                                </a>
                                <div id="expand-log-profile" className="dropdown dropdown-menu" aria-labelledby="dLabel">
                                    <div className="el-block">
                                        <ul id="expand-log-menunav" className="nobullet-drop">
                                            <li><a href="">Edit Profil</a></li>
                                            <li><a href="">Display Settings</a></li>
                                            <li><a href="">Notification Settings</a></li>
                                            <li><a href="">Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </div>);
  }
}
export default Header;