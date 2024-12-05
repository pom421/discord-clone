import { DiscordIcon } from "./components/svg/DiscordIcon"
import { PrivateIcon } from "./components/svg/PrivateIcon"

export default function Home() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-2 items-center w-[72px] bg-gray-900 pt-3 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center">
            <div className="w-[30px] h-[30px]">
              <DiscordIcon />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[240px] bg-gray-700">
        <div className="flex px-[10px] h-12 items-center bg-slate-500 shadow-sm shadow-gray-900 ">
          <button className="whitespace-nowrap rounded-[4px] overflow-hidden text-sm font-medium bg-gray-900 px-[1px] py-[6px]">
            Rechercher/lancer une conversation
          </button>
        </div>
        <div className="flex px-2 ">
          <div className="flex gap-4">
            <div className="w-6 h-6">
              <PrivateIcon />
            </div>
            Amis
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-500">Messages</div>
    </div>
  )
}
