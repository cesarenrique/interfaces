import React from "react";


interface HoraItem {
    id: number;
    hora: string;
}

interface ListaHoras {
    horas: HoraItem[];
}

export function ListadoHoras({horas}:ListaHoras) {
    return (
        <div>
            <h2>Lista horas</h2>
            <ul>
                {horas.map((item)=>(
                    <li key={item.id}>{item.hora}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListadoHoras;