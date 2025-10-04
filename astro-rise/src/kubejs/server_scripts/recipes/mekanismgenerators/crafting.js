ServerEvents.recipes(event => {

	// fission_reactor_port

	event.remove({ id: 'mekanismgenerators:fission_reactor/port' })

	global.craft(event, '2x mekanismgenerators:fission_reactor_port', [
		'ABCBA',
		'BDEDB',
		'CDFDC',
		'BDEDB',
		'ABCBA'
	], {
		A: 'mekanismgenerators:fission_reactor_casing',
		B: 'ad_astra:desh_ingot',
		C: 'ad_astra:ostrum_ingot',
		D: 'mekanism:alloy_atomic',
		E: 'ad_astra:calorite_ingot',
		F: 'mekanism:elite_control_circuit'
	})

	// fusion_reactor_controller

	event.remove({ id: 'mekanismgenerators:reactor/controller' })

	global.craft(event, 'mekanismgenerators:fusion_reactor_controller', [
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