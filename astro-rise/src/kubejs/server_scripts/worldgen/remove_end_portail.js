WorldgenEvents.structure(event => {

	if (event.structure.id === 'minecraft:stronghold') {
		event.blocks.replace('minecraft:end_portal_frame', 'minecraft:stone_bricks')
	}
	
})