import { useState } from "react"

const useCount = () => {

    const [count, setCount] = useState(1);

    const agregar = () => setCount(count + 1);
    const decrementar = () => setCount(count - 1);

    return{count, agregar, decrementar}
}

export default useCount