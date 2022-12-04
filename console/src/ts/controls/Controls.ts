import { Topic } from 'roslib'

import map from './map.json'

const UPDATE_FREQ: number = 10 // Hz

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
		setInterval(this.updateAxes.bind(this), 1000 / UPDATE_FREQ)
		requestIdleCallback(this.updateButtons.bind(this), {timeout: 1000 / UPDATE_FREQ})
    }

	/**
	 * Gamepad Connected
	 * Triggers whenever a new gamepad gets its first input
	 * @param e The gamepad event object
	 */
	gamepadConnected(e: GamepadEvent): void {
		this.topic.publish(`Connected ${e.gamepad.id} slot ${e.gamepad.index}`)
	}

	/**
	 * Gamepad Disconnected
	 * Triggers whenever a gamepad is disconnected
	 * @param e The gamepad event object
	 */
	gamepadDisconnected(e: GamepadEvent): void {
		this.topic.publish(`Disconnected ${e.gamepad.id} slot ${e.gamepad.index}`)
	}

	/**
	 * Update axes
	 * Sends an update of all the axis values at UPDATE_FREQ
	 */
	updateAxes(): void {

	}

	/**
	 * Update Buttons
	 * Finds changed buttons since last run and sends diffs to the rover
	 * Runs at least as fast as UPDATE_FREQ
	 */
	updateButtons(): void {


		// Schedule next run
		requestIdleCallback(this.updateButtons.bind(this), {timeout: 1000 / UPDATE_FREQ})
	}
}
