ServerEvents.lootTables(event => {
  
	event.add('enderio:chests/alloy_loot', {
		type: 'minecraft:loot_table',
		pools: []
	})

	event.add('enderio:chests/common_loot', {
		type: 'minecraft:loot_table',
		pools: []
	})

})