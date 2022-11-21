import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import * as React from 'react'

import { Slider } from './Slider'

export interface ControlsExampleProps {
	topics: any,
}

export class ControlsExample extends React.Component<ControlsExampleProps> {
	render() {
		return (
			<Card className="controls widget">
				<div style={{gridArea: "a"}}>
					<Button variant="contained">Contained button</Button>
				</div>
				<div style={{gridArea: "b"}}>
					<Button variant="contained" disabled>Contained button</Button>
				</div>
				<div style={{gridArea: "c"}}>
					<Button variant="outlined">Outlined button</Button>
				</div>
				<div style={{gridArea: "d"}}>
					<Button variant="outlined" disabled>Outlined button</Button>
				</div>
				<div style={{gridArea: "e"}}>
					<Slider
						name="Slider 1"
						min={0}
						max={100}
						step={10}
						defaultValue={0}
						topic={this.props.topics['/slider1']}
					/>
				</div>
				<div style={{gridArea: "f"}}>
					<Slider
						name="Slider 2"
						min={-420}
						max={420}
						step={40}
						defaultValue={69}
						topic={this.props.topics['/slider2']}
					/>
				</div>
				<div style={{gridArea: "g"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "h"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "i"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "j"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "k"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "l"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "m"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
				<div style={{gridArea: "n"}}>
					<Button variant="outlined">Outlined</Button>
				</div>
			</Card>
		)
	}
}
