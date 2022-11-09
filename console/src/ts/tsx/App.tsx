import { createTheme } from '@mui/material/styles'
import { Container, ThemeProvider } from '@mui/material'
import * as React from 'react'

import { Placeholder } from './Placeholder'

export class App extends React.Component {
	theme = createTheme({
		palette: {
			primary: {
				main: '#536dfe',
			},
			secondary: {
				main: '#ff1744',
			},
			background: {
				default: '#000a12',
				paper: '#0a1929',
			},
			text: {
				primary: 'rgba(255,255,255,0.87)',
				secondary: 'rgba(255,255,255,0.54)',
				disabled: 'rgba(255,255,255,0.38)',
			},
		},
	})

	render() {
		return (
			<ThemeProvider theme={this.theme}>
				<div id="item1"><Placeholder></Placeholder></div>
				<div id="item2"><Placeholder></Placeholder></div>
				<div id="item3"><Placeholder></Placeholder></div>
				<div id="item4"><Placeholder></Placeholder></div>
				<div id="item5"><Placeholder></Placeholder></div>
				<div id="item6"><Placeholder></Placeholder></div>
				<div id="item7"><Placeholder></Placeholder></div>
				<div id="item8"><Placeholder></Placeholder></div>
			</ThemeProvider>
		)
	}
}
