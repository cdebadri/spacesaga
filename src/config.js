export const CONFIG_SIZE_LARGE_SCREEN = {
	SHIP: 0.1,
	ENEMY_STATION: 0.7,
	ROCKS: 0.05,
	ENEMY_SHIP: 0.15,
	ENEMY_BULLET: 0.05,
	ENEMY_STATION_BODY: 0.33,
	ENEMY_DETECTION_DENOM: 2,
	HEALTH: {
		WIDTH: 0.5 * game.config.width,
		HEIGHT: 0.1 * game.config.height, 
	},
}

export const CONFIG_SIZE_SMALL_SCREEN = {
	SHIP: 0.15,
	ENEMY_STATION: 1,
	FIRE_BUTTON: 0.1,
	JOYSTICK_RADIUS: 0.2,
	JOYSTICK_BASE: 0.2,
	JOYSTICK_THUMB: 0.1,
	ROCKS: 0.1,
	ENEMY_SHIP: 0.2,	
	ENEMY_BULLET: 0.1,
	ENEMY_STATION_BODY: 0.5,
	ENEMY_DETECTION_DENOM: 1.5,
	HEALTH: {
		WIDTH: 0.3 * game.config.width,
		HEIGHT: 0.1 * game.config.height,
	},
}
