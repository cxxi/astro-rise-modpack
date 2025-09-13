ServerEvents.lootTables(event => {
  
	event.addJson('enderio:chests/alloy_loot', {
		type: 'minecraft:loot_table',
		pools: []
	})

	event.addJson('enderio:chests/common_loot', {
		type: 'minecraft:loot_table',
		pools: []
	})

})