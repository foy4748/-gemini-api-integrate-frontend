import { Input } from "@material-tailwind/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="chatContainer w-full h-full lg:w-[90%] lg:h-[90%]  bg-blue-gray-600 border flex flex-col justify-end rounded-lg">
          <div className="w-full flex flex-col items-center justify-center mb-4">
            <div className="w-9/12 flex justify-end">
              <p className="">Test Text 1</p>
            </div>
            <div className="w-9/12">
              <p className="">Test Text 2</p>
            </div>
            <div className="mt-4 w-9/12">
              <Input
                color="orange"
                variant="static"
                label="Write Here"
                placeholder="Ask the AI"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
