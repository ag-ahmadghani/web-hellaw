'use client'
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().nonempty({ message: "Tidak boleh kosong" }),
  password: z.string().nonempty({ message: "Tidak boleh kosong" }),
});

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await fetch("http://localhost:5000/api/auths/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.message || "Login gagal");
        return;
      }

      // login sukses → redirect ke /admin
      router.push("/admin");
      console.log();
    } catch (e) {
      alert("Terjadi kesalahan");
      console.error(e);
    }
  };

  // toggle show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3.5 text-[#333333]"
    >
      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className={`py-3 pl-4 pr-2 rounded-2xl text-sm border ${
            errors.email
              ? "border-2 border-red-700"
              : "border-[#333333]"
          }`}
          placeholder="Masukan email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium" htmlFor="password">
          Kata Sandi
        </label>
        <div className="flex text-sm justify-between gap-1.5 relative items-center">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={`w-full py-3 px-4 pr-10 border rounded-2xl ${
              errors.password
                ? "border-red-700 border-2"
                : "border-[#333333]"
            }`}
            placeholder="Masukan Password"
          />
          <button
            type="button"
            className="text-xl cursor-pointer absolute right-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 italic">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        className="bg-gradient-to-r from-[#333333] to-[#7F807B] py-2.5 text-white rounded-full w-full md:px-[8rem]"
        type="submit"
      >
        Masuk
      </button>
    </form>
  );
}
