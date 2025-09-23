ServerEvents.tags('worldgen/biome', event => {

	event.remove('ad_astra:has_structure/oil_well')

	event.add('ad_astra:has_moon_vein', [
	    'ad_astra:lunar_wastelands'
	])

	event.add('ad_astra:has_mars_vein', [
	    'ad_astra:martian_wastelands', 
	    'ad_astra:martian_canyon_creek'
	])

	event.add('ad_astra:has_venus_vein', [
	    'ad_astra:venus_wastelands',
	   'ad_astra:infernal_venus_barrens'
	])

	event.add('ad_astra:has_mercury_vein', [
	   'ad_astra:mercury_deltas'
	])
})