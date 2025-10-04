
global.craft = (event, result, pattern, keys) => {

	if (keys === undefined) {
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

global.reversibleCraft = (event, x, y) => {
	event.shapeless(x, [y])
   	event.shapeless(y, [x])
}

global.withAllCast = (event, recipe, castType) => {

	recipe.cast = { tag: `tconstruct:casts/single_use/${castType}` }
	recipe.cast_consumed = true

	event.custom(recipe)

	recipe.cast = { tag: `tconstruct:casts/multi_use/${castType}` }
    recipe.cast_consumed = false

    event.custom(recipe)
}

StartupEvents.registry('entity_type', event => {
    console.log(JSON.stringify(event.toJson()))
})