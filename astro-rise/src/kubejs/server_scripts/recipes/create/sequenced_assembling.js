ServerEvents.recipes(event => {

	event.recipes.create.sequenced_assembly([
		Item.of('astro_rise:steel_mechanism').withChance(120.0),
		Item.of('create:powdered_obsidian').withChance(6.0),
		Item.of('thermal:invar_nugget').withChance(8.0),
		Item.of('mekanism:nugget_steel').withChance(8.0),
		Item.of('mekanism:alloy_infused').withChance(6.0),
		Item.of('mekanism:basic_control_circuit').withChance(2.0)
	], 'ad_astra:steel_plate', [
		event.recipes.createDeploying('astro_rise:incomplete_steel_mechanism', [
			'astro_rise:incomplete_steel_mechanism',
			'create:sturdy_sheet'
		]),
		event.recipes.createDeploying('astro_rise:incomplete_steel_mechanism', [
			'astro_rise:incomplete_steel_mechanism',
			'thermal:invar_gear'
		]),
		event.recipes.createDeploying('astro_rise:incomplete_steel_mechanism', [
			'astro_rise:incomplete_steel_mechanism',
			'mechanism:advanced_control_circuit'
		])
	]).transitionalItem('astro_rise:incomplete_steel_mechanism').loops(5)

})