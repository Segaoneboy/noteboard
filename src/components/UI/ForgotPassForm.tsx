
export default function ForgotPassForm() {
    return(
        <>
            <div className="flex min-h-screen items-center justify-center  px-4">
                <div className="w-full max-w-sm space-y-6 text-white">
                    <div className="flex flex-col items-center">
                        <img src="/logo.png" alt="логотип" width={80} height={80} />
                        <h1 className="text-2xl font-semibold mt-4 text-center">Восстановить пароль</h1>
                    </div>

                    <form className="space-y-4">
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

                        <button
                            type="submit"
                            className="w-full rounded bg-[#f5ff75] hover:bg-[#f2ff5d] text-black py-2 font-medium transition"
                        >
                            Сброс пароля
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400">
                        Don’t have an account?{" "}
                        <a href="#" className="text-[#f5ff75] hover:text-[#faff9f]">
                            Назад к входу
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}