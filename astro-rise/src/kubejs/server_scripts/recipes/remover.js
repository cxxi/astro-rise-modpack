ServerEvents.recipes(event => {

	event.remove({ output: /twilightforest:hollow_.*/ })

	event.remove({ input: 'ad_astra:deepslate_desh_ore' })
})