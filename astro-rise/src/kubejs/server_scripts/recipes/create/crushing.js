ServerEvents.recipes(event => {

	// ochrum

	event.remove({ id: 'create:crushing/ochrum' })
	event.remove({ id: 'create:crushing/ochrum_recycling' })
	
	// tuff

	event.remove({ id: 'create:crushing/tuff' })
	event.remove({ id: 'create:crushing/tuff_recycling' })

	// ores

	event.remove({ type: 'create:crushing',  input: /.*_ore/ })

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/coal' }
		],
		processingTime: 150,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/iron' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 }
		]
	})

	// copper
	// gold
	// redstone
	// emerald
	// lapis
	// diamond
	// quartz
	// netherite
	// cobalt
	// zinc
	// silver
	// nickel
	// tin
	// lead
	// osmium
	// fluorite
	// uranium
	// anglesite
	// benitoite
	// apatite
	// cinnabar
	// ruby
	// sapphire
	// nither
	// sulfur
	// desh
	// ice_shard
	// ostrum
	// calorite
	// aluminum
	// platinum

})