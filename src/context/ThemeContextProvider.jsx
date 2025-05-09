import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false) // false -> light

    const handleTheme = () => setTheme(!theme)

    const toggleTheme = theme ? "dark" : "light"

    const toggleIcon = theme ? "☀️" : "🌙"

    // Desde 2015 llega acotacion de objetos literales
    const data = {toggleTheme, handleTheme, toggleIcon}

  return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider