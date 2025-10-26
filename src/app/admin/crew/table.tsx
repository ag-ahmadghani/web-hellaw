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
import Link from "next/link";
import Image from 'next/image';

type Crew = {
  id: number;
  nama: string;
  role: string;
  moto: string;
  image: string;
};

// function formatDate(dateString: string | number | Date) {
//   const d = new Date(dateString);
//   const day = String(d.getDate()).padStart(2, "0");
//   const month = String(d.getMonth() + 1).padStart(2, "0");
//   const year = d.getFullYear();
//   return `${day}/${month}/${year}`;
// }

export default function TableCrew() {
  const [Crews, setCrews] = useState<Crew[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCrews();
  }, []);

  const fetchCrews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/crews", {
      method: "GET",
      credentials: "include", // kirim cookie ke server
    })
      console.log();
      if (!res.ok) throw new Error("Gagal fetch crew");
      const data = await res.json();
      setCrews(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus item crew ini?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/Crews/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal hapus crew");
      setCrews((prev) => prev.filter((item) => item.id !== id));

      alert("Crew berhasil dihapus");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus crew");
    }
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Nama</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Moto</TableHead>
            <TableHead>Image</TableHead>
            <TableHead colSpan={2}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Crews.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {item.nama}
              </TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.moto}</TableCell>
              <TableCell>
                <Image
                  src={item.image}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell>
                <Link href={`/admin/galery/edit/${item.id}`}>
                  <FiEdit className="text-yellow-500 cursor-pointer" />
                </Link>
              </TableCell>
              <TableCell>
                <button
                  className="pt-1.5"
                  onClick={() => handleDelete(item.id)}
                >
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
