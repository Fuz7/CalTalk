import leftPot from '@decorations/leftPot.svg';
import rightPot from '@decorations/rightPot.svg';
import frame from '@decorations/frame.svg';
import wildlife from '@decorations/wildlife.svg';
import sirBart from '@decorations/sirBart.png'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);
export default function Decorations({easterEggShown}) {
  useEffect(()=>{
    if(easterEggShown){
      const tl = gsap.timeline({delay:1})
      tl.to('.first',{opacity:1,duration:1 })
      tl.to('.second',{opacity:1,duration:1})
      tl.to('.third',{opacity:1,duration:1,})
    }else if(easterEggShown === false){
      gsap.to('.first',{opacity:0,duration:0.25})
      gsap.to('.second',{opacity:0,duration:0.25})
      gsap.to('.third',{opacity:0,duration:0.25 })
    }
  },[easterEggShown])
  return (
    <>
      <img
        className="absolute max-w-[161px] max-h-[218px]
        left-[10px] top-[809px]"
        src={leftPot}
        alt=""
      />
      <img
        className="absolute max-w-[280px] max-h-[280px]
        left-[1202px] top-[720px]"
        src={rightPot}
        alt=""
      />
      <img
        className="absolute max-w-[256px] max-h-[256px]
        left-[1286px] top-[311px]"
        src={frame}
        alt=""
      />
      <img
        className="absolute max-w-[175px] max-h-[175px]
        left-[0px] top-[339px]"
        src={wildlife}
        alt=""
      />
      <p
        className="absolute  first opacity-0 first
        left-[523px] top-[224px] font-Belanosima text-[40px]"
      
      >Do You Mean <span className='inline text-[#FF27DF] second
       opacity-0'>This Guy?</span>
      </p>
      <img
        className="absolute opacity-0 rounded-sm
        left-[603px] top-[316px] third"
        src={sirBart}
        alt=""
      />
      <div className='absolute top-[1000px]
      min-h-[2px] min-w-[1440px] bg-black'></div>
    </>
  );
}
