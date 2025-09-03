import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineAdd } from "react-icons/md";

const crews = [
  {
    nama: "Rifki Maulidian",
    role: "Gitaris",
    moto: "Gitar Adalah Kunci",
    image: "/asset/kongo-hellaw.png"
  },
  {
    nama: "Rifki Maulidian",
    role: "Gitaris",
    moto: "Gitar Adalah Kunci",
    image: "/asset/kongo-hellaw.png"
  },
  {
    nama: "Rifki Maulidian",
    role: "Gitaris",
    moto: "Gitar Adalah Kunci",
    image: "/asset/kongo-hellaw.png"
  },
]

export default function Crew() {
  return (
    <div className="p-10 w-full flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Data Crew</h1>
        <a href="#" className="flex items-center gap-2 border p-2 text-sm rounded-md bg-green-600 text-white"><MdOutlineAdd /> Tambah Crew</a>
      </div>
      <Table className="w-full">
          <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Nama</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Moto</TableHead>
                <TableHead>Image</TableHead>
                <TableHead colSpan={2}>Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {crews.map((crew) => (
              <TableRow key={crew.nama}>
                  <TableCell className="font-medium">{crew.nama}</TableCell>
                  <TableCell>{crew.role}</TableCell>
                  <TableCell>{crew.moto}</TableCell>
                  <TableCell><Image src={crew.image} alt="Profile" width={100} height={100} className="self-center"/></TableCell>
                  <TableCell><a href="#"><FiEdit className="text-yellow-500"/></a></TableCell>
                  <TableCell><a href="#"><MdDelete className="text-red-500"/></a></TableCell>
              </TableRow>
              ))}
          </TableBody>
      </Table>
    </div>
  )
}
