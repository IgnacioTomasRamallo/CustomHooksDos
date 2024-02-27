import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        hasError: null,
        isLoading: true,

    })
    
    const getFetch = async() => {
        setState({
            ...state,
            isLoading: false
        })

        const resp = await fetch(url);
        const data = await resp.json();
    }

    useEffect(() => {
      
        getFetch()
      
      }, [url])
    
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
