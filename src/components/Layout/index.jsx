import Navbar from "../Navbar"


const Layout = (prop, {children})=> {
    return (
       <>
       <Navbar />
       <main className="main">
            <h1>{prop.greeting}</h1>
           {children}
       </main>
       </>
    )
   }
   
   export default Layout