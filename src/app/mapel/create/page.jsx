import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateMapel = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
          <div className="layout grid grid-cols-12">
            <div className="col-span-2 min-h-screen border-r-2 px-5 py-5 hidden xl:block">
              <Sidebar />
            </div>
            <div className="col-span-12 xl:col-span-10 min-h-screen py-5 px-5">
              <div className="border-2 h-[10rem] rounded-[1rem] px-5 sm:px-10 py-5 flex items-center justify-between">
                <div className="">
                  <Link
                    className="bg-white border-black border-2 px-5 py-4 text-[0.8rem] rounded-md"
                    href="/mapel"
                  >
                    Kembali
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="bg-black px-5 py-4 text-[0.8rem] rounded-md text-white"
                    href="#"
                  >
                    Buat Mapel
                  </Link>
                </div>
              </div>
              <div className="border-2 rounded-[1rem] px-5 sm:px-10 pt-5 pb-10 mt-10">
                <h1 className="text-[2rem] font-semibold">Buat Mapel</h1>
                <div className="mt-10 space-y-5">
                  <div className="w-full items-center">
                    <Label htmlFor="nama">Nama Mapel</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Masukkan nama mapel"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMapel;
