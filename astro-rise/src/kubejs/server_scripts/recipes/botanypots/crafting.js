ServerEvents.recipes(event => {
	
	event.remove({ id: /botanypots:.*/ })

	event.shaped('botanypots:terracotta_botany_pot', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'enderio:dark_steel_nugget', 
	    B: 'thermal:compost',
	    C: 'minecraft:flower_pot'
	})

	event.shapeless('botanypots:terracotta_hopper_botany_pot', [
   		'botanypots:terracotta_botany_pot',
   		'minecraft:hopper'
   	])

	global.COLORS.forEach(color => {

		// `${color}_terracotta`
		// `${color}_concrete`
		// `${color}_glazed_terracotta`

		// event.remove({ id: `sleeping_bags:${color}_sleeping_bag` })

		// event.shapeless(`sleeping_bags:${color}_sleeping_bag`, [
		//     '#forge:sleeping_bags',
		//     `minecraft:${color}_dye`
		// ])
	})

})
