import createTheme from '@mui/material/styles/createTheme'
import { ThemeProvider } from '@mui/material'
import * as React from 'react'

import { Placeholder } from './Placeholder'

export interface AppProps {
	ros: any,
	topics: any,
}

export class App extends React.Component<AppProps> {
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
				<div style={{gridArea: "a"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "b"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "c"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "d"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "e"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "f"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "g"}}><Placeholder></Placeholder></div>
				<div style={{gridArea: "h"}}><Placeholder></Placeholder></div>
			</ThemeProvider>
		)
	}
}
