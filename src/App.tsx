import React, { useState } from 'react'
import './app.scss'
import Navbar from './components/NavigationBar/Navbar'
import { languageContext } from './global/global-states'

const App = () => {
	const [language, setLanguage] = useState<string>('id')
	return (
		<>
			<languageContext.Provider value={{language, setLanguage}}>
				<Navbar></Navbar>
			</languageContext.Provider>
		</>
	)
}

export default App
