import Image, { StaticImageData } from "next/image"
import { type PropsWithChildren } from "react"

type Props = {
  icon: StaticImageData
  user: string
  date: Date
}

// format date to only show the date with no seconds, like 13/05/2022 22:41
const formatDate = (date: Date) => {
  return date.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export const Message = ({ children, icon, user, date }: PropsWithChildren<Props>) => {
  return (
    <>
      <div className="flex my-4 leading-[1.375rem]">
        <div className="px-4">
          <div className="w-10 h-10 rounded-full bg-gray-700">
            <Image src={icon} alt="avatar" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex items-baseline gap-2">
            <div className="text-violet-500 font-medium">{user}</div>
            <div className="text-xs font-medium text-gray-100">{formatDate(date)}</div>
          </div>
          <div className="text-gray-300">{children}</div>
        </div>
      </div>
    </>
  )
}
