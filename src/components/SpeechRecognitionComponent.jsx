import { useEffect, useRef, useState } from 'react';

const SpeechRecognitionComponent = () => {
  const recognitionRef = useRef(null); // Ref to hold the SpeechRecognition instance
  const [isListening, setIsListening] = useState(false); // State to track if speech recognition is active
  
  useEffect(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (window.SpeechRecognition) {
      const recognition = new window.SpeechRecognition();
      recognitionRef.current = recognition; // Store in ref for access later
      recognition.interimResults = true;
      recognition.maxAlternatives = 3;

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
          jis: '10',
          divide: '/'
        };

        
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join(' ');

        const sortedKeys = Object.keys(dict).sort((a, b) => b.length - a.length);
        let bago = transcript;

        sortedKeys.forEach(key => {
          const regex = new RegExp(`\\b${key}\\b`, 'g');
          bago = bago.replace(regex, dict[key]);
        });

        console.log(bago.trim()); // Log the final result after mapping
      };

      const handleEnd = () => {
        console.log('Speech recognition stopped.');
        recognition.start()
        
      };

      const handleError = (e) => {
        console.error('Error during speech recognition:', e);
        recognition.start();
      };

      recognition.addEventListener('result', handleResult);
      recognition.addEventListener('end', handleEnd);
      recognition.addEventListener('error', handleError);

      return () => {
        recognition.stop();
        recognition.removeEventListener('result', handleResult);
        recognition.removeEventListener('end', handleEnd);
        recognition.removeEventListener('error', handleError);
      };
    } else {
      console.log('Speech recognition not supported in this browser.');
    }
  }, []);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (isListening) {
      recognition.stop(); // Stop speech recognition
      console.log('Stopping speech recognition...');
    } else {
      recognition.start(); // Start speech recognition
      console.log('Starting speech recognition...');
    }
    setIsListening(!isListening); // Toggle the listening state
  };

  return (
    <div>
      <h1 onClick={toggleListening}>
        {isListening ? 'Click to Stop Recognition' : 'Click to Start Recognition'}
      </h1>
      <p>Start speaking, and it will recognize your speech!</p>
    </div>
  );
};

export default SpeechRecognitionComponent