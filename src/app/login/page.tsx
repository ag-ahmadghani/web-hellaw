import type { Metadata } from "next";
import Form from "./form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hellaw - Login",
  description: "...",
};

export default function LoginPemilik() {
  return (
    <div className="min-h-screen max-h-screen w-full overflow-x-hidden flex place-content-center md:px-10 md:py-1 ">
      {/* Form Pengisian Login */}
        <div className="flex my-auto md:rounded-4xl md:shadow-[2px_2px_8px_0px_rgba(0,0,0,0.1)] justify-center md:opacity-85 md:bg-white">
            <div className="flex flex-col gap-3 md:pb-20 md:pt-7 md:px-15 ">
                
                <Image src="/asset/logo-hellaw.png" alt="Profile" width={200} height={200} className="self-center"/>
                <p className="text-center font-medium text-lg text-[#333333]">Login</p>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    </div>
  );
}
