import { Ros } from 'roslib'

// Establish websocket connection to ros
// Currently if this fails, it won't try again. The page will need to reload
export default new Ros({
	url: "ws://localhost:9090",
})
