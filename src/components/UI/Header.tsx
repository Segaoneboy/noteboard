"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useUser} from "@/context/UserContext";
export default function Header() {
    const pathname = usePathname();
    const { authorized, name } = useUser();


    if (pathname === "/auth") return <></>;
    return (
        /* Сделать хедер статичным при скроле */
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <Link href="/" className="text-[#EFFF41] text-xl">NB</Link>
            </div>
            <div className="flex flex-wrap gap-2 justify-between items-center">
                {authorized ? <Link href={`/dashboard`}
                                    className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] ">Dashboard </Link> :
                    <Link href="/auth"
                          className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] ">Account </Link>}
                {/*<Link href="/newcard" className="p-1  rounded-lg hover:underline">Create note</Link>*/}
            </div>
        </header>
    )
}
