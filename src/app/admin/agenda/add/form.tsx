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
import { useRouter } from "next/navigation";


const agendaSchema = z.object({
  tanggal: z.string().transform((str) => new Date(str)).refine((date) => !isNaN(date.getTime()), { message: "Tanggal tidak valid" }),
  acara: z.string().nonempty({message: "Tidak boleh kosong"}),
  lokasi: z.string().nonempty({message: "Tidak boleh kosong"}),
  tempat: z.string().nonempty({message: "Tidak boleh kosong"})
});

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(agendaSchema)
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const formatedData = {
        ...data,
        tanggal: new Date(data.tanggal).toISOString().split("T")[0],
      };

      const res = await fetch("http://localhost:5000/api/agendas", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(formatedData)
      })

      if (!res.ok) throw new Error("Gagal menambahkan agenda");

      const result = await res.json();
      console.log("Agenda berhasil ditambahkan", result);
      router.push("/admin/agenda")

      reset();
      alert("Agenda berhasil ditambahkan");
      
    } catch (error) {
      alert("Terjadi kesalahan saat menambahakan agenda");
    }
    
    // console.log("data berhasil dimasukan", data);
    // reset();
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
                    <SelectItem value="Jakarta">Jakarta</SelectItem>
                    <SelectItem value="Bandung">Bandung</SelectItem>
                    <SelectItem value="Tanggerang">Tanggerang</SelectItem>
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
        <label className="font-medium" htmlFor="tempat">
          Tempat
        </label>
        <input
          type="text"
          {...register("tempat")}
          className={`py-3 pl-4 pr-2 border border-[#333333] rounded-2xl text-sm ${errors.tempat ? "border-2 border-red-700" : "border-[#333333]"}`}
          placeholder="Masukan tempat"
        />
        {errors.tempat && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.tempat.message}
          </p>
        )}
      </div>
      <button
        className="bg-gradient-to-r from-[#333333] to-[#7F807B] py-2.5 text-white rounded-full w-full md:px-[8rem] cursor-pointer"
        type="submit"
      >
        Tambah Agenda
      </button>
    </form>
  );
}
