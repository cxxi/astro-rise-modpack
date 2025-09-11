ServerEvents.recipes(event => {

	// natures_compass

	event.remove({ id: 'naturescompass:natures_compass' })

	event.shaped('naturescompass:naturescompass', [
	    'ABA', 
	    'CDE',
	    'AFA'  
	], {
	    A: 'twilightforest:rainbow_oak_sapling', 
	    B: 'tconstruct:earth_enderbark_roots',
	    C: 'tconstruct:sky_enderbark_roots',
	    D: 'minecraft:compass',
	    E: 'tconstruct:ichor_enderbark_roots',
	    F: 'tconstruct:ender_enderbark_roots'
	})

})