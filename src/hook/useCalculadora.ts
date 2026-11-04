import * as Haptics from 'expo-haptics';
import { useState } from 'react';

export const useCalculadora = () => {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0 🐼');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Mapeo de números con sus respectivos emojis
  const numberToEmojiMap: { [key: string]: string } = {
    '0': '0 🐼',
    '1': '1 ⚽',
    '2': '2 🏀',
    '3': '3 🏈',
    '4': '4 🐶',
    '5': '5 🐱',
    '6': '6 🐰',
    '7': '7 🍎',
    '8': '8 🍌',
    '9': '9 🍇'
  };

  const handleButtonPress = (label: string) => {

    // Vibración al presionar cualquier botón
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Botón AC: limpiar calculadora
    if (label === 'AC') {
      setOperation('');
      setResult('0 🐼');
      return;
    }

    // Botón igual: realizar operación
    if (label === '=') {
      try {
        // Limpiar emojis para realizar la operación matemática
        let evalString = operation
          .replace(/[🐼⚽🏀🏈🐶🐱🐰🍎🍌🍇]/g, '')
          .replace(/\s+/g, '')
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/,/g, '.');

        const calcResult = eval(evalString);
        const stringResult = String(calcResult);

        // Comprobar si los dos números sumados tienen el mismo emoji
        const additionMatch = operation.match(
          /(\d+)\s*(🐼|⚽|🏀|🏈|🐶|🐱|🐰|🍎|🍌|🍇)\s*\+\s*(\d+)\s*(🐼|⚽|🏀|🏈|🐶|🐱|🐰|🍎|🍌|🍇)/
        );

        if (additionMatch && additionMatch[2] === additionMatch[4]) {
          setResult(`${stringResult} ${additionMatch[2]}`);
          return;
        }

        // Resultado normal con emojis
        const emojisAppended = stringResult
          .split('')
          .map((char) =>
            char >= '0' && char <= '9'
              ? char + ' ' + numberToEmojiMap[char].slice(2)
              : char
          )
          .join('');

        setResult(emojisAppended);

      } catch (e) {
        setResult('Error');
      }

      return;
    }

    // Si la operación está vacía o hubo un error
    if (operation === '' || result === 'Error') {

      if (label >= '0' && label <= '9') {
        setOperation(numberToEmojiMap[label]);
      } else {
        setOperation(label === ',' ? '0.' : label);
      }

      setResult('');
      return;
    }

    // Agregar número con su emoji correspondiente
    const valueToAdd = (label >= '0' && label <= '9')
      ? ' ' + numberToEmojiMap[label]
      : (label === ',' ? '.' : label);

    setOperation((prev) => prev + valueToAdd);
  };

  return {
    operation,
    result,
    theme,
    setTheme,
    handleButtonPress,
  };
};