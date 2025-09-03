'use client'
import { FieldValues, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Controller } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const galerySchema = z.object({
  tanggal: z.string().transform((str) => new Date(str)).refine((date) => !isNaN(date.getTime()), { message: "Tanggal tidak valid" }),
  acara: z.string().nonempty({message: "Tidak boleh kosong"}),
  lokasi: z.string().nonempty({message: "Tidak boleh kosong"}),
  deskripsi: z.string().nonempty({message: "Tidak boleh kosong"}),
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
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(galerySchema)
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("data berhasil dimasukan", data);
    setPreview(null);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5 text-[#333333]">
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="tanggal">
          Tanggal
        </label>
        <input
          type="date"
          {...register("tanggal")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.tanggal ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan tanggal"
        />
        {errors.tanggal && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.tanggal.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="acara">
          Acara
        </label>
        <input
          type="text"
          {...register("acara")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.acara ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan acara"
        />
        {errors.acara && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.acara.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="lokasi">
          Lokasi
        </label>
        <Controller 
        name="lokasi"
        control={control}
        render={({field}) => (
            <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={`w-full border border-[#333333] rounded-2xl text-sm ${errors.lokasi ? "border-2 border-red-700" : "border-[#333333]"}`}>
                    <SelectValue placeholder="Lokasi" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Jakarta</SelectItem>
                    <SelectItem value="dark">Bandung</SelectItem>
                    <SelectItem value="system">Tanggerang</SelectItem>
                </SelectContent>
            </Select>
        )}
        />
        {errors.lokasi && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.lokasi.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="deskripsi">
          Deskripsi
        </label>
        <input
          type="text"
          {...register("deskripsi")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.deskripsi ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan deskripsi"
        />
        {errors.deskripsi && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.deskripsi.message}
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
        Edit Galery
      </button>
    </form>
  );
}
