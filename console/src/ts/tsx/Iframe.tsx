import Card from '@mui/material/Card'
import * as React from 'react'

export interface IframeProps {
	src: string,
}

/**
 * Iframe
 * Displays another website in a widget
 */
export class Iframe extends React.Component<IframeProps> {
	render() {
		return (
			<Card className="widget iframe">
				<iframe src={this.props.src}/>
			</Card>
		)
	}
}
