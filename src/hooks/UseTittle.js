import { useEffect } from "react"

const useTittle = tittle => {
    useEffect(() => {
        document.title = `${tittle} - Travel With Sayed`;
    }, [tittle])
}

export default useTittle; 