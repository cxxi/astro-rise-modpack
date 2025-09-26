ServerEvents.recipes(event => {

	event.recipes.create.splashing([
		Item.of('astro_rise:aerolyte_nugget').withCount(9), 
		Item.of('mekanism:dust_sulfur').withChance(0.25)
	], 'astro_rise:crushed_raw_aerolyte')

	event.recipes.create.splashing([
		Item.of('tconstruct:cobalt_nugget').withCount(9), 
		Item.of('enderio:withering_powder').withChance(0.10)
	], 'astro_rise:crushed_raw_cobalt')

	event.recipes.create.splashing([
		Item.of('astro_rise:platinum_nugget').withCount(9), 
		Item.of('ae2:sky_dust').withChance(0.10)
	], 'create:crushed_raw_platinum')

	event.recipes.create.splashing([
		Item.of('mekanism:nugget_osmium').withCount(9), 
		Item.of('create:powdered_obsidian').withChance(0.25)
	], 'create:crushed_raw_osmium')

})