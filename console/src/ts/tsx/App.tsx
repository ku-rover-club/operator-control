import * as React from 'react'
import {Button, ThemeProvider} from '@mui/material'
import{createTheme} from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#5c6bc0',
		},
		secondary: {
			main: '#29b6f6',
		},
	},
})

export class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Button variant="contained">Hello World</Button>
			</ThemeProvider>
		)
	}
}
