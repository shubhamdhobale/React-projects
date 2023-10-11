import Random from "./components/Random";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="w-full h-full flex flex-col relative bg-gradient-to-r from-sky-500 to-indigo-500  ">
    <h1 className="bg-red-50 rounded-lg  w-11/12 text-3xl mt-[40px] font-bold py-2 ml-14 text-center">RANDOM GIFS</h1>
    <div className="flex flex-col items-center">
    <Random/>
    <Tags/>
    </div>
  
    </div>
  );
}

export default App;
