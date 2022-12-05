import Card from '@mui/material/Card'
import * as React from 'react'
import ReactDOM from 'react-dom'
import ROSLIB, { Topic } from 'roslib'

export interface ReaderProps {
	topic: Topic,
}

/**
 * Reader
 * Reads data from a topic and displays it
 */
export class Reader extends React.Component<ReaderProps> {
	node: Element | Text

	/**
	 * Constructor
	 * @param props the properties passed to this component
	 */
	constructor(props) {
		super(props)
		// this.node = ReactDOM.findDOMNode(this)

		// Subscribe to the topic
		this.props.topic.subscribe(this.onMessage)
		// console.log(this.node)
	}

	/**
	 * onMessage
	 * Callback for whenever a new message is received on the topic
	 * @param message the message that was received
	 */
	onMessage(message: ROSLIB.Message) {

	}

	render() {
		return (
			<Card className="widget reader">
				<p>
					Lorem ipsum dolor sit amet,<br/>
					consectetur adipiscing elit,<br/>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
					Ut enim ad minim veniam,<br/>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
					Excepteur sint occaecat cupidatat non proident,<br/>
					sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
					Lorem ipsum dolor sit amet,<br/>
					consectetur adipiscing elit,<br/>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
					Ut enim ad minim veniam,<br/>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
					Excepteur sint occaecat cupidatat non proident,<br/>
					sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
					Lorem ipsum dolor sit amet,<br/>
					consectetur adipiscing elit,<br/>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
					Ut enim ad minim veniam,<br/>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
					Excepteur sint occaecat cupidatat non proident,<br/>
					sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
					Lorem ipsum dolor sit amet,<br/>
					consectetur adipiscing elit,<br/>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
					Ut enim ad minim veniam,<br/>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
					Excepteur sint occaecat cupidatat non proident,<br/>
					sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
				</p>
			</Card>
		)
	}
}
