ServerEvents.recipes(event => {

	// ochrum

	event.remove({ id: 'create:crushing/ochrum' })
	event.remove({ id: 'create:crushing/ochrum_recycling' })
	
	// tuff

	event.remove({ id: 'create:crushing/tuff' })
	event.remove({ id: 'create:crushing/tuff_recycling' })

})