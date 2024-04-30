// import "./Hero.css";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// import Searchbar from "../SearchBar/Searchbar";
// import Heroimg from "../../../public/hero-image.svg"
// const Hero = () => {
//   return (
//     <section className="hero-wrapper">
//       <div className="paddings innerWidth flexCenter hero-container">
//         {/* left side */}
//         <div className="flexColStart hero-left">
//           <div className="hero-title">
//             <div className="orange-circle" />
//             <motion.h1
//             initial={{ y: "2rem", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             >
//               Discover <br />
//               Most Suitable
//               <br /> Property
//             </motion.h1>
//           </div>
//           <div className="flexColStart secondaryText flexhero-des">
//             <span>Find a variety of properties that suit you very easilty</span>
//             <span>Forget all difficulties in finding a residence for you</span>
//           </div>

//           <Searchbar/>
//             <div></div>
//             <div></div>
//             <div></div>
//           {/* <div className="flexCenter stats">
//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Premium Product</span>
//             </div>

//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Happy Customer</span>
//             </div>

//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp end={28} /> <span>+</span>
//               </span>
//               <span className="secondaryText">Awards Winning</span>
//             </div>
//           </div> */}
//         </div>

//         {/* right side */}
//         <div className="flexCenter hero-right">
//           <motion.div
//             initial={{ x: "7rem", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             className="image-container"
//           >
//             <img src={Heroimg} alt="houses" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react'
import './Hero.css'
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Plaza", "House", "Apartment", "Property"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })
  return (
    <div className='main' >
      <div className="content" >
        <h1>
          Find Your Dream
          <br />
          <span className='text'>{text}<span><Cursor cursorColor="orange" /></span></span>
          
        </h1>
        <p className="mt-4">We Have Over Hundred's Properties For You.</p>
      </div>
    </div>
  )
}

export default Hero

