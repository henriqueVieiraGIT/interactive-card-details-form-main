import React from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";

export default function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcset={bgDesktop} />
            <img src={bgMobile} alt="" />
          </picture>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-10 mx-5">
            <article className="front-card p-5">
              <img src={logo} alt="" className="w-20" />
              <div>
                <h2>1234 5678 9012 0000</h2>
                <ul>
                  <li>Henrique Vieira</li>
                  <li>00/00</li>
                </ul>
              </div>
            </article>
            <article className="back-card"></article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}
