ServerEvents.recipes(event => {

	event.remove({ id: 'create_mechanical_chicken:crafting/mechanical_chicken' })

	global.craft(event, 'create_mechanical_chicken:mechanical_chicken', [
	    ' A ', 
	    'BCB',
	    'DED'  
	], {
	    A: 'thermal:constantan_gear', 
	    B: '#alexsmobs:raccoon_tameables',
	    C: 'create:item_vault',
	    D: 'create:brass_sheet',
	    E: 'astro_rise:earth_mechanism'
	})

})