import Card from '@mui/material/Card'
import * as React from 'react'
import MaterialSlider from '@mui/material/Slider'

export interface SliderProps {
	defaultValue: number,
	max: number,
	min: number,
	name: string,
	step: number,
}

export class Slider extends React.Component<SliderProps> {
	render() {
		return (
			<Card style={{padding: "1em"}} sx={{borderColor: "primary.main", typography: "body1"}} variant="outlined">
				{this.props.name}
				<MaterialSlider
				defaultValue={this.props.defaultValue}
				valueLabelDisplay="auto"
				step={this.props.step}
				marks
				min={this.props.min}
				max={this.props.max}
				/>
			</Card>
		)
	}
}
