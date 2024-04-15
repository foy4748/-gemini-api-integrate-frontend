import { useState } from "react";

const useGemini = (apiEndpoint = "http://localhost:3001/gemini-ai") => {
  // Declaring States

  //// Storing chat messages
  /*
  [
    {
        message: String,
        isSender: Boolean
    },
    {
        message: "Sample Message",
        isSender: true
    },
  ]
  */
  const [chats, setChats] = useState([]);

  const [isLoading, setIsloading] = useState(false);

  // Interact with Gemini
  const askGemini = async (inputText, callBack) => {
    const payload = {
      prompt: inputText,
    };

    console.log(payload);
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    if (callBack) {
      callBack();
    }
    return result;
  };

  // Input Handler
  const handleTextInput = async (e) => {
    e.preventDefault();
    const inputField = e.target.textInput;
    const inputString = inputField.value;

    inputField.value = "";

    // Setting user prompt to state
    setChats((prevChats) => {
      return [...prevChats, { message: inputString, isSender: true }];
    });

    setIsloading(true);
    const result = await askGemini(inputString, () => setIsloading(false));

    setChats((prevChats) => {
      return [
        ...prevChats,
        { message: result.gemini_response, isSender: false },
      ];
    });
  };

  const payload = {
    handleTextInput,
    chats,
    setChats,
    askGemini,
    isLoading,
    setIsloading,
  };

  return payload;
};

export default useGemini;
