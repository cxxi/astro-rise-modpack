ServerEvents.recipes(event => {

	// bed

	global.COLORS.slice(1).forEach(color => {
		event.remove({ id: `minecraft:${color}_bed` })
	})

	// bell

	global.craft(event, 'minecraft:bell', [
	    'AAA', 
	    'BCB',
	    ' D '  
	],{
	    A: 'minecraft:stick', 
	    B: 'minecraft:iron_nugget',
	    C: 'minecraft:gold_ingot',
	    D: 'minecraft:gold_block'
	})

	// saddle

	global.craft(event, 'minecraft:saddle', [
	    'AAA', 
	    'A A',
	    'B B'  
	], {
	    A: 'minecraft:leather', 
	    B: 'minecraft:string'
	})

	// gilded_blackstone

	global.craft(event, 'minecraft:gilded_blackstone', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'minecraft:gold_nugget', 
	    B: 'minecraft:blackstone',
	    C: 'minecraft:raw_gold'
	})

	// experience_bottle

	global.craft(event, 'minecraft:experience_bottle', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'create:experience_nugget', 
	    B: 'minecraft:glass_bottle'
	})

	// enderchest

	event.remove('minecraft:ender_chest')

	global.craft(event, 'minecraft:ender_chest', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'thermal:enderium_ingot', 
	    B: 'minecraft:obsidian',
	    C: 'minecraft:ender_eye'
	})

	// reversible ores

	global.reversibleCraft(event, 'minecraft:andesite', '4x astro_rise:andesite_nugget')
   	global.reversibleCraft(event, 'astro_rise:ingot_aerolyte', '9x astro_rise:aerolyte_nugget')
   	global.reversibleCraft(event, 'astro_rise:aerolyte_block', '9x astro_rise:ingot_aerolyte')
   	global.reversibleCraft(event, 'ad_astra:etrium_ingot', '9x ad_astra:etrium_nugget')
   	global.reversibleCraft(event, 'ad_astra:etrium_block', '9x ad_astra:etrium_ingot')
   	global.reversibleCraft(event, 'astro_rise:infinity_block', '9x astro_rise:infinity_ingot')
   	global.reversibleCraft(event, 'minecraft:netherite_scrap', 'tconstruct:debris_nugget')

	// shulker_shell

	event.shapeless('minecraft:shulker_shell', [
   		'9x astro_rise:shulker_scute'
   	])

	// cake

	event.remove({id: 'minecraft:cake'})

})