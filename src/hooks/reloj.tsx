import { useEffect, useState } from 'react';

export default function Clock  () {

    const [time,setTime] = useState<string>(new Date().toLocaleTimeString())

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(id);
    },[]);

    return (
        <div id="reloj01"
            style={{
                fontFamily: "system-ui",
                fontSize: "2rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ddd",
            }}>
                {time}
        </div>
    );
}