import { useEffect, useRef, useState } from 'react';
import microphone from '@assets/microphone.svg';

function SpeechRecognitionComponent() {
  const [isListening, setIsListening] = useState(false); // State to track if speech recognition is active
  const [equation, setEquation] = useState(''); // State to hold the equation
  const [result, setResult] = useState(null);
  const silenceTimeoutRef = useRef(null); // Ref to hold the silence timeout
  const listenersAdded = useRef(false); // Ref to track if listeners have been added

  const calculateString = (stringEquation) => {
      
  }

  const TextStatus = () => {
    if (result === null && equation === '' && isListening === false) {
      return 'Start Recording, and it will recognize your speech!';
    } else if (equation === '' && isListening === true) {
      return (
        <>
          {' '}
          Say something
          <span
            className="absolute right-[-20px] bottom-0 blinking
        w-[14px] h-[32px] bg-[#664229] rounded-[1px]"
          ></span>
        </>
      );
    } else if (equation !== '' && isListening === true) {
      return (
        <>
          {equation}
          <span
            className="absolute right-[-20px] bottom-0 blinking
        w-[14px] h-[32px] bg-[#664229] rounded-[1px]"
          ></span>
        </>
      );
    } else if (equation !== '' && isListening === false) {
      return (
        <>
          ({equation}){`->`} Pausing...
          <span
            className="absolute right-[-20px] bottom-0 
        w-[14px] h-[32px] bg-[#664229] rounded-[1px]"
          ></span>
        </>
      );
    }
  };

  useEffect(() => {
    // Check for SpeechRecognition support
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (window.SpeechRecognition) {
      const recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      const handleResult = (e) => {
        const languageDetector = {
          Bisaya: {
            uno: '1',
            dos: '2',
            tres: '3',
            kwatro: '4',
            quatro: '4',
            singko: '5',
            sais: '6',
            syete: '7',
            otso: '8',
            nuybi: '9',
            dungaga: '+',
            bawasi: '-',
            padaghani: '*',
            tungaa: '/',
            abriha: '(',
            sirado: ')',
            pie: '𝜋',
            human: 'human',
            isaka: '^',
            'mas dako': '>',
            'mas gamay': '<',
            'dako o pareha': '>=',
            'gamay o pareha': '<=',
            permutasyon: '!',
            combayni: 'C',
            tangali: 'del',
            erisa: 'clear',
            'undangi na': 'end',
          },
        };

        const transcript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join(' ');

        const sortedKeys = Object.keys(languageDetector['Bisaya']).sort(
          (a, b) => b.length - a.length,
        );
        let voiceOutput = transcript;

        // Replace phrases with their corresponding values from the dictionary
        sortedKeys.forEach((key) => {
          const regex = new RegExp(`\\b${key}\\b`, 'g');
          voiceOutput = voiceOutput.replace(regex, languageDetector['Bisaya'][key]);
        });

        console.log('Value: ' + voiceOutput);

        // Clear previous timeout and set a new one for silence
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = setTimeout(() => {
          const lastChar = equation.charAt(equation.length - 1);
          // Checks if last char is numeric and new recorded is numeric
          if(voiceOutput ==='end'){
            calculateString(equation)
          }
          else if (voiceOutput === 'clear' && equation !== '') {
            const wordsArray = equation.split(' ');
            const removedLastword = wordsArray
              .slice(0, wordsArray.length - 1)
              .join(' ');
            setEquation(removedLastword);
          } else if (voiceOutput === 'dell' && equation !== '') {
            const lettersArray = equation.split('');
            const removedLastLetter = lettersArray
              .slice(0, lettersArray.length - 1)
              .join('');
            setEquation(removedLastLetter);
          } else if (!isNaN(lastChar) && lastChar !== ' ' && !isNaN(voiceOutput)) {
            setEquation(equation + voiceOutput);
          } else if (isNaN(voiceOutput)) {
            setEquation(equation + ' ' + voiceOutput);
          } else if (isNaN(lastChar) && lastChar !== ' ' && !isNaN(voiceOutput)) {
            setEquation(equation + ' ' + voiceOutput);
          }
        }, 800); // 2 seconds of silence
      };

      const handleEnd = () => {
        if (isListening) {
          recognition.start(); // Restart recognition if still listening
        }
      };

      const handleError = (e) => {
        console.error('Error during speech recognition:', e);
        recognition.start(); // Restart recognition on error
      };

      // Add event listeners if they haven't been added yet
      if (!listenersAdded.current) {
        recognition.addEventListener('result', handleResult);
        recognition.addEventListener('end', handleEnd);
        recognition.addEventListener('error', handleError);
        listenersAdded.current = true; // Mark listeners as added
      }

      // Start recognition if listening
      if (isListening) {
        recognition.start();
      }

      return () => {
        recognition.stop();
        recognition.removeEventListener('result', handleResult);
        recognition.removeEventListener('end', handleEnd);
        recognition.removeEventListener('error', handleError);
        clearTimeout(silenceTimeoutRef.current); // Clear the timeout on cleanup
        listenersAdded.current = false; // Reset listeners added state on cleanup
      };
    } else {
      console.log('Speech recognition not supported in this browser.');
    }
  }, [isListening, equation]);

  const toggleListening = () => {
    if (isListening) {
      console.log('Stopping speech recognition...');
      console.log('Current equation:', equation);
    } else {
      console.log('Starting speech recognition...');
    }
    setIsListening(!isListening); // Toggle the listening state
  };

  return (
    <div className="self-center flex flex-col mt-[60px] items-center">
      <h2 className="max-w-[283px]" onClick={toggleListening}>
        <div
          className="bg-[#664229] rounded-[10px] flex self-center
        items-center justify-center max-w-[283px] min-w-[283px]
         min-h-[60px] 
        cursor-pointer gap-[10px]"
        >
          {isListening ? (
            <>
              <p className="text-[24px] font-Roboto-Black text-white">
                Stop Recording
              </p>
              <div
                className="w-[24px] h-[24px] bg-white border 
            border-solid border-black ml-[10px]"
              />
            </>
          ) : (
            <>
              <p className="text-[24px] font-Roboto-Black text-white">
                Start Recording
              </p>
              <img src={microphone} alt="Mic" />
            </>
          )}
        </div>
      </h2>
      <div
        className="max-w-[1080px] min-w-[1080px] bg-white rounded-[10px]
      border-[3px] border-solid border-[#664229] min-h-[80px]
      self-center mt-[24px] flex justify-center items-center px-[100px] "
      >
        <p
          className="font-Inter text-[24px] text-[#434343]
        relative"
        >
          <TextStatus />
        </p>
      </div>
    </div>
  );
}

export default SpeechRecognitionComponent;
