ServerEvents.recipes(event => {

	// oil_barrel

	event.remove({ id: 'createdieselgenerators:crafting/oil_barrel' })

	event.shaped('createdieselgenerators:oil_barrel', [
	    '   ', 
	    'ABA',
	    '   '  
	], {
	    A: 'createaddition:zinc_sheet', 
	    B: 'minecraft:barrel'
	})

	// chip_wood_block

	event.remove({ id: 'createdieselgenerators:crafting/chip_wood_block'})

	event.shapeless('createdieselgenerators:chip_wood_block', [
	    '9x createdieselgenerators:wood_chip' 
	])

	event.shapeless('createdieselgenerators:chip_wood_block', [
	    '9x mekanism:sawdust' 
	])

})