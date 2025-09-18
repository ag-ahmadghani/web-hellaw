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

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const galerySchema = z.object({
  tanggal: z.string().transform((str) => new Date(str)).refine((date) => !isNaN(date.getTime()), { message: "Tanggal tidak valid" }),
  acara: z.string().nonempty({ message: "Tidak boleh kosong" }),
  lokasi: z.string().nonempty({ message: "Tidak boleh kosong" }),
  deskripsi: z.string().nonempty({ message: "Tidak boleh kosong" }),
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
    resolver: zodResolver(galerySchema),
  });

  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);
  const [oldImage, setOldImage] = useState<string | null>(null);

  // Ambil data galery untuk prefill
  useEffect(() => {
    const fetchGalery = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/galerys/${id}`);
        if (!res.ok) throw new Error("Gagal mengambil data galery");
        const data = await res.json();

        reset({
          tanggal: new Date(data.tanggal).toISOString().split("T")[0],
          acara: data.acara,
          lokasi: data.lokasi,
          deskripsi: data.deskripsi,
        });
        setOldImage(data.image); // simpan image lama
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalery();
  }, [id, reset]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("tanggal", new Date(data.tanggal).toISOString().split("T")[0]);
      formData.append("acara", data.acara);
      formData.append("lokasi", data.lokasi);
      formData.append("deskripsi", data.deskripsi);

      // kalau ada file baru, tambahkan ke FormData
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const res = await fetch(`http://localhost:5000/api/galerys/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal mengupdate galery");

      const result = await res.json();
      console.log("Galery berhasil diperbarui:", result);

      alert("Galery berhasil diperbarui");
      router.push("/admin/galery");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengupdate galery");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3.5 text-[#333333]"
    >
      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Tanggal</label>
        <input
          type="date"
          {...register("tanggal")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.tanggal ? "border-2 border-red-700" : "border-[#333333]"
          }`}
        />
        {errors.tanggal && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.tanggal.message as string}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Acara</label>
        <input
          type="text"
          {...register("acara")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.acara ? "border-2 border-red-700" : "border-[#333333]"
          }`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Lokasi</label>
        <Controller
          name="lokasi"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={`w-full border rounded-2xl text-sm ${
                  errors.lokasi ? "border-2 border-red-700" : "border-[#333333]"
                }`}
              >
                <SelectValue placeholder="Lokasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Jakarta">Jakarta</SelectItem>
                <SelectItem value="Bandung">Bandung</SelectItem>
                <SelectItem value="Tanggerang">Tanggerang</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium">Deskripsi</label>
        <input
          type="text"
          {...register("deskripsi")}
          className={`py-3 pl-4 pr-2 border rounded-2xl text-sm ${
            errors.deskripsi ? "border-2 border-red-700" : "border-[#333333]"
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
        Edit Galery
      </button>
    </form>
  );
}
