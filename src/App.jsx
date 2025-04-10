
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


function App()
{
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.language(language)
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      Hello from Tajikistan!
    </>
  )
}

export default App
