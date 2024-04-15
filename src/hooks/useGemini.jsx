import { useState } from "react";

const useGemini = () => {
  // Declaring States
  const [chats, setChats] = useState([]);
  // Input Handler
  const handleTextInput = (e) => {
    e.preventDefault();
    const inputField = e.target.textInput;
    const inputString = inputField.value;

    console.log(inputString);
    setChats((prevChats) => {
      return [...prevChats, { message: inputString, isSender: true }];
    });
    inputField.value = "";
  };

  const payload = { handleTextInput, chats, setChats };

  return payload;
};

export default useGemini;
