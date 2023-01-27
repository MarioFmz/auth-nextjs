import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  children?: React.ReactNode
}

export const AdminLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h2>Soy el layout Admin</h2>
        {children}
      </main>
    </>
  )
}
