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
					<Button
						name="Button2"
						topic={this.props.topics['/test']}
						message="button 2 pressed"
					/>
					<Button
						name="Button3"
						topic={this.props.topics['/test']}
						message="button 3 pressed"
					/>
				</div>
				<div style={{gridArea: "c"}}>
					<Button
						name="Button4"
						topic={this.props.topics['/test']}
						message="button 4 pressed"
					/>
					<Button
						name="Button5"
						topic={this.props.topics['/test']}
						message="button 5 pressed"
					/>
				</div>
				<div style={{gridArea: "d"}}>
					<Button
						name="Button6"
						topic={this.props.topics['/test']}
						message="button 6 pressed"
					/>
					<Button
						name="Button7"
						topic={this.props.topics['/test']}
						message="button 7 pressed"
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
					<Switch
						name="uno"
						topic={this.props.topics['/switch1']}
					/>
				</div>
				<div style={{gridArea: "h"}}>
				<Switch
						name="dos"
						topic={this.props.topics['/switch2']}
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
