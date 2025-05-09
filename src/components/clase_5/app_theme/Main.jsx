import { ThemeContext } from "@/context/ThemeContextProvider"
import { LanguageContext } from "@/context/LanguageContextProvider"
import { useContext } from "react"

const Main = () => {

  const {toggleTheme} = useContext(ThemeContext)
  const {toggleLanguage} = useContext(LanguageContext)
  const {title, subtitle, description} = toggleLanguage

  return (
    <>
        <main className={toggleTheme}>
            <h2>Main</h2>

            <section>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p>{description}</p>
            </section>
        </main>

        <style jsx>{`
            main {
                height: 100vh;
            }
        `}</style>
    </>
  )
}

export default Main