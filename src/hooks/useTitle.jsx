import { useEffect } from "react"

const useTitle = title =>{
        useEffect(()=>{
                document.title = `GLH | ${title}`
        },[title])
}
export default useTitle