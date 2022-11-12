import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { languageContext } from './global/global-states'

// Components
import Navbar from './components/NavigationBar/Navbar'

// Styling
import './app.scss'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
	{
		path: '/', 
		element: <Home></Home>
	}, 
]);

const App = () => {
	const [language, setLanguage] = useState<string>('id')
	return (
		<>
			<languageContext.Provider value={{language, setLanguage}}>
				<Navbar></Navbar>
				<RouterProvider router={router}></RouterProvider>
			</languageContext.Provider>
		</>
	)
}

export default App
