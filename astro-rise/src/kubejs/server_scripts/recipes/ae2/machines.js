ServerEvents.recipes(event => {

	// inscriber

	event.remove({ id: 'ae2:network/blocks/inscribers' })

	event.recipes.create.mechanical_crafting('ae2:inscriber', [
		'ABCBA',
		'DEFED',
		'GH HG',
		'DEFED',
		'ABCBA'
	], {
		A: 'twilightforest:carminite_block',
		B: 'createaddition:electrum_block',
		C: 'create:precision_mechanism',
		D: 'mekanism:block_steel',
		E: 'mekanism:hdpe_sheet',
		F: 'minecraft:sticky_piston',
		G: 'deeperdarker:reinforced_echo_shard',
		H: 'mekanism:ultimate_control_circuit'
	})

})