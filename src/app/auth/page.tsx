"use client"
import {useEffect, useState} from "react";
import AuthForm from "@/components/UI/AuthForm";
import RegForm from "@/components/UI/RegForm";
import ForgotPassForm from "@/components/UI/ForgotPassForm";

export default function Authorization(){
    const [mode, setMode] = useState<"signup" | "login" | "forgotpass">('login')
    const updateHashMode = () =>{
        const hash = window.location.hash;
        if(hash === "#signup"){
            setMode('signup')
        } else if(hash === "#forgotpass"){
            setMode("forgotpass")
        } else{
            setMode("login")
        }
    }
    useEffect(() =>{
        updateHashMode()

        window.addEventListener("hashchange", updateHashMode);
        return () => {
            window.removeEventListener("hashchange", updateHashMode);
        }
    }, [])

    if( mode === "signup" ){
        return <RegForm/>
    } else if(mode === "forgotpass"){
        return <ForgotPassForm/>
    } else{
        return <AuthForm/>
    }
}