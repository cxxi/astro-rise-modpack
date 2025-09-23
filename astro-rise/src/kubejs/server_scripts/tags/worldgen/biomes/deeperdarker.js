ServerEvents.tags('worldgen/biome', event => {

	event.add('deeperdarker:has_blooming_vein', [
		'deeperdarker:blooming_caverns'
	])

	event.add('deeperdarker:has_sculk_vein', [
		'deeperdarker:echoing_forest', 
		'deeperdarker:overcast_columns'
	])

})