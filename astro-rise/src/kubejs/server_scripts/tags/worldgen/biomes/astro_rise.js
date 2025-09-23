ServerEvents.tags('worldgen/biome', event => {

	event.add('astro_rise:has_moon_vein', [
	    'ad_astra:lunar_wastelands'
	])

	event.add('astro_rise:has_mars_vein', [
	    'ad_astra:martian_wastelands', 
	    'ad_astra:martian_canyon_creek'
	])

	event.add('astro_rise:has_venus_vein', [
	    'ad_astra:venus_wastelands',
	   'ad_astra:infernal_venus_barrens'
	])

	event.add('astro_rise:has_mercury_vein', [
	   'ad_astra:mercury_deltas'
	])

	event.add('astro_rise:has_lava_vein', [
	   'ad_astra:mercury_deltas',
	   '#minecraft:is_nether'
	])

	event.add('astro_rise:has_blooming_vein', [
		'deeperdarker:blooming_caverns'
	])

	event.add('astro_rise:has_sculk_vein', [
		'deeperdarker:echoing_forest', 
		'deeperdarker:overcast_columns'
	])

})