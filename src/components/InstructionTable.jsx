import instructionImages from '../instructionImages';

export default function InstructionTable({isTableShown}) {
  const imagesArray = instructionImages();
  const languagesInstructions = {
    Bisaya: [
      ['uno',
      'dos',
      'tres',
      'kwatro',
      'singko',
      'sais',
      'syete',],
      [
      'otso',
      'nuybi',
      'sero',
      'dungaga',
      'bawasi',
      'itayms',
      'tungaa/bahini'],
      [
      'abriha/abrihi',
      'sirado/sirad-i',
      'pay/pie',
      'og',
      'isaka',
      'mas dako',
      'mas gamay',],
      [
      'dako o pareha',
      'gamay o pareha',
      'permutasyon',
      'combayni',
      'ibta',
      'erisa',
      'undangi na']
    ],
  };
  return <section className={`min-w-[1080px] max-w-[1080px]
  self-center rounded-[10px] mt-[30px]
   min-h-[460px] bg-white pt-[35px] px-[20px]
  border-[3px] border-solid border-[#664229]
  origin-top-left transition-[transform opacity]
  duration-[250ms]
  ${isTableShown?'scale-100 opacity-100':' opacity-0 scale-0'}`}>
    <div className='flex gap-[20px] justify-center'>

    {languagesInstructions['Bisaya'].map((column,columnIndex)=>{
        return(
          <div key={'Bisaya'+columnIndex} className={`flex flex-col
          ${columnIndex === 0?'min-w-[160px]':'min-w-[260px]'} 
          max-w-[260px] 
          min-h-[380px] gap-[20px]`}>
            {column.map((instruction,index)=>{
              return(
                <div key={'Bisaya'+instruction} className='
                flex justify-end items-start gap-[18px]'>
                  <p className='text-[24px] font-ComingSoon'>
                    {instruction}</p>
                  <img className='mt-[3px]' src={imagesArray[(columnIndex * 7) + index]} 
                  alt="Math Symbols" />
                </div>
              )
            })}
          </div>
        )
    })}
    </div>
  </section>;
}
