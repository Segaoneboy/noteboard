"use client"

export default function Home() {
    return(
        <>
            <div className="flex  min-h-screen flex-wrap">
                <div className="w-1/2 flex justify-center items-center ">
                    <h1 className="text-7xl ml-6"><span className="text-[#f5ff75]">NoteBoard</span> - ваш личный помощник</h1>
                </div>
                <div className="w-1/2 flex flex-col justify-center justify-items-center flex-wrap items-center md:flex-row  ">
                    <div className="m-4 rounded-2xl bg-[#282828] max-w-[380px] ">
                        <img src="./test.png" alt="test" width={380} height={380} className="rounded-t-2xl"/>
                        <h2 className="text-center text-2xl m-1 ">Пример 1</h2>
                        <p className="m-4">Эта карточка просто пример. А Картинка - аватарка разработчика</p>
                    </div>
                    <div className="m-4 rounded-2xl bg-[#282828] max-w-[380px]">
                        <img src="./test2.jpg" alt="test" width={380} height={380} className="rounded-t-2xl"/>
                        <h2 className="text-center text-2xl m-1 ">Пример 2</h2>
                        <p className="m-4">Это тоже пример карточки, но уже с другой картинкой</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="w-1/2 bg-[#282828] rounded-2xl p-12">
                    <h3 className="text-5xl mb-2">Что такое <span className="text-[#f5ff75]">NoteBoard</span>?</h3>
                    <p className="text-2xl "><span className="text-[#f5ff75]">NoteBoard</span> - это специальное веб-приложение для ваших заметок. Само по себе оно является простой доской с карточками заметок. Вы можете сохранить какое-то изображение с подписями и тегами </p>
                </div>
            </div>
        </>
    )
}