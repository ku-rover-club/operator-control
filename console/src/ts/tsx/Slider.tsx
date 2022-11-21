import Card from '@mui/material/Card'
import * as React from 'react'
import MaterialSlider from '@mui/material/Slider'
import { Topic } from 'roslib'

const TIMEOUT_THRESHOLD = 500//ms

export interface SliderProps {
	defaultValue: number,
	max: number,
	min: number,
	name: string,
	topic: Topic,
	step: number,
}

/**
 * Slider
 * Creates a slider object with a name and a topic it publishes values to.
 */
export class Slider extends React.Component<SliderProps> {
	changeTimeout

	/**
	 * Change
	 * Gets called when the slider value changes. Should wait until the value
	 * isn't changed for a bit before doing the publish
	 * @param event the onChange event
	 * @param value the new value the slider was changed to
	 * @param activeThumb Index of the currently moved thumb
	 */
	change(event: Event, value: number | number[], activeThumb: number): void {
		const val: number = (typeof value !== 'object') ? value : value[0]

		clearTimeout(this.changeTimeout)
		this.changeTimeout = setTimeout(this.props.topic.publish, TIMEOUT_THRESHOLD, val)
	}

	render() {
		return (
			<Card sx={{borderColor: "primary.main", padding: "1em", typography: "body1"}} variant="outlined">
				{this.props.name}
				<MaterialSlider
					defaultValue={this.props.defaultValue}
					valueLabelDisplay="auto"
					step={this.props.step}
					marks
					min={this.props.min}
					max={this.props.max}
					onChange={this.change.bind(this)}
				/>
			</Card>
		)
	}
}
