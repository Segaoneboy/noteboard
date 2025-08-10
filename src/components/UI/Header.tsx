"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import {useState} from "react";
export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [authorized, setAuthorized] = useState(false);

    fetch("/api/user/getinfo")
        .then(async (res) => {
            if (res.status === 401) {
                setAuthorized(false);
                return;
            }
            setAuthorized(true);
            const data = await res.json();
            setUserName(data.name);

        }).catch(err => console.log(err));

    if (pathname === "/auth") return <></>;
    return (
        /* Сделать хедер статичным при скроле */
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <Link href="/" className="text-[#EFFF41] text-xl">NB</Link>
            </div>
            <div className="flex flex-wrap gap-2 justify-between items-center">
                {authorized ? <Link href={`/dashboard?name=${encodeURIComponent(userName)}`}
                                    className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] ">Dashboard </Link> :
                    <Link href="/auth"
                          className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] ">Account </Link>}
                {/*<Link href="/newcard" className="p-1  rounded-lg hover:underline">Create note</Link>*/}
            </div>
        </header>
    )
}
