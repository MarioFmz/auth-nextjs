import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  children?: React.ReactNode
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <>
      <title>{title}</title>

      <meta name="description" content={pageDescription} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={pageDescription} />
      <nav>
        <Navbar />
      </nav>
      <main>
        <h2>Soy el layout Admin</h2>
        {children}
      </main>
      <Navbar />
    </>
  );
};
