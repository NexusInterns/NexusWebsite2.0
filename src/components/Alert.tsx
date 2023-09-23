import { ReactNode } from "react"

interface Props
{
    children: ReactNode;
    show?: boolean;
    hide?: boolean;
}

const Alert = ( {children, show, hide} : Props) => {
  if (!show || hide) return null;

  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert