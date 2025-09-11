ServerEvents.recipes(event => {

	// cake

	event.remove({ id: 'enderio:cake' })

	// empty_soul_vial

	event.remove({ id: 'enderio:empty_soul_vial' })

	event.shaped('enderio:empty_soul_vial', [
	    ' A ', 
	    'B B',
	    ' B '
	], {
	    A: 'enderio:soularium_ingot', 
	    B: 'tconstruct:soul_glass'
	})

})