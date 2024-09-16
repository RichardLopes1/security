import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


//importando  o método para a lista de rotas e o provedor de rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//importar as páginas do projeto
import Home from './routes/Home/index.tsx'
import Sobre_nos from './routes/Sobre_nos/index.tsx'
import Error from './routes/Error/index.tsx'
import GlobalStyle from './global-style.ts'
import Seguro from './routes/Seguro/index.tsx'
import Guincho from './routes/guincho/index.tsx'
import Mecanica from './routes/Mecanica/index.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/sobre_nos',
        element: <Sobre_nos/>
      },
      {path:'/seguro',
        element:<Seguro/>
      },
      {path:'/Guincho',
        element:<Guincho/>
      },
      {path:'/Mecanica',
        element:<Mecanica/>
      },
      
    ]
  }
])






createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
  </StrictMode>,
)
