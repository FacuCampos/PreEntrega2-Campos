import { Navbar , Footer} from '../../components'
import './layout.css'

const Layout = ({children})=> {
    return (
       <>
        <Navbar />
        <main className="mainClass">
            {children}
        </main>
        <Footer />
       </>
    )
   }
   
   export default Layout