import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout: number;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = window.setTimeout(() => {
          if (loop || wordIndex < words.length - 1) {
            setIsDeleting(true);
          }
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime, loop]);

  return displayText;
}
