import AddCircle from '@mui/icons-material/AddCircle'
import Card from '@mui/material/Card'
import * as React from 'react'

export class Placeholder extends React.Component {
	render() {
		return (
			<Card className="widget">
				<AddCircle className="centered" color="primary" sx={{ fontSize: 100 }} />
			</Card>
		)
	}
}
