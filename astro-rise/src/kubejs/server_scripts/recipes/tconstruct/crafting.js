ServerEvents.recipes(event => {

	// tank

	event.remove({id: 'tconstruct:smeltery/seared/fuel_tank'})

	global.craft(event, 'tconstruct:seared_fuel_tank', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'tconstruct:seared_brick', 
	    B: 'create:fluid_tank'
	})

	event.remove({id: 'tconstruct:smeltery/scorched/fuel_tank'})

	global.craft(event, 'tconstruct:scorched_fuel_tank', [
	    'AAA', 
	    'ABA',
	    'AAA'   
	], {
	    A: 'tconstruct:scorched_brick', 
	    B: 'create:fluid_tank'
	})

	// earth_cake

	event.remove({id: 'tconstruct:gadgets/cake/earth'})

	global.craft(event, 'tconstruct:earth_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'tconstruct:earth_slime_bucket', 
	    B: 'minecraft:sugar',
	    C: 'createaddition:cake_base_baked',
	    D: 'tconstruct:earth_slime_tall_grass'
	})

	// sky_cake

	event.remove({id: 'tconstruct:gadgets/cake/sky'})

	global.craft(event, 'tconstruct:sky_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'tconstruct:sky_slime_bucket', 
	    B: 'ae2:sky_dust',
	    C: 'createaddition:cake_base_baked',
	    D: 'tconstruct:sky_slime_tall_grass'
	})

	// ichor_cake

	event.remove({id: 'tconstruct:gadgets/cake/ichor'})

	global.craft(event, 'tconstruct:ichor_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'minecraft:warped_roots', 
	    B: 'minecraft:glowstone_dust',
	    C: 'createaddition:cake_base_baked',
	    D: 'tconstruct:ichor_bucket'
	})

	// ender_cake

	event.remove({id: 'tconstruct:gadgets/cake/ender'})

	global.craft(event, 'tconstruct:ender_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'tconstruct:ender_slime_bucket', 
	    B: 'ae2:ender_dust',
	    C: 'createaddition:cake_base_baked',
	    D: 'tconstruct:ender_slime_tall_grass'
	})

	// blood_cake

	event.remove({id: 'tconstruct:gadgets/cake/blood'})

	global.craft(event, 'tconstruct:blood_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'tconstruct:honey_bucket', 
	    B: 'deeperdarker:soul_dust',
	    C: 'createaddition:cake_base_baked',
	    D: 'tconstruct:blood_slime_tall_grass'
	})

	// magma_cake

	event.remove({id: 'tconstruct:gadgets/cake/magma'})

	global.craft(event, 'tconstruct:magma_cake', [
	    'AAA', 
	    'BCB',
	    'DDD'  
	], {
	    A: 'tconstruct:magma_bucket', 
	    B: 'minecraft:glowstone_dust',
	    C: 'createaddition:cake_base_baked',
	    D: 'minecraft:crimson_roots'
	})

})