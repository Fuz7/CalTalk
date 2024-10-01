import instructionImages from '../instructionImages';

export default function InstructionTable() {
  const imagesArray = instructionImages();
  const languagesInstructions = {
    Bisaya: [
      'uno',
      'dos',
      'tres',
      'kwatro',
      'singko',
      'sais',
      'syete',
      'otso',
      'nuybi',
      'siro',
      'dungaga',
      'itayms',
      'tungaa/bahini',
      'abriha/abrihi',
      'sirado/sirad-i',
      'pay/pie',
      'og',
      'isaka',
      'mas dako',
      'mas gamay',
      'dako o pareha',
      'gamay o pareha',
      'permutasyon',
      'combayni',
      'ibta',
      'erisa',
      'undangi na'
    ],
  };
  return <section className='min-w-[1080px] max-w-[1080px]
  self-center rounded-[10px] mt-[30px]
   min-h-[440px] bg-white 
  border-[3px] border-solid border-[#664229]'>
  </section>;
}
