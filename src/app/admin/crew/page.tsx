import { MdOutlineAdd } from "react-icons/md";
import TableCrew from "./table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hellaw Admin - Crew",
  description: "...",
};

export default function Crew() {
  return (
    <div className="p-10 w-full flex flex-col gap-10 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Data Crew</h1>
        <a href="/admin/crew/add" className="flex items-center gap-2 border p-2 text-sm rounded-md bg-green-600 text-white"><MdOutlineAdd /> Tambah Crew</a>
      </div>
      <TableCrew />
    </div>
  )
}
