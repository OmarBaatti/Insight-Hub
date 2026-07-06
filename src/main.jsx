import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./routes/AppRoutes";
import './index.css'
import './theme.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
