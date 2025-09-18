"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';

type Agenda = {
  id: number;
  tanggal: string;
  acara: string;
  lokasi: string;
  tempat: string;
};

function formatDate(dateString: string | number | Date) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
export default function TableAgenda() {
    const [agendas, setAgendas] = useState<Agenda[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAgendas();
    }, []);

    const fetchAgendas = async () => {
        try {
        const res = await fetch("http://localhost:5000/api/agendas");
        if (!res.ok) throw new Error("Gagal fetch agendas");
        const data = await res.json();
        setAgendas(data);
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin ingin menghapus agenda ini?")) return;

        try {
        const res = await fetch(`http://localhost:5000/api/agendas/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) throw new Error("Gagal hapus agenda");
        setAgendas((prev) => prev.filter((agenda) => agenda.id !== id));

        alert("Agenda berhasil dihapus");
        } catch (err) {
        console.error(err);
        alert("Gagal menghapus agenda");
        }
    };

    if (loading) return <p className="p-10">Loading...</p>;

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
                        <TableCell><Link href={`/admin/agenda/edit/${agenda.id}`}><FiEdit className="text-yellow-500"/></Link></TableCell>
                        <TableCell>
                            <button className="pt-1.5" onClick={() => handleDelete(agenda.id)}>
                                <MdDelete className="text-red-500 cursor-pointer" />
                            </button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}