import leftPot from '@decorations/leftPot.svg';
import rightPot from '@decorations/rightPot.svg';
import frame from '@decorations/frame.svg';
import wildlife from '@decorations/wildlife.svg';
import sirBart from '@decorations/sirBart.png'
export default function Decorations({easterEggShown}) {

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
        className="absolute 
        left-[523px] top-[224px] font-Belanosima text-[40px]"
      
      >Do You Mean <span className='inline text-[#FF27DF]'>This Guy?</span>
      </p>
      <img
        className="absolute 
        left-[593px] top-[316px]"
        src={sirBart}
        alt=""
      />
      <div className='absolute top-[1000px]
      min-h-[2px] min-w-[1440px] bg-black'></div>
    </>
  );
}
