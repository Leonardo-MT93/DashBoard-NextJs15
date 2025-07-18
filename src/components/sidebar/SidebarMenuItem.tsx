'use client'
import { usePathname } from "next/navigation";
import styles from './SidebarMenuItem.module.css';
import Link from "next/link";

interface Props {
    path: string;
    icon: React.ReactNode;
    title: string;
    subTitle: string;
}

const SidebarMenuItem = ({path, icon, title, subTitle}: Props) => {

    const pathname = usePathname();

  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   transition ease-linear duration-150 
     ${styles.option} ${(pathname === path) && styles['activeOption']}

    `}>
            {/* ${ pathname === path ? 'bg-red-900' : ''} */}
    <div>
        {icon}

    </div>
    <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
    </div>
</Link>
  )
}

export default SidebarMenuItem