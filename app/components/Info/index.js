"use client"
import { useEffect, useState } from "react";

export default function Info(){
  const regex = /(?<=\/id\/)\d+/
  const [steamIds, setSteamIds] = useState(null)


    useEffect(() => {
      console.log(steamIds)
    }, [steamIds])

    const get_steamid = async (id) => {        
 
        const response = await fetch(`https://steamid-finder-b.vercel.app/get_steam_id?id=${id}`);
        const newData = await response.json();
        setSteamIds(newData)

    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const data = new FormData(e.target)

        if (data.has("profile_input")) {
          const matches = data.get("profile_input").match(regex);
          if(matches){
            get_steamid(matches[0])
          }
        } 
      
    }
    

  


    
    return(
      <>
        <section className="flex flex-col p-4 h-1/2 sm:h-full justify-center items-center w-full ">
 
            <div className="flex flex-col sm:items-center sm:justify-center w-full h-full">
              <div className="flex flex-col items-start p-4 gap-4 sm:p-6 sm:gap-6">
                <p className="text-sm text-gray-400 ">1. Go to your profile and use right click</p>
                <p className="text-sm text-gray-400 ">2. Copy and paste the link in the SteamID search bar</p>
                <p className="text-sm text-gray-400 ">3. Send your profile and wait</p>
              </div>
              <form onSubmit={handleSubmit} id="profile_form" name="profile_form" className="flex w-full justify-center items-center p-6">
                <input type="url" className="w-full outline-none sm:w-3/4 px-2 py-1 xl:w-1/2 text-sm text-center rounded-md" placeholder="www.steam.com/profile"	 id="profile_input" name="profile_input" required minLength="4" size="10" />
              </form>
            </div>
      </section>
      <section className="flex h-full w-full p-4 sm:h-3/4 ">
          {!steamIds ? ( 
            <div className="flex w-full h-full border-double border-4 border-gray-600 backdrop-blur-xl">
                <div className="flex w-full items-center justify-center">
                  <p className="text-white text-opacity-35">Awaiting profile...</p>
                </div>
            </div>
          ) : (
            <div className="flex w-full h-full items-center justify-center border-double border-4  border-gray-600 backdrop-blur-xl">
              <div className="flex flex-col w-full h-full items-center justify-center gap-4 m-4">
                <p className="text-white text-left text-sm text-opacity-35">SteamID 64: {steamIds.steamid64}</p>
                <p className="text-white text-left text-sm text-opacity-35">SteamID Hex: {steamIds.steamid_hex}</p>
              </div>
            </div>
          )}

      </section>
      </>
    )
}