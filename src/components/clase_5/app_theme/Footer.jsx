import { ThemeContext } from "@/context/ThemeContextProvider"
import { useContext } from "react"

const Footer = () => {

  const {toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <footer className={toggleTheme}>
        <h2>Footer</h2>
      </footer>

      <style jsx>{`
        footer {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Footer;
