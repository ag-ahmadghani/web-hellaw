"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function formatDate(dateString: string | number | Date) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
export default function TableAgenda() {
    const [agendas, setAgendas] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/agendas")
    .then((res) => res.json())
    .then((data) => {
      console.log("API data:", data);
      setAgendas(data);
    })
    .catch((err) => console.error(err));
}, []);
    return (  
        <div>
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
                    <TableRow key={agenda.id}>
                        <TableCell className="font-medium">{formatDate(agenda.tanggal)}</TableCell>
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
    );
}