ServerEvents.recipes(event => {

	// pressurized_fluid_conduit

	event.remove({ id: 'enderio:pressurized_fluid_conduit' })
	
	// ender_fluid_conduit

	event.remove({ id: 'enderio:ender_fluid_conduit' })

	// fluid_conduit

	event.remove({ id: 'enderio:fluid_conduit' })

	event.shaped('enderio:fluid_conduit', [
	    'AAA', 
	    'BBB',
	    'AAA'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_mechanical_pipe'
	})

	// item_conduit

	event.remove({ id: 'enderio:item_conduit' })

	event.shaped('enderio:item_conduit', [
	    'CAC', 
	    'BBB',
	    'CAC'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_logistical_transporter',
	    C: 'enderio:pulsating_alloy_nugget'
	})

	// energy_conduit

	event.remove({ id: 'enderio:energy_conduit' })

	event.shaped('enderio:energy_conduit', [
	    'CAC', 
	    'BBB',
	    'CAC'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_universal_cable',
	    C: 'enderio:conductive_alloy_ingot'
	})

})