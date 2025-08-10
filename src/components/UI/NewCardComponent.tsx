'use client';

import {useEffect, useRef, useState} from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function NewCardComponent() {
    const [loading, setLoading] = useState(false);
    const [filename, setFilename] = useState(false)
    const [value, setValue] = useState("");
    const maxChars = 400;

    const textareaRef = useRef(null);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        fetch('/api/cards/create', {
            method: 'POST',
            body: formData,
        })
            .then(res => {
                if(res.status === 500){
                    toast.error(`Ошибка создания карточки, попробуйте снова`);
                } else{
                    toast.success('Карточка успешно создана!');
                    form.reset();
                }

            })
            .catch(err => {
                toast.error(`${err.message}`);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="flex  items-center justify-center  px-4">
            <div className="w-full max-w-sm space-y-6 text-white">
                <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="логотип" width={80} height={80}/>
                    <h1 className="text-2xl font-semibold mt-4 text-center">Создать новую заметку</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm mb-1">
                            Имя заметки:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Введите название"
                            className="w-full rounded bg-[#282828] p-2 focus:outline-none focus:ring-2 focus:ring-[#575757]"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm mb-1">
                            Описание заметки:
                        </label>
                        <textarea
                            ref = {textareaRef}
                            value = {value}
                            onChange={handleChange}
                            name="description"
                            id="description"
                            maxLength={maxChars}
                            rows="12"
                            placeholder="Введите описание"
                            className="w-full rounded bg-[#282828] p-2 focus:outline-none focus:ring-2 focus:ring-[#575757] "
                            required
                        />
                        <p>
                            {value.length} / {maxChars}
                        </p>
                    </div>

                    <div>
                        <label htmlFor="image" className="block  mb-4">
                            Изображение:
                        </label>
                        <label
                            htmlFor="image"
                            className={`cursor-pointer rounded p-2  ${filename ? 'bg-[#f8ff8a] text-black hover:bg-[#f2ff5d]' : 'bg-[#282828] hover:text-[#f5ff75]'}`}
                        >
                            {filename ? 'Изображение загруженно' : "Загрузите изображение"}
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="hidden"
                            accept="image/*"
                            required
                            onChange={(e) => {
                                setFilename(true)
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded bg-[#f2ff5d] hover:bg-[#efff40] text-black py-2 font-medium transition"
                    >
                        {loading ? 'Создание...' : 'Создать карточку'}
                    </button>
                </form>
            </div>
        </div>
    );
}
