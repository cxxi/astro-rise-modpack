ServerEvents.recipes(event => {

	// netherite_scrap
	
	event.shapeless('minecraft:netherite_scrap', [
	    '9x tconstruct:debris_nugget'
	])

	// debris_nugget
	
	event.shapeless(Item.of('tconstruct:debris_nugget', 9), [
	    'minecraft:netherite_scrap'
	])

	// tank

	event.remove({id: 'tconstruct:smeltery/seared/fuel_tank'})

	event.shaped('tconstruct:seared_fuel_tank', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'tconstruct:seared_brick', 
	    B: 'create:fluid_tank'
	})

	event.remove({id: 'tconstruct:smeltery/scorched/fuel_tank'})

	event.shaped('tconstruct:scorched_fuel_tank', [
	    'AAA', 
	    'ABA',
	    'AAA'   
	], {
	    A: 'tconstruct:scorched_brick', 
	    B: 'create:fluid_tank'
	})

})