"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/components/Types/User";

const UserContext = createContext<User>({
    authorized: false,
    name: '',
})

export const UserProvider = ({ children}: { children: React.ReactNode}) => {
    const [user, setUser] = useState<User>({ authorized: false, name: "" })

    useEffect(() =>{
        fetch('/api/user/getinfo')
            .then(async (res) =>{
                if(res.status === 401){
                    setUser({ authorized: false, name: "" });
                    return;
                }
                const data = await res.json();
                setUser({ authorized: true, name: data.name });
            })
            .catch((err)=> {
                console.error(err);
            })
    },[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)