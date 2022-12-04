import { Topic } from 'roslib'

const AXIS_PRECISION = 3
const UPDATE_FREQ: number = 20 // Hz

/**
 * Controls
 * Controls class that handles gamepads and sending their data to the rover
 */
export class Controls {
	/** The list of gamepads connected */
	gamepads: Gamepad[]
	/** The topic being published to */
	topic: Topic

    /**
     * Constructor
     * Hook into call the useful Gamepad callbacks
     */
    constructor(topic: Topic) {
		this.topic = topic

		// Hook into callbacks
		window.addEventListener('gamepadconnected', this.gamepadConnected.bind(this))
		window.addEventListener('gamepaddisconnected', this.gamepadDisconnected.bind(this))

		// Kick off updates
		requestIdleCallback(this.update.bind(this), {timeout: 1000 / UPDATE_FREQ})
    }

	/**
	 * Gamepad Connected
	 * Triggers whenever a new gamepad gets its first input
	 * @param e The gamepad event object
	 */
	gamepadConnected(e: GamepadEvent): void {
		const message = `Connect ${e.gamepad.id} slot ${e.gamepad.index}`

		console.log(message)
		this.topic.publish(message)
	}

	/**
	 * Gamepad Disconnected
	 * Triggers whenever a gamepad is disconnected
	 * @param e The gamepad event object
	 */
	gamepadDisconnected(e: GamepadEvent): void {
		const message = `Disconnect ${e.gamepad.id} slot ${e.gamepad.index}`

		console.log(message)
		this.topic.publish(message)
	}

	/**
	 * Update
	 * Sends an update of all the axis and button values at UPDATE_FREQ or faster
	 */
	update(): void {
		const gamepads: Gamepad[] = navigator.getGamepads()

		for(const gamepad of gamepads) {
			if(gamepad !== undefined) {
				let message: string = `Update slot ${gamepad.index} `
				let info: {axes: string[], buttons: boolean[]} = {
					axes: [],
					buttons: []
				}

				// Grab axis values
				for(let i = 0; i < gamepad.axes.length; i++) {
					info.axes.push(gamepad.axes[i].toFixed(AXIS_PRECISION))
				}

				// Grab button values
				for(let i = 0; i < gamepad.buttons.length; i++) {
					info.buttons.push(gamepad.buttons[i].pressed)
				}

				// Stringify the JSON and tack it onto the end
				message += JSON.stringify(info)

				// Send it
				// console.log(message)
				this.topic.publish(message)
			}
		}

		// Schedule next run
		requestIdleCallback(this.update.bind(this), {timeout: 1000 / UPDATE_FREQ})
	}
}
