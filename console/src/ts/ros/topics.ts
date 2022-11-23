import { Topic } from 'roslib'

import ros from './ros'

const TOPICS_TO_SUBSCRIBE_TO = [
	{
		name: '/test',
		type: 'std_msgs/String'
	},
	{
		name: '/slider1',
		type: 'std_msgs/Int32'
	},
	{
		name: '/slider2',
		type: 'std_msgs/Int32'
	},
	{
		name: '/switch1',
		type: 'std_msgs/Bool'
	},
	{
		name: '/switch2',
		type: 'std_msgs/Bool'
	},
]

let topics = {}

for(let topic of TOPICS_TO_SUBSCRIBE_TO) {
	topics[topic.name] = new Topic({
		ros: ros,
		name: topic.name,
		messageType: topic.type,
	})
}

export default topics
