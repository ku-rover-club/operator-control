import createTheme from '@mui/material/styles/createTheme'
import { ThemeProvider } from '@mui/material'
import * as React from 'react'

import { Camera } from './Camera'
import { ControlsExample } from './ControlsExample'
import { Iframe } from './Iframe'
import { Placeholder } from './Placeholder'
import { Reader } from './Reader'

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
				<div className="widget-container" style={{gridArea: "a"}}>
					<Camera stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"/>
				</div>
				<div className="widget-container" style={{gridArea: "b"}}>
					<Iframe src="https://example.com"/>
				</div>
				<div className="widget-container" style={{gridArea: "c"}}>
					<ControlsExample topics={this.props.topics}/>
				</div>
				<div className="widget-container" style={{gridArea: "d"}}>
					<Camera stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"/>
				</div>
				<div className="widget-container" style={{gridArea: "e"}}>
					<Camera stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"/>
				</div>
				<div className="widget-container" style={{gridArea: "f"}}>
					<Reader topic={this.props.topics['/log']}/>
				</div>
			</ThemeProvider>
		)
	}
}
