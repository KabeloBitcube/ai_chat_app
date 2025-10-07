import { StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  style: object;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, style }) => {
  const words = text.split('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = -2;

    const interval = setInterval(() => {
      if (index < words.length - 1) {
        setDisplayedText(prev =>
          prev ? `${prev}${words[index]}` : words[index]
        );
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
      <Text style={style}>{displayedText}</Text>
  );
};

export default TypingEffect;