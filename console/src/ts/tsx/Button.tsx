import * as React from 'react'
import MaterialButton from '@mui/material/Button'
import { Topic } from 'roslib'

export interface ButtonProps {
	message: string,
	name: string,
	topic: Topic,
}

/**
 * Button
 * Creates a button object with a name and a topic it publishes values to.
 */
export class Button extends React.Component<ButtonProps> {

	click(): void {
		this.props.topic.publish(this.props.message)
	}

	render() {
		return (
			<MaterialButton
				variant="contained"
				onClick={this.click.bind(this)}
			>
				{this.props.name}
			</MaterialButton>
		)
	}
}
