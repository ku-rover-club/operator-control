import { Topic } from 'roslib'

import ros from './ros'

const TOPICS_TO_SUBSCRIBE_TO = [
	{
		name: '/test',
		type: 'std_msgs/String'
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
