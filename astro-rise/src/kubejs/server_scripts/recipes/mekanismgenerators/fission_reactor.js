ServerEvents.recipes(event => {

	// fission_reactor_port

	event.remove({ id: 'mekanismgenerators:fission_reactor/port' })

	event.recipes.create.mechanical_crafting('2x mekanismgenerators:fission_reactor_port', [
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
	
})