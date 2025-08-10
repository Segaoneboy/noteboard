'use client';

import { useState } from 'react';
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegForm(){
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;

        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const res = await fetch('https://noteboard-server.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                // тут сервер вернул ошибку (например, 400 или 500)
                throw new Error(data.message || 'Ошибка регистрации');
            }

            // всё прошло успешно
            toast.success('Аккаунт успешно создан!');
            form.reset();
            router.replace("/");
        } catch (err: any) {
            toast.error(`Ошибка: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };


    return(
        <>
            <div className="flex min-h-screen items-center justify-center  px-4">
                <div className="w-full max-w-sm space-y-6 text-white">
                    <div className="flex flex-col items-center">
                        <img src="/logo.png" alt="логотип" width={80} height={80} />
                        <h1 className="text-2xl mt-4 text-center">Зарегестрировать аккаунт</h1>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm mb-1">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                required
                                className="w-full rounded bg-[#282828] p-2 focus:outline-none focus:ring-2 focus:ring-[#575757]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full rounded bg-[#282828] p-2 focus:outline-none focus:ring-2 focus:ring-[#575757]"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full rounded bg-[#282828] p-2 focus:outline-none focus:ring-2 focus:ring-[#575757] "
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded bg-[#f5ff75] hover:bg-[#f2ff5d] text-black py-2 font-medium transition"
                        >
                            {loading ? 'Создание...' : 'Зарегестрировать аккаунт'}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400">
                        Уже есть аккаунт?{" "}
                        <a href="#" className="text-[#f5ff75] hover:text-[#faff9f]">
                            Войти в аккаунт
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}