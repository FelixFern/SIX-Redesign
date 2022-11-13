import { useState } from 'react'
import { RouterProvider, createBrowserRouter, Outlet, Route, createRoutesFromElements, Routes } from 'react-router-dom'
import { languageContext, tandaiHadirModalContext } from './global/global-states'

// Components
import Navbar from './components/NavigationBar/Navbar'
import TandaiHadirModal from './components/TandaiHadirModal/TandaiHadirModal'
import Home from './pages/Home/Home'
import StatusMahasiswa from './pages/StatusMahasiswa/StatusMahasiswa'

// Styling
import './app.scss'

const AppLayout = () => (
	<>
		<Navbar />
		<Outlet />
	</>
);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<Home></Home>}></Route>
			<Route path='/app/status-mahasiswa' element={<StatusMahasiswa></StatusMahasiswa>}></Route>
		</Route>
	)
);



const App = () => {
	const [language, setLanguage] = useState<string>('id')
	const [isOpen, setModal] = useState<boolean>(false)
	return (
		<>
			<languageContext.Provider value={{language, setLanguage}}>
				<tandaiHadirModalContext.Provider value={{isOpen, setModal}}>
					<Navbar></Navbar>
					<TandaiHadirModal></TandaiHadirModal>
					<RouterProvider router={router}></RouterProvider>
				</tandaiHadirModalContext.Provider>
			</languageContext.Provider>
		</>
	)
}

export default App
