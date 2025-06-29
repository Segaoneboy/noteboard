"use client";
import Link from "next/link";
export default function Header() {
        return (
            <header className={"flex justify-between items-center p-4"}>
                <div className="flex items-center gap-2">
                    <Link href="/">NoteBoard</Link>
                </div>
                <Link href="/newcard" className="border p-1 rounded-lg">Create note</Link>
            </header>
        )
}
