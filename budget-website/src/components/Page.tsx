import Header from "./Header"
import Footer from "./Footer"

const Page = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <Header />
        <>
          {children}
        </>
      <Footer />
    </>
  )
}

export default Page