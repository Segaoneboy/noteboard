"use client"
import {useState} from "react";
import CardsComponent from "@/components/UI/CardsComponent";
import NewCardComponent from "@/components/UI/NewCardComponent";

export default function Dashboard () {
    const [notestate, setNoteState] = useState<true | false>(true)

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 p-5">
                <h1 className='text-5xl text-center mt-4'> Привет, Сергей</h1>
                <div className="flex gap-5">
                    <button onClick={() => {setNoteState(true)}} className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] "> Мои заметки</button>
                    <button  onClick={() => {setNoteState(false)}} className="p-2 rounded-lg  hover:bg-[#262626]  hover:text-[#f8ff8a] "> Создать заметку</button>
                </div>
                <div>
                    {notestate ? <CardsComponent/> : <NewCardComponent/>}
                </div>
            </div>
        </>
    )
}