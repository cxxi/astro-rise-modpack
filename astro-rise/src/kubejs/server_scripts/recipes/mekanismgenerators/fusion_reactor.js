ServerEvents.recipes(event => {

	// fusion_reactor_controller

	event.remove({ id: 'mekanismgenerators:reactor/controller' })

	event.recipes.create.mechanical_crafting('mekanismgenerators:fusion_reactor_controller', [
		'ABCBA',
		'BDEDB',
		'EFGFE',
		'BDEDB',
		'ABCBA'
	], {
		A: 'mekanismgenerators:fusion_reactor_frame',
		B: 'mekanism:alloy_atomic',
		C: 'minecraft:nether_star',
		D: 'ae2:quantum_entangled_singularity',
		E: 'mekanism:pellet_polonium',
		F: 'mekanism:ultimate_control_circuit',
		G: 'mekanism:basic_chemical_tank'
	})
	
})