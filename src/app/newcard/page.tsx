'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function NewCard() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [filename, setFilename] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        fetch('https://noteboard-server.onrender.com/api/cards/create',{
            method: 'POST',
            body: formData,
        })
            .then(res => {
                toast.success('Карточка успешно создана!');
                form.reset();
                router.replace("/")
            })
            .catch(err => {
                toast.error(`Ошибка ${err.message}`);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="max-w-md w-full border-2 border-black rounded-2xl p-6 bg-white shadow">
                <h1 className="text-3xl text-center mb-4 font-bold">Создание карточки</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block font-semibold">
                            Card name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block font-semibold">
                            Card description:
                        </label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Enter description"
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block font-semibold mb-1">
                            Card image:
                        </label>
                        <label
                            htmlFor="image"
                            className={`cursor-pointer text-white rounded-xl p-2 ${filename ? 'bg-green-500 hover:bg-green-400' : 'bg-black  hover:bg-gray-800' }`}
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
                            onChange={(e) =>{
                                setFilename(true)
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-black text-white rounded p-2 transition ${
                            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                        }`}
                    >
                        {loading ? 'Создание...' : 'Создать карточку'}
                    </button>
                </form>
            </div>
        </div>
    );
}
