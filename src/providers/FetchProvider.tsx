"use client"

import { useEffect } from "react";
import { setupFetchWithRefresh} from "@/components/utils/fetchWithRefresh";

export default function FetchProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        setupFetchWithRefresh();
    }, []);

    return <>{children}</>
}