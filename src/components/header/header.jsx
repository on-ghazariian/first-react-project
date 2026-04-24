import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div id="headContacts">
        <div className="headerDov">
          <i className="fa-regular fa-envelope"></i>
          <p>info@want.am</p>
        </div>
        <div className="headerDov">
          <i className="fa-solid fa-phone"></i>
          <p className="cont">094-092-092</p>
        </div>
        <div className="flag">
          <img
            src="https://want.am/wp-content/plugins/translatepress-multilingual/assets/images/flags/hy.png"
            alt="flag" style={{
                borderRadius: '100%',
                width:'16px',
                height:'16px',
            }}/>
          <p>AM</p>
          <i className="fa-solid fa-chevron-down" style={{
            fontSize: "10px",
          }}></i>
        </div>
      </div>
      <div className="bottomHeader">
            <img src="https://want.am/wp-content/uploads/2024/11/logo.png" alt="logo"  id="logo"/>
            <div id="katalog">
                <i className="fa-solid fa-border-all" id="icc"></i>
                <p>Կատալոգ</p>
                <i className="fa-solid fa-chevron-down" id="downI"></i>
            </div>

            <div id="searchDiv">
                <i className="fa-brands fa-sistrix"></i>
                <input type="text" id="search" placeholder="Փնտրել նվեր"/>
            </div>

          <div id="icons">
            <div className="ic">
              <div className="num">
                <p>0</p>
              </div>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="ic">
              <div className="num">
                <p>0</p>
              </div>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="ic">
              <i className="fa-regular fa-circle-user"></i>
              <p>Մուտք</p>
            </div>
          </div>
      </div>
    </>
  );
}
export default Header;
