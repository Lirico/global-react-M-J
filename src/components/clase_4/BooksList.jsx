import { useState } from "react"
// Operador de propagacion o spread operator
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = []

// arr3.push(...arr1)
// arr3.push(...arr2)

// console.log(arr3)



const BooksList = () => {

    const [books, setBooks] = useState(() => [
        {
            id: "1",
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien"
        },
        {
            id: "2",
            title: "Harry Potter",
            author: "J.K. Rowling"
        },
        {
            id: "3",
            title: "Arcane",
            author: "Riot Games"
        },
    ])

    const agregarLibro = () => setBooks((books) => {
        return [
            ...books,
            {
                id: "4",
                title: "El Trader Disciplinado",
                author: "Mark Douglas"
            }
        ]
    })

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
        <button onClick={agregarLibro}>Agregar</button>
    </>
  )
}

export default BooksList




const zapatillas = {
    marca: "Addidas",
    modelo: "Racer",
    genero: "Ninios",
    tipoAncho: "Estrecho",
    usado: true
}

