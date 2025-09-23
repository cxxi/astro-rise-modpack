ServerEvents.tags('worldgen/biome', event => {

	event.add('ae2:has_meteorites', [
	    'ad_astra:mercury_deltas'
	])

	event.remove('ae2:has_meteorites', [
	    '#minecraft:is_overworld'
	])
	
})