import React from "react";
import { logo } from "../assets";

const Hero = () => {
 return (
   <header className='w-full flex justify-center items-center flex-col'>
     <nav className='flex justify-between items-center w-full mb-10 pt-3'>
       <img src={logo} alt='ai_summarize_logo' className='w-28 object-contain' />

       <button
         type='button'
         onClick={() =>
           window.open("https://github.com/ivansanguezax/AISummarize", "_blank")
         }
         className='black_btn hover:bg-[#ff9900]'
       >
         GitHub Repository
       </button>
     </nav>

     <h1 className='head_text'>
       Unleash the Power of <br className='max-md:hidden' />
       <span className='bg-gradient-to-r from-[#ff9900] to-[#ffb700] text-transparent bg-clip-text'>
         Smart Summaries
       </span>
     </h1>
     <h2 className='desc'>
       Save time and boost productivity with our AI Article Summarizer. 
       Get the key insights from any article in just seconds - no more information overload
     </h2>
   </header>
 );
};

export default Hero;