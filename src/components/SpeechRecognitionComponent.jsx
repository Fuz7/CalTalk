import { useEffect, useRef, useState } from 'react';
import microphone from '@assets/microphone.svg'


function SpeechRecognitionComponent({}){
  const recognitionRef = useRef(null); // Ref to hold the SpeechRecognition instance
  const [isListening, setIsListening] = useState(false); // State to track if speech recognition is active
  const [equation, setEquation] = useState(''); // State to hold the equation
  const silenceTimeoutRef = useRef(null); // Ref to hold the silence timeout
  const listenersAdded = useRef(false); // Ref to track if listeners have been added

  useEffect(() => {
    // Check for SpeechRecognition support
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (window.SpeechRecognition) {
      const recognition = new window.SpeechRecognition();
      recognitionRef.current = recognition; // Store in ref for access later
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      const handleResult = (e) => {
        const dict = {
          singko: '5',
          zero: '0',
          dungaga: '+',
          dos: '2',
          'baby boy': 'James Oliver',
          dongaga: '+',
          tres: '3',
          kwatro: '4',
          quattro: '4',
          nueve: '9',
          sais:'6',
          siete:'7',
          otso:'8',
          jis: '10',
          divide: '/',
        };

        const transcript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join(' ');

        const sortedKeys = Object.keys(dict).sort(
          (a, b) => b.length - a.length,
        );
        let bago = transcript;

        // Replace phrases with their corresponding values from the dictionary
        sortedKeys.forEach((key) => {
          const regex = new RegExp(`\\b${key}\\b`, 'g');
          bago = bago.replace(regex, dict[key]);
        });

        console.log('Value: ' + bago);
        
        // Clear previous timeout and set a new one for silence
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = setTimeout(() => {
          setEquation((equation) => equation + bago); // Update the equation state
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
  }, [isListening]);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (isListening) {
      console.log('Stopping speech recognition...');
      console.log('Current equation:', equation);
    } else {
      console.log('Starting speech recognition...');
    }
    setIsListening(!isListening); // Toggle the listening state
  };

  return (
    <div className="self-center flex flex-col mt-[60px]">
      <h2 onClick={toggleListening}>
        <div className='bg-[#664229] rounded-[10px] flex 
        items-center justify-center max-w-[283px] min-h-[60px] 
        cursor-pointer gap-[10px]'>

        {isListening
          ?(
            <>
            <p className='text-[24px] font-Roboto-Black text-white'>
              Stop Recording
            </p>
            <div className='w-[24px] h-[24px] bg-white border 
            border-solid border-black ml-[10px]' />
            </>)
          : (
            <>
            <p className='text-[24px] font-Roboto-Black text-white'>
              Start Recording
            </p>
            <img src={microphone} alt="Mic" />
            </>
          )}
          </div>
      </h2>
      <p>Start speaking, and it will recognize your speech!</p>
      <p>Equation: {equation}</p> {/* Display the current equation */}
    </div>
  );
};

export default SpeechRecognitionComponent;