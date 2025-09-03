import type { Metadata } from "next";
import Form from "./form";

export const metadata: Metadata = {
  title: "Hellaw Admin - Galery Edit",
  description: "...",
};

export default function LoginPemilik() {
  return (
    <div className="p-10 w-full flex flex-col gap-10">
        <div>
          <h1 className="text-2xl font-semibold">Edit Galery</h1>
        </div>
        <Form />
    </div>
  );
}
