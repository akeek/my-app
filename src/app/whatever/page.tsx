import { ReactNode } from "react"

const OverSkriver = ({children}:{children?:ReactNode}) => {
    return (
        <h1 className="text-red-600 font-bold p-20">{children}</h1>
    )
}

function Heisann() {
        return (<div>dfgdfg</div>)
}

const Ugh = function() {
    return (<div>heiehei</div>)
}

const Pippi = () => {
    minFunc('123',{
        tall1: 1,
        tall2: 34,
//        verdi1: 'herere'
    },
'Aktiv'
);
    return (<div>dfgdfgdfgfd</div>)
}

const Bowling = () => (<div>dfgddfgfd</div>)

const minFunc = (tall:string,noeAnnet:{tall1:number,tall2:number,verdi1?:string}, medlemStatus: 'Aktiv' | 'Passiv') => {

    const res = noeAnnet.tall1 + noeAnnet.tall2 + 4;
    console.log(res);

    JSON.stringify({heisann:tall})
}



export default function WhateverPage() {
    return (
        <div>
            <OverSkriver>Overskrift</OverSkriver>
            <Heisann />
            <Ugh />
            <Pippi />
            <Bowling />
        </div>
    )
}