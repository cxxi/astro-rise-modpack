
global.COLORS = [
	'white',
	'light_gray',
	'gray',
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'cyan',
	'light_blue',
	'blue',
	'purple',
	'magenta',
	'pink'
]

global.craft = (event, result, pattern, keys = null) => {

	if (keys === null) {
		event.shapeless(result, pattern)
		return
	}

	switch(pattern.length)
	{
		case 3:
			event.shaped(result, pattern, keys)
			break

		case 5:
			event.recipes.create.mechanical_crafting(result, pattern, keys)
			event.custom({
				type: 'extendedcrafting:shaped_table',
				pattern: pattern,
				key: keys,
				result: result
			})
			break

		default:
			event.custom({
				type: 'extendedcrafting:shaped_table',
				pattern: pattern,
				key: keys,
				result: result
			})
	}
}