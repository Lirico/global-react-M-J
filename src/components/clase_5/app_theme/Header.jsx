import { ThemeContext } from "@/context/ThemeContextProvider"
import { LanguageContext } from "@/context/LanguageContextProvider"
import { useContext } from "react"

const Header = () => {

  const {toggleTheme, handleTheme, toggleIcon} = useContext(ThemeContext)
  const {handleLanguage, toggleFlags} = useContext(LanguageContext)

  return (
    <>
        <header className={toggleTheme}>
          <button onClick={handleTheme}>{toggleIcon}</button>
          <button onClick={handleLanguage}>
            <img src={toggleFlags} alt="Toggle flags" />
          </button>
        </header>

        <style jsx>{`
          header {
            display: flex;
            align-items: center;
          }
          button {
            background-color: transparent;
            border: none;
            font-size: 1.75rem;
            display: flex;
            align-items: center;
          }
          img {
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            object-fit: cover;
          }
        `}</style>
    </>
  )
}

export default Header