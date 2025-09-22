'use client'
import { FieldValues, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const crewSchema = z.object({
  nama: z.string().nonempty({message: "Tidak boleh kosong"}),
  role: z.string().nonempty({message: "Tidak boleh kosong"}),
  moto: z.string().nonempty({message: "Tidak boleh kosong"}),
  image: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "File harus diunggah.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
});

export default function Form() {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(crewSchema)
  });

  const onSubmit = async (data: FieldValues) => {
  try {
    const formData = new FormData();
    formData.append("nama", data.nama);
    formData.append("role", data.role);
    formData.append("moto", data.moto);
    formData.append("image", data.image[0]);

    const res = await fetch("http://localhost:5000/api/crews", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Gagal menambahkan crew");

    const result = await res.json();
    console.log("Crew berhasil ditambahkan", result);
    router.push("/admin/crew");
  } catch (error) {
    alert("Terjadi kesalahan saat menambahkan crew");
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5 text-[#333333]">
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="nama">
          Nama
        </label>
        <input
          type="text"
          {...register("nama")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.nama ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan nama"
        />
        {errors.nama && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.nama.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="role">
          Role
        </label>
        <input
          type="text"
          {...register("role")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.role ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan role"
        />
        {errors.role && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.role.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="moto">
          Moto
        </label>
        <input
          type="text"
          {...register("moto")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.moto ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan moto"
        />
        {errors.moto && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.moto.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="image">
          Image
        </label>
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
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.image ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan image"
        />
        {errors.image?.message && (
          <p className="text-red-500 text-sm mt-1 italic">
            {String(errors.image.message)}
          </p>
        )}
      </div>
      
      {/* Preview */}
      {preview && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1">Preview:</p>
          <Image
            src={preview}
            alt="Preview"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-lg border"
          />
        </div>
      )}
      <button
        className="bg-gradient-to-r from-[#333333] to-[#7F807B] py-2.5 text-white rounded-full w-full md:px-[8rem]"
        type="submit"
      >
        Tambah Crew
      </button>
    </form>
  );
}
