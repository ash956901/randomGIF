import Random from "./components/Random";
import Tag from "./components/Tag" ;

export default function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen flex flex-col background relative items-center">

      <h1 className="px-10 w-11/12 py-2 text-4xl bg-white  text-center mt-[40px]  font-bold rounded-lg ">RANDOM GIFS</h1>
      
      <div className="flex items-center gap-y-10 mt-[30px] w-full flex-col">
          <Random/>
          <Tag/>
      </div>

    </div>
  );
}
