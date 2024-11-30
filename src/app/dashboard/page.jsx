import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="layout grid grid-cols-12">
        <div className="col-span-2 h-[95vh] border-r-2 px-5 py-5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
