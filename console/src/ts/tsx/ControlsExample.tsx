import Card from '@mui/material/Card'
import * as React from 'react'

import { Button } from './Button'
import { Slider } from './Slider'
import { Switch } from './Switch'

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
					<Button
						name="Button"
						topic={this.props.topics['/test']}
						message="button pressed"
					/>
				</div>
				<div style={{gridArea: "b"}}>
					<Slider
						name="Slider 1"
						min={0}
						max={100}
						step={10}
						defaultValue={0}
						topic={this.props.topics['/slider1']}
					/>
				</div>
				<div style={{gridArea: "c"}}>
					<Switch
						name="uno"
						topic={this.props.topics['/switch1']}
					/>
				</div>
				<div style={{gridArea: "d"}}>
					<Switch
						name="dos"
						topic={this.props.topics['/switch2']}
					/>
				</div>
				<div style={{gridArea: "e"}}>
					<Switch
						name="tres"
						topic={this.props.topics['/switch2']}
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
			</Card>
		)
	}
}
