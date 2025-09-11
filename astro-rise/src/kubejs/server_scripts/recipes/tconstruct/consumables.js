ServerEvents.recipes(event => {

	// earth_cake

	event.remove({id: 'tconstruct:gadgets/cake/earth'})

	event.shaped('tconstruct:earth_cake', [
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

	event.shaped('tconstruct:sky_cake', [
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

	event.shaped('tconstruct:ichor_cake', [
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

	event.shaped('tconstruct:ender_cake', [
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

	event.shaped('tconstruct:blood_cake', [
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

	event.shaped('tconstruct:magma_cake', [
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