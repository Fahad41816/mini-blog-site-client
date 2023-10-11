import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import VideoPlay from './pages/DetailsPage/DetailsPage.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"blogs/:blogId",
        element: <VideoPlay/>, 
        loader: ({params}) => {return params} 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>,
)
