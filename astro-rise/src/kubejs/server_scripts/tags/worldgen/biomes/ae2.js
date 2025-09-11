ServerEvents.tags('worldgen/biome', event => {

	event.add('ae2:has_meteorites', [
	    'ad_astra:lunar_wastelands',
	    '#ad_astra:moon'
	])

	event.remove('ae2:has_meteorites', [
	    '#minecraft:is_overworld'
	])
	
})