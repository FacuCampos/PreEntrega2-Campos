import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage , ContactoPage , TiendaPage , NosotrosPage , ItemDetailPage } from "../pages";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/nosotros',
        element: <NosotrosPage />
    },
    {
        path: '/contacto',
        element: <ContactoPage />
    },
    {
        path: '/tienda',
        element: <TiendaPage />
    },
    {
        path: '/producto/:idproducto',
        element: <ItemDetailPage />
    }
])

const Navigation = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Navigation;