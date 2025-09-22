'use client'
import { useEffect, useState } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";

const crewSchema = z.object({
  nama: z.string().nonempty({message: "Tidak boleh kosong"}),
  role: z.string().nonempty({message: "Tidak boleh kosong"}),
  moto: z.string().nonempty({message: "Tidak boleh kosong"}),
  image: z.any().optional(), // biar bisa skip upload
});

export default function Form({ id }: { id: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(crewSchema),
  });

  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);
  const [oldImage, setOldImage] = useState<string | null>(null);

  // Ambil data galery untuk prefill
  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/crews/${id}`);
        if (!res.ok) throw new Error("Gagal mengambil data crew");
        const data = await res.json();

        reset({
          nama: data.nama,
          moto: data.moto,
          role: data.role,
        });
        setOldImage(data.image); // simpan image lama
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrew();
  }, [id, reset]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("nama", data.nama);
      formData.append("role", data.role);
      formData.append("moto", data.moto);

      // kalau ada file baru, tambahkan ke FormData
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const res = await fetch(`http://localhost:5000/api/crews/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal mengupdate crew");

      const result = await res.json();
      console.log("Crew berhasil diperbarui:", result);

      alert("Crew berhasil diperbarui");
      router.push("/admin/crew");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengupdate crew");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3.5 text-[#333333]"
    >

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Nama</label>
        <input
          type="text"
          {...register("nama")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.nama ? "border-2 border-red-700" : "border-[#333333]"
          }`}
        />
      </div>


      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Role</label>
        <input
          type="text"
          {...register("role")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.role ? "border-2 border-red-700" : "border-[#333333]"
          }`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Moto</label>
        <input
          type="text"
          {...register("moto")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.moto ? "border-2 border-red-700" : "border-[#333333]"
          }`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Image</label>
        <input
          type="file"
          {...register("image")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreview(URL.createObjectURL(file));
            } else {
              setPreview(null);
            }
          }}
          className="py-3 pl-4 pr-2 border rounded-2xl text-sm"
        />
      </div>

      {/* Tampilkan preview baru atau gambar lama */}
      {preview ? (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1">Preview Baru:</p>
          <Image
            src={preview}
            alt="Preview"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-lg border"
          />
        </div>
      ) : oldImage ? (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1">Gambar Lama:</p>
          <Image
            src={oldImage}
            alt="Old"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-lg border"
          />
        </div>
      ) : null}

      <button
        className="bg-gradient-to-r from-[#333333] to-[#7F807B] py-2.5 text-white rounded-full w-full cursor-pointer"
        type="submit"
      >
        Edit Crew
      </button>
    </form>
  );
}
