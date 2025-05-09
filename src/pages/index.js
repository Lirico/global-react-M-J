import Footer from "@/components/clase_5/app_theme/Footer";
import Header from "@/components/clase_5/app_theme/Header";
import Main from "@/components/clase_5/app_theme/Main";
import LanguageContextProvider from "@/context/LanguageContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";




export default function Home() {
  return (
    <>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Header />
          <Main />
          <Footer />  
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  );
}

