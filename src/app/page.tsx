    "use client"
    import {useEffect, useState} from "react";
    import {Card} from "@/components/UI/Card";
    import {CardType} from "@/components/Types/Card";

    export default function Home() {
        const [cards, setCards] = useState([])
        const [currentPage, setCurrentPage] = useState<number>(1)
        const [fetching, setFetching] = useState(true)
        const [totalPages, setTotalPages] = useState<number>(0)
        const [totalTrue, setTotalTrue] = useState<boolean>(false)
        const [error, setError] = useState<boolean>(false)
        // @ts-ignore
        const scrollHandler = (e) =>{
            if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 800){
                setFetching(true)
            }
        }
        useEffect(()=>{
            if(fetching && (totalPages === 0 || totalPages >= currentPage)){
                fetch(`https://noteboard-server.onrender.com/api/cards/getallcards?limit=10&page=${currentPage}`)
                    .then(res =>res.json())
                    .then(data => {
                        // @ts-ignore
                        setCards([...cards, ...data.cards])
                        setCurrentPage(currentPage + 1)
                        setTotalPages(data.totalPages)
                    })
                    .catch(err => {
                        setError(true)
                    })
                    .finally(() => setFetching(false));
            } else{
                setTotalTrue(true)
            }

        },[fetching])
        useEffect(()=>{
            document.addEventListener('scroll', scrollHandler);

            return function (){
                document.removeEventListener('scroll', scrollHandler);
            }
        },[])
        if(cards.length > 0){
            return(
                <div>
                    <div className = "flex flex-col  flex-wrap items-center md:flex-row md:justify-between ">
                        {
                            cards.map((card: CardType) => (
                                <Card
                                    id={card.id}
                                    image={card.image}
                                    key={card.id}
                                    name={card.name}
                                    description={card.description}
                                />
                            ))
                        }
                    </div>

                    {totalTrue && <p className="text-center mt-12">Карточки закончились</p>}
                </div>
            )
        }else if(error){
            return(
                <div className="text-center text-red-500">
                    <p>Ошибка загрузки данных, попробуйте снова</p>
                </div>
            )
        }
        else{
            return(
                <div className="text-center">
                    <p>Подгрузка данных...</p>
                </div>

            )
        }

    }
