import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'video.js'

import { App } from './tsx/App'
import { Controls } from './controls/Controls'
import ros from './ros/ros'
import topics from './ros/topics'

const rootElement = document.getElementById('root')

// If the root element can be found
if(rootElement !== null) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(React.createElement(App, {ros: ros, topics: topics}))
}

// Gamepad init
const controls: Controls = new Controls()
