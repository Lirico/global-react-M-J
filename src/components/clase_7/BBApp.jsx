import { useState, useEffect } from "react";
import Quote from "./Quote";
import axios from "axios"
import Loader from "./Loader";

const initialQuote = {
    text: '',
    author: ''
}

// ASYNC AWAIT

const BBApp = () => {

    const [quote, setQuote] = useState(initialQuote)
    const [isLoading, setIsLoading] = useState(false)

    const updateQuote = async () => {
        setIsLoading(true)

        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"

        const response = await axios.get(ENDPOINT)

        const data = await response.data

        const [newQuote] = data;

        const {quote: text, author} = newQuote;

        setQuote({text,author})

        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }

    useEffect(() => {
        updateQuote()
    }, [])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading && <Loader />
      }      
      {
        !isLoading && <Quote quote={quote}/>
      }
      <button onClick={updateQuote}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;


