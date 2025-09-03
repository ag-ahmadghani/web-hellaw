import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineAdd } from "react-icons/md";

const galerys = [
  {
    tanggal: "19/06/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ",
    image: "/asset/kongo-hellaw.png"
  },
  {
    tanggal: "19/06/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ",
    image: "/asset/kongo-hellaw.png"
  },
  {
    tanggal: "19/06/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ",
    image: "/asset/kongo-hellaw.png"
  },
  {
    tanggal: "19/06/2025",
    acara: "Live Perform",
    lokasi: "JKT",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ",
    image: "/asset/kongo-hellaw.png"
  },
]

export default function Agenda() {
  return (
    <div className="p-10 w-full flex flex-col gap-10 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Data Galery</h1>
        <a href="#" className="flex items-center gap-2 border p-2 text-sm rounded-md bg-green-600 text-white"><MdOutlineAdd /> Tambah Galery</a>
      </div>
      <Table className="w-full">
          <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Tanggal</TableHead>
                <TableHead>Acara</TableHead>
                <TableHead>Lokasi</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead>Image</TableHead>
                <TableHead colSpan={2}>Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {galerys.map((galery) => (
              <TableRow key={galery.tanggal}>
                  <TableCell className="font-medium">{galery.tanggal}</TableCell>
                  <TableCell>{galery.acara}</TableCell>
                  <TableCell>{galery.lokasi}</TableCell>
                  <TableCell>{galery.deskripsi}</TableCell>
                  <TableCell><Image src={galery.image} alt="Profile" width={100} height={100} className="self-center"/></TableCell>
                  <TableCell><a href="#"><FiEdit className="text-yellow-500"/></a></TableCell>
                  <TableCell><a href="#"><MdDelete className="text-red-500"/></a></TableCell>
              </TableRow>
              ))}
          </TableBody>
      </Table>
    </div>
  )
}
