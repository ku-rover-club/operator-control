import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { App } from './tsx/App'

const rootElement = document.getElementById('root')

// If the root element can be found
if(rootElement !== null) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(React.createElement(App))
}
