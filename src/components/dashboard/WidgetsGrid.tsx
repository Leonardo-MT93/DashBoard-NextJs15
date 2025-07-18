'use client'
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.count.count);

  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
        <SimpleWidget title={count.toString()} subtitle="Contador de clicks" label="Contador" icon={<IoCartOutline size={70} className="text-indigo-600"/>} href="/dashboard/counter" />
        <SimpleWidget title={count.toString()} subtitle="Contador de clicks" label="Contador" icon={<IoCartOutline size={70} className="text-indigo-600"/>} href="/dashboard/counter" />
      </div>
  )
}