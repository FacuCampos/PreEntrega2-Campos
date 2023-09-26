import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { HomePage , ContactoPage , TiendaPage , NosotrosPage , ItemDetailContainerPage } from "../pages";

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
        path: '/tienda/categoria/:categoria',
        element: <TiendaPage />
    },
    {
        path: '/tienda/producto/:idProducto',
        element: <ItemDetailContainerPage />
    }
])

const Navigation = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Navigation;