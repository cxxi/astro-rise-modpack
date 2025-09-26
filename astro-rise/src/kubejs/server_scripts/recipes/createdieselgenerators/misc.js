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

})