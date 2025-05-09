// Paso 1 - Importar la nave
import { BooksContext } from "@/context/BooksContextProvider"
// Paso 2 - Llamar cartero (el hook useContext)
import { useContext } from "react"


const BooksList = () => {

  // Paso 3 - Extraer el paquete de la nave
  const books = useContext(BooksContext)

  return (
    <>
        <ul>
          {
            books.map(book => <li key={book.id}>
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
            </li>)
          }
        </ul>
    </>
  )
}

export default BooksList