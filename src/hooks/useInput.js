import { useState } from "react"

export const useInput = (inicialValue = '', type) =>{
    const [value, setInput] = useState(inicialValue)

        const onChange = (event) => setInput(event.target.value) 

        return {value, onChange, type}
}