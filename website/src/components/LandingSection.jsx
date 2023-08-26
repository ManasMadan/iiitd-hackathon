import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles/LandingSection.css";
import BackImg from "./styles/pslv.webp";

// export default function LandingSection() {
//   return (
//     <section style={{ backgroundImage: `url(${BackImg})` }}>
//       <div class="content-outer">
//         <div class="content">
//           <h3>UPCOMING LAUNCH</h3>
//           <h2>PSLV-C55/TeLEOS-2 MISSION</h2>
//           <a
//             href="https://www.youtube.com/live/AeF7OpbOwjQ?feature=share"
//             target="_blank"
//           >
//             <span>Watch</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

const LandingSection = () => {
  return (
    <section style={{ backgroundImage: `url(${BackImg})` }}>
      <div class="content-outer">
        <div class="content">
          <h3>Try Our Data Storage Solution for Individuals</h3>
          <h2>Seamless, Secure and Reliable Data Transfer</h2>
          <a href="https://satellix-upload.netlify.app/" target="_blank">
            <span>Try It Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
