import Card from '@mui/material/Card'
import * as React from 'react'

export interface CameraProps {
	stream: string,
}

export class Camera extends React.Component<CameraProps> {
	render() {
		return (
			<Card className="widget camera">
				<video
					autoPlay
					id="camera"
					className="video-js"
					muted
					preload="auto"
					data-setup='{}'>
					<source
						src={this.props.stream}
						type="application/x-mpegURL"
					/>
				</video>
			</Card>
		)
	}
}
