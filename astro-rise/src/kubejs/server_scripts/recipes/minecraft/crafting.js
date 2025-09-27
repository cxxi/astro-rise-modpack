ServerEvents.recipes(event => {

	// bed

	global.COLORS.slice(1).forEach(color => {
		event.remove({ id: `minecraft:${color}_bed` })
	})

	// bell

	event.shaped('minecraft:bell', [
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

	event.shaped('minecraft:saddle', [
	    'AAA', 
	    'A A',
	    'B B'  
	], {
	    A: 'minecraft:leather', 
	    B: 'minecraft:string'
	})

	// gilded_blackstone

	event.shaped('minecraft:gilded_blackstone', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'minecraft:gold_nugget', 
	    B: 'minecraft:blackstone',
	    C: 'minecraft:raw_gold'
	})

	// experience_bottle

	event.shaped('minecraft:experience_bottle', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'create:experience_nugget', 
	    B: 'minecraft:glass_bottle'
	})

	// enderchest

	event.shaped('minecraft:ender_chest', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'thermal:enderium_ingot', 
	    B: 'minecraft:obsidian',
	    C: 'minecraft:ender_eye'
	})

	// nugget|ingot

	event.remove({ id: 'crateaddition:crafting/electrum_ingot' })
	event.remove({ id: 'ad_astra:steel_ingot' })

	event.shapeless('minecraft:andesite', [
   		'4x astro_rise:andesite_nugget'
   	])

   	event.shapeless('4x astro_rise:andesite_nugget', [
   		'minecraft:andesite'
   	])

   	event.shapeless('platinum_mod:platinum', [
   		'9x astro_rise:platinum_nugget'
   	])

   	event.shapeless('9x astro_rise:platinum_nugget', [
   		'platinum_mod:platinum'
   	])

   	event.shapeless('astro_rise:ingot_aerolyte', [
   		'9x astro_rise:aerolyte_nugget'
   	])

   	event.shapeless('9x astro_rise:aerolyte_nugget', [
   		'astro_rise:ingot_aerolyte'
   	])

   	event.shapeless('ad_astra:etrium_ingot', [
   		'9x ad_astra:etrium_nugget'
   	])

   	event.shapeless('9x ad_astra:etrium_nugget', [
   		'ad_astra:etrium_ingot'
   	])

	// shulker_shell

	event.shapeless('minecraft:shulker_shell', [
   		'9x astro_rise:shulker_scute'
   	])

	// cake

	event.remove({id: 'minecraft:cake'})

})