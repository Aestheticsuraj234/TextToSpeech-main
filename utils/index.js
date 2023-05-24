
import * as Clipboard from 'expo-clipboard';
 
 // Write a function to copy the TextInput data to the clipboard
 export  const copyText = async () => {
  await Clipboard.setStringAsync(text);
};

// Write a function to delete the TextInput data
export const deleteText = () => {
  setText('');
};

//   write a function for couting the word
 export const countWord = () => {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
              count++;
          }
      }
      return count + 1;
      
  }
