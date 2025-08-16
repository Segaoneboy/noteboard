"use client"

import {useUser} from "@/context/UserContext";
import Link from "next/link";

export default function Home() {
    const {authorized, name } = useUser();


    return(
        <>
            <div className="flex flex-col xl:flex-row  min-h-screen mt-10 md:mt-0">
                <div className="xl:w-1/2 flex flex-col items-center-safe justify-center-safe gap-4 mb-4 xl:mb-0">
                    <h1 className="md:text-5xl  xl:text-7xl  text-4xl lg:ml-6 text-center lg:text-left "><span className="text-[#f5ff75]">NoteBoard</span> - ваш личный помощник</h1>
                </div>
                <div className="grid xl:w-1/2 xl:grid-cols-2 xl:grid-rows-1  grid-cols-1 grid-rows-2 gap-6 justify-items-center items-center">
                    <div className="m-4 rounded-2xl bg-[#282828] md:max-w-[380px] max-w-[300px] ">
                        <img src="./test.png" alt="test" width={380} height={380} className="rounded-t-2xl"/>
                        <h2 className="text-center text-2xl m-1 ">Пример 1</h2>
                        <p className="m-4">Эта карточка просто пример. А Картинка - аватарка разработчика</p>
                    </div>
                    <div className="m-4 rounded-2xl bg-[#282828] md:max-w-[380px] max-w-[300px]">
                            {authorized ? (
                                <Link
                                    href="/dashboard"
                                    className=" p-2 rounded-lg   "
                                >
                                    <img src="/test2.png" alt="test" width={380} height={380} className="rounded-t-2xl "/>
                                    <h2 className="  text-center text-2xl md:hover:text-[#f8ff8a] md:text-white text-[#f8ff8a]">
                                        Создать первую заметку
                                    </h2>
                                </Link>
                            ) : (
                                <Link
                                    href="/auth"
                                    className=" p-2 rounded-lg  "
                                >
                                    <img src="/test2.png" alt="test" width={380} height={380} className="rounded-t-2xl "/>
                                    <h2 className="  text-center text-2xl md:hover:text-[#f8ff8a] md:text-white text-[#f8ff8a]">
                                        Создать первую заметку
                                    </h2>
                                </Link>
                            )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="lg:w-1/2 w-full rounded-2xl p-12">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">Что такое <span className="text-[#f5ff75]">NoteBoard</span>?</h3>
                    <p className="text-md md:text-xl"><span className="text-[#f5ff75]">NoteBoard</span> - это специальное веб-приложение для ваших заметок. Само по себе оно является простой доской с карточками заметок. Вы можете сохранить какое-то изображение с подписями и тегами </p>

                </div>
            </div>

        </>
    )
}