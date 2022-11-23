import Card from '@mui/material/Card'
import * as React from 'react'
import MaterialSwitch from '@mui/material/Switch'
import { Topic } from 'roslib'

export interface SwitchProps {
	name: string,
	topic: Topic,
}

/**
 * Switch
 * Creates a switch object with a name and a topic it publishes values to.
 */
export class Switch extends React.Component<SwitchProps> {

	/**
	 * Change
	 * Gets called when the switch value changes. Should wait until the value
	 * isn't changed for a bit before doing the publish
	 * @param event the onChange event
	 * @param value the new value the switch was changed to
	 * @param activeThumb Index of the currently moved thumb
	 */
	change(event: Event, value: number | number[], activeThumb: number): void {
		this.props.topic.publish(value)
	}

	render() {
		return (
			<Card sx={{borderColor: "primary.main", padding: "1em", typography: "body1"}} variant="outlined">
				{this.props.name}
				<MaterialSwitch
					onChange={this.change.bind(this)}
				/>
			</Card>
		)
	}
}
