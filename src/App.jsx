import { Input } from "@material-tailwind/react";
import "./App.css";
import SingleMessage from "./components/SingleMessage";
import useGemini from "./hooks/useGemini";

function App() {
  const { handleTextInput, chats } = useGemini();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="chatContainer w-full h-full lg:w-[90%] lg:h-[90%]  bg-blue-gray-600 border flex flex-col justify-end rounded-lg">
          <div className="w-full flex flex-col items-center justify-center mb-4">
            {chats.map((chat, idx) => {
              return (
                <SingleMessage
                  key={idx}
                  message={chat.message}
                  isSender={chat.isSender}
                />
              );
            })}
            <div className="mt-4 w-9/12">
              <form onSubmit={handleTextInput}>
                <Input
                  name="textInput"
                  color="white"
                  variant="standard"
                  placeholder="Ask the AI"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
