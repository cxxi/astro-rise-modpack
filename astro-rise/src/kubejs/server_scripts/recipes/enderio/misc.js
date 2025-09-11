ServerEvents.recipes(event => {

	// void_chassis

	event.remove({ id: 'enderio:void_chassis' })

	event.shaped('enderio:void_chassis', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'ad_astra:steel_plate', 
	    B: 'mekanism:alloy_atomic',
	    C: 'enderio:grains_of_infinity'
	})

	// ensouled_chassis

	event.remove({ id: 'enderio:ensouled_chassis' })

	event.shaped('enderio:ensouled_chassis', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:soul_chain', 
	    B: 'enderio:soularium_ingot',
	    C: 'enderio:void_chassis'
	})

	// fluid_tank

	event.remove({ id: 'enderio:fluid_tank' })

	event.shaped('enderio:fluid_tank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:iron_bars',
		C: 'create:fluid_tank'
	})

	// basic_capacitor_bank

	event.remove({ id: 'enderio:basic_capacitor_bank' })

	event.shaped('enderio:basic_capacitor_bank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'minecraft:iron_ingot',
		B: 'enderio:basic_capacitor',
		C: 'createaddition:modular_accumulator'
	})
	
	// travel_anchor

	event.remove({ id: 'enderio:travel_anchor' })

	event.shaped('enderio:travel_anchor', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'enderio:pulsating_crystal',
	    C: 'mekanism:teleporter'
	})
})