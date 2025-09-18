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

type Gallery = {
  id: number;
  acara: string;
  lokasi: string;
  deskripsi: string;
  tanggal: string;
  image: string; // path gambar dari backend
};

function formatDate(dateString: string | number | Date) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function TableGallery() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/galerys");
      console.log();
      if (!res.ok) throw new Error("Gagal fetch gallery");
      const data = await res.json();
      setGalleries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus item gallery ini?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/galerys/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal hapus gallery");
      setGalleries((prev) => prev.filter((item) => item.id !== id));

      alert("Gallery berhasil dihapus");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus gallery");
    }
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Tanggal</TableHead>
            <TableHead>Acara</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Image</TableHead>
            <TableHead colSpan={2}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {galleries.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {formatDate(item.tanggal)}
              </TableCell>
              <TableCell>{item.acara}</TableCell>
              <TableCell>{item.lokasi}</TableCell>
              <TableCell ><p className="wrap-anywhere text-wrap">{item.deskripsi}</p></TableCell>
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
