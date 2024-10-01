import dropdownArrow from '@assets/dropdownArrow.svg';
import { useLayoutEffect, useState } from 'react';

export default function LanguageDropdown({language,setLanguage,availableLanguages}) {
  const [isCollapsed, setCollapsed] = useState(true);
  const [barHeight, setBarHeight] = useState(66);

  useLayoutEffect(() => {
    setBarHeight(isCollapsed ? 66 : 66 + availableLanguages.length * 60);
  }, [isCollapsed, availableLanguages.length]);
  
  return (
    <div className="relative min-w-[174px] min-h-[66px] mr-[3px] bg-transparent">
      <div
        className={`min-w-[174px] min-h-[66px] rounded-[5px]
          bg-white border border-solid border-black
          absolute top-0 left-0 transition-[height]
          flex flex-col cursor-pointer overflow-clip 
          select-none ease-out duration-300 z-10`}
        style={{ height: `${barHeight}px` }}
      >
        {availableLanguages.map((lang, index) => {
          // First language item with toggle functionality
          if (index === 0) {
            return (
              <div key={'header-' + lang}>
                <div
                  className={`flex justify-between items-center
                    min-h-[66px] pl-[18px] pr-[15px]`}
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <p className="font-Righteous text-[24px]">{language}</p>
                  <img src={dropdownArrow} alt="Dropdown arrow" />
                </div>
                {/* Dropdown item for the first language */}
                <div
                  className="min-w-[174px] min-h-[60px] flex items-center
                    pl-[18px] pr-[15px] border-black border-solid 
                    border-t-[1px] hover:bg-[#f5f5f5]"
                  onClick={() => {
                    setLanguage(lang);
                    setCollapsed(true);
                  }}
                >
                  <p className="font-Righteous text-[24px]">{lang}</p>
                </div>
              </div>
            );
          } else {
            // Other language items
            return (
              <div
                key={'dropdown-' + lang}
                className="min-w-[174px] min-h-[60px] flex items-center
                pl-[18px] pr-[15px] border-black border-solid 
                border-t-[1px] hover:bg-[#f5f5f5]"
                onClick={() => {
                  setLanguage(lang);
                  setCollapsed(true);
                }}
              >
                <p className="font-Righteous text-[24px]">{lang}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
