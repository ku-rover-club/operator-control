import Card from '@mui/material/Card'
import * as React from 'react'

import { Button } from './Button'
import { Slider } from './Slider'

export interface ControlsExampleProps {
	topics: any,
}

export class ControlsExample extends React.Component<ControlsExampleProps> {
	render() {
		return (
			<Card className="controls widget">
				<div style={{gridArea: "a"}}>
					<Button
						name="Butt"
						topic={this.props.topics['/test']}
						message="butt pressed"
					/>
				</div>
				<div style={{gridArea: "b"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "c"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "d"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
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
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "h"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "i"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "j"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "k"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "l"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "m"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "n"}}>
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
			</Card>
		)
	}
}
