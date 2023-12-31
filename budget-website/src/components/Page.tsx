import Header from "./Header"
import Footer from "./Footer"

const Page = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Page