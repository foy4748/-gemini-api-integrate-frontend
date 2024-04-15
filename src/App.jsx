import { Input } from "@material-tailwind/react";
import "./App.css";
import SingleMessage from "./components/SingleMessage";
import useGemini from "./hooks/useGemini";
import LoadingMessage from "./components/LoadingMessage";

function App() {
  const { handleTextInput, chats, isLoading } = useGemini();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="chatContainer w-full h-full lg:w-[90%] lg:h-[90%]  bg-blue-gray-600 border flex flex-col justify-end rounded-lg">
          {/* Chat Messages */}
          <div className="w-full h-full flex flex-col items-center  mb-4 overflow-y-auto">
            <div className="mt-8"></div>
            {chats.map((chat, idx) => {
              return (
                <SingleMessage
                  key={idx}
                  message={chat.message}
                  isSender={chat.isSender}
                />
              );
            })}
            {isLoading && <LoadingMessage />}
          </div>

          {/* Input Field */}
          <div className="w-full flex justify-center  mb-4 pb-2">
            <form onSubmit={handleTextInput} className="text-white w-9/12">
              <Input
                name="textInput"
                color="white"
                autoFocus
                variant="standard"
                placeholder="Ask the AI"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
