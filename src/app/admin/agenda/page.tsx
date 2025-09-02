import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineAdd } from "react-icons/md";

const agendas = [
  {
    tanggal: "19/06/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    tempat: "Lektur Cofee",
  },
  {
    tanggal: "19/08/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    tempat: "Lektur Cofee",
  },
  {
    tanggal: "19/09/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    tempat: "Lektur Cofee",
  },
  {
    tanggal: "19/10/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    tempat: "Lektur Cofee",
  },
  {
    tanggal: "19/11/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    tempat: "Lektur Cofee",
  },
]

export default function Agenda() {
  return (
    <div className="p-10 w-full flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Data Agenda</h1>
        <a href="#" className="flex items-center gap-2 border p-2 text-sm rounded-md bg-green-600 text-white"><MdOutlineAdd /> Tambah Agenda</a>
      </div>
      <Table className="w-full">
          <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Tanggal</TableHead>
                <TableHead>Acara</TableHead>
                <TableHead>Lokasi</TableHead>
                <TableHead>Tempat</TableHead>
                <TableHead colSpan={2}>Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {agendas.map((agenda) => (
              <TableRow key={agenda.tanggal}>
                  <TableCell className="font-medium">{agenda.tanggal}</TableCell>
                  <TableCell>{agenda.acara}</TableCell>
                  <TableCell>{agenda.lokasi}</TableCell>
                  <TableCell>{agenda.tempat}</TableCell>
                  <TableCell><a href="#"><FiEdit className="text-yellow-500"/></a></TableCell>
                  <TableCell><a href="#"><MdDelete className="text-red-500"/></a></TableCell>
              </TableRow>
              ))}
          </TableBody>
      </Table>
    </div>
  )
}
