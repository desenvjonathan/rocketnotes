import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details' 
/*usar chaves para criar um import NOMEADO e deixar o código padronizado*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
)
