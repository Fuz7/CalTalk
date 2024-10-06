import { useState } from 'react';
import InstructionTable from './components/InstructionTable';
import LanguageDropdown from './components/LanguageDropdown';
import SpeechRecognitionComponent from './components/SpeechRecognitionComponent';
import Decorations from './components/Decorations';
function App() {
  
  const [isTableShown, setTableShown] = useState(true);
  const [easterEggShown, setEasterEggShown] = useState(false)
  const [language, setLanguage] = useState('English');
  const availableLanguages = ['English', 'Tagalog', 'Bisaya', 'Japanese'];
  return (
    <div
      className="min-h-lvh min-w-full bg-[#FFEBCD] flex
   justify-center"
    >
      <section
        className="max-w-[1440px] min-w-[1440px] min-h-[1000px] 
     relative flex flex-col overflow-hidden"
      >
        <h1
          className="max-w-[440px] min-w-[440px] min-h-[100px] 
      flex text-white mt-[30px]
      font-Belanosima items-center justify-center bg-[#664229]
      text-[64px] rounded-[20px] self-center
      titleShadow"
        >
          Caltalk
        </h1>
        <div className="flex justify-between">
          <button
            className="min-w-[184px] min-h-[70px]
          flex items-center justify-center text-white 
          font-Roboto-Black text-[24px] bg-[#664229] 
          rounded-[8px] 
          shadow-[0_4px_4px_0px_rgba(0,0,0,0.34)] "
            onClick={() => setTableShown(!isTableShown)}
          >
            Instructions
          </button>
          <LanguageDropdown
            language={language}
            setLanguage={setLanguage}
            availableLanguages={availableLanguages}
          />
        </div>
        <InstructionTable isTableShown={isTableShown} language={language} />
        <SpeechRecognitionComponent language={language}
          setEasterEggShown={setEasterEggShown} setTableShown={setTableShown}/>
        <Decorations easterEggShown={easterEggShown} />
      </section>
    </div>
  );
}

export default App;
