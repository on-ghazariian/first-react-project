import React from "react";
import "./catalogue.css";
export default function Catalogue() {
    return(
        <>
        <div id="catalogue">
    <div id="log1" className="item">
        <div className="img-container">
            <img src="https://want.am/wp-content/uploads/2026/02/chashi-harry-potter-8435497280697-5.jpg" alt="Harry Potter" />
        </div>
        <div className="text-container">
            <p className="ps">Երեխաների համար</p>
            <h2 className="hs">Հարրի Փոթթերի պարագաներ</h2>
        </div>
    </div>

    <div id="log2" className="item">
        <div className="img-container">
            <img src="https://want.am/wp-content/uploads/2026/03/c6357e2159f6af3dc6e03bfc60639813.w7952.h5304._sl5000_cr061250002500_.jpg" />
        </div>
        <div className="text-container">
            <p className="ps">Հոբբի</p>
            <h2 className="hs">Robotime</h2>
        </div>
    </div>

    <div id="log3" className="item">
        <div className="img-container">
            <img src="https://want.am/wp-content/uploads/2026/03/gettyimages-932733026.jpeg" />
        </div>
        <div className="text-container">
            <p className="ps">Օպտիկա</p>
            <h2 className="hs">Աստղադիտակներ</h2>
        </div>
    </div>

    <div id="log4" className="item">
        <div className="img-container">
            <img src="https://want.am/wp-content/uploads/2026/03/713gzqcn7l._ac_uf8941000_ql80_-e1774718791703.jpg" />
        </div>
        <div className="text-container">
            <p className="ps">Տան համար</p>
            <h2 className="hs">Լուսամփոփներ</h2>
        </div>
    </div>
</div>
        </>
    )
}