"use client"
import React from "react";
import {CardType} from "@/components/Types/Card";

export function Card(props: CardType) {
    return (
        <div className="m-4  rounded-2xl shadow-lg min-w-[200px] ">
            <img src={props.image}
                   width={380}
                   height={380}
                   alt="Card Image"
                   className="rounded-t-2xl"
            />
            <h2 className="text-center text-2xl m-1 font-bold">{props.name}</h2>
            <p className="m-4">{props.description}</p>
        </div>
    )
}
