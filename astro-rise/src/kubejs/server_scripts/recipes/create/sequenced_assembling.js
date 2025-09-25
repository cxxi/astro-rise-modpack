ServerEvents.recipes(event => {

	event.recipes.create.sequenced_assembly([
		Item.of('astro_rise:steel_mechanism').withChance(1.0),
		Item.of('create:powdered_obsidian').withChance(0.06),
		Item.of('thermal:invar_nugget').withChance(0.08),
		Item.of('mekanism:nugget_steel').withChance(0.08),
		Item.of('mekanism:alloy_infused').withChance(0.06),
		Item.of('mekanism:basic_control_circuit').withChance(0.02)
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
			'mekanism:advanced_control_circuit'
		])
	]).transitionalItem('astro_rise:incomplete_steel_mechanism').loops(5)

})