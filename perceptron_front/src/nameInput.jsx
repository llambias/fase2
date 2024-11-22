import { useState } from "react"

export default function NameInput(){
    const [nombre, setNombre] = useState() 
    function handleChange(nombre){
        setNombre(nombre)
    }
    return (
        <>
        <h2>componente 1</h2>
        <input onChange = {e=> handleChange(e.target.value)}>{nombre}</input>
        </>
    )

}