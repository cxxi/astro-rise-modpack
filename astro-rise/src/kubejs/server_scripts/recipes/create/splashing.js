ServerEvents.recipes(event => {

	event.recipes.create.splashing([
		Item.of('astro_rise:aerolyte_nugget').withCount(9), 
		Item.of('mekanism:dust_sulfur').withChance(0.15)
	], 'astro_rise:crushed_raw_aerolyte')

	event.recipes.create.splashing([
		Item.of('tconstruct:cobalt_nugget').withCount(9), 
		Item.of('enderio:withering_powder').withChance(0.10)
	], 'astro_rise:crushed_raw_cobalt')

	event.recipes.create.splashing([
		Item.of('astro_rise:platinum_nugget').withCount(9), 
		Item.of('ae2:sky_dust').withChance(0.10)
	], 'create:crushed_raw_platinum')

	event.remove({ id: 'create:splashing/mekanism/crushed_raw_osmium' })

	event.recipes.create.splashing([
		Item.of('mekanism:nugget_osmium').withCount(9), 
		Item.of('create:powdered_obsidian').withChance(0.25)
	], 'create:crushed_raw_osmium')

	event.remove({ id: 'create:splashing/thermal/crushed_raw_silver' })

	event.recipes.create.splashing([
		Item.of('thermal:silver_nugget').withCount(9), 
		Item.of('mekanism:dust_tin').withChance(0.25)
	], 'create:crushed_raw_silver')

	// event.remove({ id: 'create:splashing/mekanism/crushed_raw_tin' })
	event.remove({ id: 'create:splashing/thermal/crushed_raw_tin' })

	event.recipes.create.splashing([
		Item.of('mekanism:nugget_tin').withCount(9), 
		Item.of('thermal:silver_dust').withChance(0.25)
	], 'create:crushed_raw_tin')

	event.remove({ id: 'create:splashing/thermal/crushed_raw_lead' })

	event.recipes.create.splashing([
		Item.of('mekanism:nugget_lead').withCount(9), 
		Item.of('mekanism:dust_coal').withChance(0.50)
	], 'create:crushed_raw_lead')

	event.remove({ id: 'create:compat/simplemetals_aluminum/splashing/crushed_raw_aluminum' })

	event.recipes.create.splashing([
		Item.of('simplemetals_aluminum:aluminum_nugget').withCount(9), 
		Item.of('astro_rise:dust_zinc').withChance(0.25)
	], 'create:crushed_raw_aluminum')

	event.remove({ id: 'create:splashing/mekanism/crushed_raw_uranium' })

	event.recipes.create.splashing([
		Item.of('mekanism:nugget_uranium').withCount(9), 
		Item.of('mekanism:dust_fluorite').withChance(0.15)
	], 'create:crushed_raw_uranium')

	event.remove({ id: 'create:splashing/thermal/crushed_raw_nickel' })

	event.recipes.create.splashing([
		Item.of('thermal:nickel_nugget').withCount(9), 
		Item.of('mekanism:dust_copper').withChance(0.25)
	], 'create:crushed_raw_nickel')

	event.remove({ id: 'create_ad_astra_compat:splashing/crushed_desh_ore' })

	event.recipes.create.splashing([
		Item.of('ad_astra:desh_nugget').withCount(9), 
		Item.of('astro_rise:dust_ice_shard').withChance(0.15)
	], 'create_ad_astra_compat:crushed_desh_ore')

	event.remove({ id: 'create_ad_astra_compat:splashing/crushed_calorite_ore' })

	event.recipes.create.splashing([
		Item.of('ad_astra:calorite_nugget').withCount(9), 
		Item.of('thermal:niter_dust').withChance(0.15)
	], 'create_ad_astra_compat:crushed_calorite_ore')

	event.remove({ id: 'create_ad_astra_compat:splashing/crushed_ostrum_ore' })

	event.recipes.create.splashing([
		Item.of('ad_astra:ostrum_nugget').withCount(9), 
		Item.of('mekanism:dust_steel').withChance(0.15)
	], 'create_ad_astra_compat:crushed_ostrum_ore')

})