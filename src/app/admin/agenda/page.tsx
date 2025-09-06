import { MdOutlineAdd } from "react-icons/md";
import TableAgenda from "./table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hellaw Admin - Agenda",
  description: "...",
};

export default function Agenda() {
  
  return (
    <div className="p-10 w-full flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Data Agenda</h1>
        <a href="/admin/agenda/add" className="flex items-center gap-2 border p-2 text-sm rounded-md bg-green-600 text-white"><MdOutlineAdd /> Tambah Agenda</a>
      </div>
      <TableAgenda />
    </div>
  )
}
