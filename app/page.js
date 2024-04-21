import Info from "./components/Info";
import { StrictMode } from 'react';


export default function Home() {
  return (
    <StrictMode>
      <main className="flex flex-col h-screen w-screen justify-center items-center bg-gradient-to-t from-black to-gray-900">
        <div className="flex justify-center items-center p-4 sm:p-8 cursor-default">
          <h1 className="text-white font-semibold md:text-2xl">SteamID Finder</h1>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 h-screen w-screen justify-center items-center ">
          <Info/>
        </div>
      </main>
    </StrictMode>
  );
}
