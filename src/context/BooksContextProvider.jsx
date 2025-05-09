// Paso 1 - Importar la funcion con la que crearemos el contexto
import { createContext, useState } from "react"

// Paso 2 - Crear el context (Esta es LA NAVE)
export const BooksContext = createContext() // return []

const BooksContextProvider = ({children}) => {

    // Paso 3 - Definir el paquete (las props)
    const [books, setBooks] = useState(() => [
        {
            id: 1,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
        },
        {
            id: 2,
            title: "Harry Potter",
            author: "J.K. Rowling",
        },
        {
            id: 3,
            title: "El trader disciplinado",
            author: "Mark Douglas",
        },
    ])

    // Paso 4 - Definir al flaco de la gorra (provider)
    // Paso 5 - Colocar el paquete en la mano del flaco (mano -> value del provider)
    // Paso 6 - Definimos la lista de hijos a los permitimos que tengan acceso al paquete
  return (
    <BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider