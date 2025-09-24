ServerEvents.recipes(event => {

	// event.remove({ type: 'create:crushing',  input: /.*_ore/ })
	// TODO

	// ochrum

	event.remove({ id: 'create:crushing/ochrum' })
	event.remove({ id: 'create:crushing/ochrum_recycling' })
	
	// tuff

	event.remove({ id: 'create:crushing/tuff' })
	event.remove({ id: 'create:crushing/tuff_recycling' })

})