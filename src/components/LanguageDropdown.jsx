import dropdownArrow from '@assets/dropdownArrow.svg';
import { useLayoutEffect, useState } from 'react';

export default function LanguageDropdown() {
  const [isCollapsed, setCollapsed] = useState(false);
  const languages = ['English', 'Tagalog', 'Bisaya', 'Japanese'];
  const [barHeight, setBarHeight] = useState(66);

  useLayoutEffect(() => {
    setBarHeight(isCollapsed ? 66 : 66 + languages.length * 60);
  }, [isCollapsed, languages.length]);

  return (
    <div className="relative min-w-[174px] min-h-[66px] bg-transparent">
      <div
        className={`min-w-[174px] min-h-[66px] rounded-[5px]
          bg-white border border-solid border-black
          absolute top-0 left-0 transition-[height]
          flex flex-col cursor-pointer overflow-clip 
          select-none ease-out duration-300 z-10`}
        style={{ height: `${barHeight}px` }}
      >
        {languages.map((language, index) => {
          // First language item with toggle functionality
          if (index === 0) {
            return (
              <div key={'header-' + language}>
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
                >
                  <p className="font-Righteous text-[24px]">{language}</p>
                </div>
              </div>
            );
          } else {
            // Other language items
            return (
              <div key={'dropdown-' + language} className="min-w-[174px] min-h-[60px] flex items-center
                pl-[18px] pr-[15px] border-black border-solid 
                border-t-[1px] hover:bg-[#f5f5f5]">
                <p className="font-Righteous text-[24px]">{language}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}