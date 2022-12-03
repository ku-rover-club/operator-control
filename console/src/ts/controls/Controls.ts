import map from './map.json'

const UPDATE_FREQ: number = 10 // Hz

/**
 * Controls class that handles gamepads and function calls
 */
export class Controls {
	functions = {
		/**
		 * Test
		 * Just a good ol' test function that logs a message
		 */
		test: () => console.log('test function called')
	}
	gamepads: {}

    /**
     * Constructor
     * Hook into call the useful Gamepad callbacks
     */
    constructor() {
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
		console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length)
	}

	/**
	 * Gamepad Disconnected
	 * Triggers whenever a gamepad is disconnected
	 * @param e The gamepad event object
	 */
	gamepadDisconnected(e: GamepadEvent): void {
		console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id)
	}

	/**
	 * Update axes
	 * Sends an update of all the axis values at UPDATE_FREQ
	 */
	updateAxes(): void {
		console.log('axis update')
	}

	/**
	 * Update Buttons
	 * Finds changed buttons since last run and sends diffs to the rover
	 * Runs at least as fast as UPDATE_FREQ
	 */
	updateButtons(): void {
		console.log('button update')

		// Schedule next run
		requestIdleCallback(this.updateButtons.bind(this), {timeout: 1000 / UPDATE_FREQ})
	}
}
