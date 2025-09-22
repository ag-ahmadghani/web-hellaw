import type { Metadata } from "next";
import Form from "./form";

export const metadata: Metadata = {
  title: "Hellaw Admin - Crew Edit",
  description: "...",
};

export default async function EditCrew({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-10 w-full flex flex-col gap-10">
        <div>
          <h1 className="text-2xl font-semibold">Edit Crew</h1>
        </div>
        <Form id={id}/>
    </div>
  );
}
