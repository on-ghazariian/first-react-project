import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div id="headContacts">
        <div className="headerDov">
          <i class="fa-regular fa-envelope"></i>
          <p>info@want.am</p>
        </div>
        <div className="headerDov">
          <i class="fa-solid fa-phone"></i>
          <p>094-092-092</p>
        </div>
        <div className="headerDov">
          <img
            src="https://want.am/wp-content/plugins/translatepress-multilingual/assets/images/flags/hy.png"
            alt="flag" style={{
                borderRadius: '100%',
                width:'16px',
                height:'16px',
            }}/>
          <p>AM</p>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  );
}
export default Header;
