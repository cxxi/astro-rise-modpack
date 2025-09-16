ServerEvents.recipes(event => {

	// structure_compass

	event.remove({ id: 'structurecompass:structure_compass' })

	event.shaped('structurecompass:structure_compass', [
	    'ABA', 
	    'CDE',
	    'AFA'  
	], {
	    A: 'enderio:broken_spawner', 
	    B: 'minecraft:rib_armor_trim_smithing_template',
	    C: 'minecraft:sentry_armor_trim_smithing_template',
	    D: 'minecraft:compass',
	    E: 'minecraft:spire_armor_trim_smithing_template',
	    F: 'minecraft:tide_armor_trim_smithing_template'
	})

})