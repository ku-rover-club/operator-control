import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'video.js'

import { App } from './tsx/App'
import { Controls } from './controls/Controls'
import ros from './ros/ros'
import topics from './ros/topics'

const MAIN_LOOP_MIN_FREQ: number = 10 // Hz

const rootElement = document.getElementById('root')

// If the root element can be found
if(rootElement !== null) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(React.createElement(App, {ros: ros, topics: topics}))
}

// Gamepad init
const controls: Controls = new Controls(topics['/gamepad-updates'])

// Main program loop
const mainLoop = () => {


	// Queue up next loop
	requestIdleCallback(mainLoop, {timeout: 1000 / MAIN_LOOP_MIN_FREQ})
}

// Run program loop
requestIdleCallback(mainLoop, {timeout: 1000 / MAIN_LOOP_MIN_FREQ})
