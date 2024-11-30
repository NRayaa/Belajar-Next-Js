import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {
  return (
    <div>
              <div className="navbar h-[5vh] border-b-2 flex justify-between items-center top-0 w-full py-10 px-10">
        <div className="">
          <Link href="#">
            <h1 className="text-3xl font-extrabold">LOGO</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="gray"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </Link>

          <p className="font-semibold md:block hidden">Anas Syihabuddin</p>

          <Avatar>
            <AvatarImage className="object-cover" src="/jason.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Navbar