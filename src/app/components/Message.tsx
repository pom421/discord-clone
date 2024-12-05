import { type PropsWithChildren } from "react"

type Props = {
  icon: string
  user: string
  date: Date
}

export const Message = ({ children, icon, user, date }: PropsWithChildren<Props>) => {
  return <>{children}</>
}
