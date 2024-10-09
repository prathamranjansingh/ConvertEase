import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import CompressPage from "./pages/CompressPage"
function App() {

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden text-black antialiased dark:bg-black dark:text-white bg-neutral-100">
      <Navbar />
      <Header />
      <CompressPage />
    </div>
  )
}

export default App
