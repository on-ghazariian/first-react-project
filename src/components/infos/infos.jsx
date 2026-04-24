import React from "react";
import "./infos.css";
export default function Infos() {
    return(
        <>
            <div id="infos-conteiner">
                <div className="info">
                    <img src="https://want.am/wp-content/uploads/2024/11/advantages-1.svg" alt="" />
                    <p>Ստանդարտ և էքսպրես առաքում:</p>
                </div>

                <div className="info">
                    <img src="https://want.am/wp-content/uploads/2024/11/advantages-2.svg" alt="" />
                    <p>Կփաթեթավորենք Ձեր նվերը:</p>
                </div>

                <div className="info">
                    <img src="https://want.am/wp-content/uploads/2024/11/advantages-3.svg" alt="" />
                    <p>Չե՞ք կողմնորոշվում։ Ձեռք բերե՜ք մեր նվեր քարտերը։</p>
                </div>

                <div className="info">
                    <img src="https://want.am/wp-content/uploads/2024/11/advantages-4.svg" alt="" />
                    <p>Ապրանքի փոխանակում 14 օրվա ընթացքում</p>
                </div>
            </div>
        </>
    )
}