ServerEvents.recipes(event => {

	// netherite_scrap
	
	event.shapeless('minecraft:netherite_scrap', [
	    '9x tconstruct:debris_nugget'
	])

	// debris_nugget
	
	event.shapeless(Item.of('tconstruct:debris_nugget', 9), [
	    'minecraft:netherite_scrap'
	])

})