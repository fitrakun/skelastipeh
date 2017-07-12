import React from 'react';
import {render} from 'react-dom';

class Main extends React.Component {
  render () {
    return (<div>
        <div id="page-content">
        <div id="user-profil-section" className="profile-content">
          <div className="container">
            <div className="flex-container flexdisplay-template flexhorizontal-template flexjustify-center">
              <div id="user-data-content" className="flexdisplay-template flexalign-center">
                <div className="imgdisplay-content flexdisplay-template">
                  <div id="user-profpic-page">
                    <i className="material-icons">account_circle</i>
                  </div>
                </div>
                <div className="txtdisplay-content flexdisplay-template">
                  <div className="nametitle-user">Farid Aulia Tanjung</div>
                  <div className="divdesc-user">
                    Saya adalah pengatur kelas di skelas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="user-menu-section" className="menunav-secondary">
          <div className="container">
            <div className="menunav-wrapper flexjustify-center flexdisplay-template flexhorizontal-template">
              <div className="menunav-list flexalign-stretch">
                <a href className="active">Kelas</a>
              </div>
              <div className="menunav-list flexalign-stretch">
                <a href>Topik</a>
              </div>
              <div className="menunav-list flexalign-stretch">
                <a href>Tes</a>
              </div>
            </div>
          </div>
        </div>
        <div id="user-feed-section" className="feedcontent-format">
          <div className="container">
            <div className="label-userdata flexjustify-center flexdisplay-template">Kelas Saya</div>
            <div className="classuser-wrapper flexjustify-center flexdisplay-template flexhorizontal-template">
              <div className="classuser-box flexjustify-start flexdisplay-template">
                <div className="cu-shadowbox">
                  <div className="cu-imagebox">
                    <img src="img/sample-1.jpg" />
                    <div className="cu-overlay">
                      <div className="cu-titleclass"><a href>Skelas</a></div>
                      <div className="cu-topicclass cu-string"><a className="ellipsis-mode" href>Fisika</a>, <a className="ellipsis-mode" href>Teknik Elektro</a>, <a className="ellipsis-mode" href>Biologi</a>, <a className="ellipsis-mode" href>Teknik Informatika</a></div>
                    </div>
                  </div>
                  <div className="cu-descbox">
                    <div className="cu-descclass">Skelas adalah ruang untuk belajar dan mencapai tujuan bersama-sama. Tidak ada guru, hanya berbagi bersama teman-temanmu.</div>
                  </div>
                </div>
                <div className="classupdates-notif">
                  <span className="redrounder-notif">4</span>
                </div>
              </div>
              <div className="classuser-box flexjustify-start flexdisplay-template">
                <div className="cu-shadowbox">
                  <a className="newclass-box" href="tambah-kelas.php">
                    <div className="divlimiter"><i className="material-icons">add_circle_outline</i></div>
                    <div className="blocklabel-addclass flexjustify-center">Tambah Kelas</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="label-userdata flexjustify-center flexdisplay-template">Kelas yang Diikuti</div>
            <div className="classuser-wrapper flexjustify-center flexdisplay-template flexhorizontal-template">
              <div className="classuser-box flexjustify-start flexdisplay-template">
                <div className="cu-classothers cu-shadowbox">
                  <div className="cu-picclass flexjustify-center flexdisplay-template">
                    <div className="cu-picrounder flexjustify-center flexdisplay-template">A</div>
                  </div>
                  <div className="cu-picclass flexjustify-center flexdisplay-template">
                    <div className="cu-titleclasstwo flexjustify-center flexdisplay-template">Algoritma</div>
                  </div>
                  <div className="cu-topicclass cu-string"><a className="ellipsis-mode" href>Fisika</a>, <a className="ellipsis-mode" href>Teknik Elektro</a>, <a className="ellipsis-mode" href>Biologi</a>, <a className="ellipsis-mode" href>Teknik Informatika</a></div>
                </div>
                <div className="classupdates-notif">
                  <span className="redrounder-notif">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>);
  }
}
export default Main;