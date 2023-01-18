import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export default function NavBar() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image
                className="mr-3 h-6 sm:h-9"
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Happy Hacking
              </span>
            </a>
          </Link>
          <div className="flex items-center space-x-10 text-lg">
            <p className="mr-6  font-medium  dark:text-white hover:underline">
              {isLoggedIn
                ? `Signed in as ${user?.email}`
                : "Not Signed In"}
            </p>
            {isLoggedIn ? (
              <button
                onClick={() => logout()}
                className=" font-bold  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className=" font-bold  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Sign In
              </button>
            )}

            <span className="flex relative h-10 w-10 rounded-full">
              {isLoggedIn ? (
                <Image
                  className=" rounded-full object-cover h-10 w-10 "
                  src={user?.image}
                  alt=""
                  fill
                  sizes="100vw"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
