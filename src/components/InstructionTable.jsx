import instructionImages from '../instructionImages.jsx';

export default function InstructionTable({ isTableShown, language }) {
  const imagesArray = instructionImages();
  const languagesInstructions = {
    English: [
      ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
      ['eight', 'nine', 'zero', 'plus', 'minus', 'times', 'divide'],
      [
        'open',
        'close',
        'pie',
        'comma',
        'exponent',
        'greater than',
        'less than',
      ],
      [
        'greater or equal',
        'less or equal',
        'permutation',
        'combination',
        'delete',
        'clear',
        'return',
      ],
    ],
    Bisaya: [
      ['isa', 'duha', 'tulo', 'upat', 'lima', 'unom', 'pito'],
      [
        'walo',
        'siyam',
        'siro',
        'dungaga',
        'bawasi',
        'padaghani',
        'tungaa/bahini',
      ],
      [
        'abriha/abrihi',
        'sirado/sirad-i',
        'pay/pie',
        'human',
        'isaka',
        'mas dako',
        'mas gamay',
      ],
      [
        'dako o pareha',
        'gamay o pareha',
        'permutasyon',
        'combayni',
        'tanggali',
        'erisa',
        'undangi na',
      ],
    ],
    Tagalog: [
      ['isa', 'dalawa', 'tatlo', 'apat', 'lima', 'anim', 'pito'],
      ['walo', 'siyam', 'wala', 'dagdagan', 'bawasan', 'paramihin', 'hatiin'],
      [
        'buksan',
        'sarado',
        'pie',
        'kama',
        'itaas',
        'mas malaki',
        'mas maliit',
      ],
      [
        'malaki o pareha',
        'maliit o pareha',
        'permutasyon',
        'kombinasyon',
        'tanggalin',
        'burahin',
        'okay nayan',
      ],
    ],
    Japanese: [
      ['ichi', 'ni', 'three', 'four', 'five', 'six', 'seven'],
      ['eight', 'nine', 'zero', 'plus', 'minus', 'times', 'divide'],
      [
        'open',
        'close',
        'pie',
        'comma',
        'exponent',
        'greater than',
        'less than',
      ],
      [
        'greater or equal',
        'less or equal',
        'permutation',
        'combination',
        'delete',
        'clear',
        'return',
      ],
    ],
  };
  return (
    <section
      className={`min-w-[1080px] max-w-[1080px]
  self-center rounded-[10px] mt-[30px]
   min-h-[460px] bg-white pt-[35px] px-[20px]
  border-[3px] border-solid border-[#664229]
  origin-top-left transition-[transform opacity]
  duration-[250ms]
  ${isTableShown ? 'scale-100 opacity-100' : ' opacity-0 scale-0'}`}
    >
      <div className="flex gap-[20px] justify-center">
        {languagesInstructions[language].map((column, columnIndex) => {
          return (
            <div
              key={language + columnIndex}
              className={`flex flex-col
          ${columnIndex === 0 ? 'min-w-[160px]' : 'min-w-[260px]'} 
          max-w-[260px] 
          min-h-[380px] gap-[20px]`}
            >
              {column.map((instruction, index) => {
                return (
                  <div
                    key={language + instruction}
                    className="
                flex justify-end items-start gap-[18px]"
                  >
                    <p className="text-[24px] font-ComingSoon">{instruction}</p>
                    <img
                      className="mt-[3px]"
                      src={imagesArray[columnIndex * 7 + index]}
                      alt="Math Symbols"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
