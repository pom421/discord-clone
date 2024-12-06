import avatar1 from "@/app/components/avatars/avatar1.webp"
import { Message } from "./components/Message"
import { DiscordIcon } from "./components/svg/DiscordIcon"
import { PrivateIcon } from "./components/svg/PrivateIcon"

import { cn } from "./lib/tailwind"
import styles from "./styles.module.css"

export default function Home() {
  return (
    <div className="flex h-full font-sans">
      <div
        className={cn(
          "flex flex-col flex-none gap-2 items-center w-[72px] bg-gray-900 pt-3 overflow-y-scroll",
          styles.noScrollbar,
        )}
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="flex-none w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center">
            <div className="w-[30px] h-[30px]">
              <DiscordIcon />
            </div>
          </div>

          <div className="flex-none h-[2px] w-8 rounded-[1px] bg-gray-500"></div>

          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex-none w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center">
              <div className="w-[30px] h-[30px]">
                <DiscordIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-none flex flex-col w-[240px] bg-gray-700">
        <div className="flex flex-shrink-0 gap-2 items-center px-[10px] h-12 shadow-sm shadow-gray-900">
          <button className="whitespace-nowrap text-ellipsis overflow-hidden rounded-[4px] text-sm font-medium bg-gray-800 px-[6px] py-[1px] text-gray-200 leading-5">
            Rechercher/lancer une conversation
          </button>
        </div>
        <div className={cn("flex flex-col px-2 gap-4 pt-4 overflow-y-auto", styles.noScrollbar)}>
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-6 h-6">
                <PrivateIcon />
              </div>
              Channel {index}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-gray-500 relative">
        <div className="flex-none flex gap-2 items-center sticky top-0 px-[10px] h-12 shadow-sm shadow-gray-900">
          # bienvenue
        </div>

        <div className="px-4 pt-8">
          <h3 className="text-[32px] font-bold leading-tight text-center">
            <p>Bienvenue sur</p>
            <p>DeFi France</p>
          </h3>
          <p className="text-sm text-center mt-2">Ceci est le début de la vie de ce serveur.</p>
          <div className="flex-1 overflow-y-auto h-[300px]">
            <div className="flex justify-center mt-6 mb-2 bg-gray-400 h-[1px] relative">
              <span className="absolute -top-2 bg-gray-500 text-gray-400 px-1 text-xs font-semibold">13 mai 2022</span>
            </div>
            <ul>
              {Array.from({ length: 2 }).map((_, index) => (
                <li key={index} className="mt-4 py-[2px]">
                  <Message icon={avatar1} user="Karim B." date={new Date()}>
                    <p>Si un jour des gens viennent se perdre dans ce salon, je suis ouvert à la discussion 😬.</p>
                    <p>J'aurais peut être déménagé d'ici là 😂</p>
                  </Message>
                  <Message icon={avatar1} user="Karim B." date={new Date()}>
                    <p>Ma fille de 11 ans a fait plus simple et m'a demandé du btc pour noel😂</p>
                    <p>J'ai dit qu elle aurait de l'usdc pour acheter la correction</p>
                  </Message>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-6 mb-2 bg-gray-400 mx-4 h-[1px] relative">
              <span className="absolute -top-2 bg-gray-500 text-gray-400 px-1 text-xs font-semibold">21 juin 2022</span>
            </div>
            <ul>
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index} className="mt-4 py-[2px]">
                  <Message icon={avatar1} user="Karim B." date={new Date()}>
                    <p>Si un jour des gens viennent se perdre dans ce salon, je suis ouvert à la discussion 😬.</p>
                    <p>J'aurais peut être déménagé d'ici là 😂</p>
                  </Message>
                  <Message icon={avatar1} user="Karim B." date={new Date()}>
                    <p>Ma fille de 11 ans a fait plus simple et m'a demandé du btc pour noel😂</p>
                    <p>J'ai dit qu elle aurait de l'usdc pour acheter la correction</p>
                  </Message>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
