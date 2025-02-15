import { useEffect } from "react"
import FormSearch from "./components/FormSearch"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"


function App() {
  const fetchCryptos = useCryptoStore((state) =>  state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  },[])

  return (
    <>
     <div className="container">
        <h1 className="title">Crypto Rates</h1>
        <div className="content">
          <FormSearch/>
          <CryptoPriceDisplay/>
        </div >
     </div> 
    </>
  )
}

export default App
