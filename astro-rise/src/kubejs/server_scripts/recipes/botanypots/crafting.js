ServerEvents.recipes(event => {
	
	event.remove({ id: /botanypots:.*/ })

	event.shaped('botanypots:terracotta_botany_pot', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'enderio:dark_steel_nugget', 
	    B: 'thermal:phytogro',
	    C: 'minecraft:flower_pot'
	})

	event.shapeless('botanypots:terracotta_hopper_botany_pot', [
   		'botanypots:terracotta_botany_pot',
   		'minecraft:hopper'
   	])

	global.COLORS.forEach(color => {

	   	event.shapeless(`botanypots:${color}_terracotta_botany_pot`, [
	   		'#botanypots:basic_botany_pots',
	   		`minecraft:${color}_terracotta`
		])

		event.shapeless(`botanypots:${color}_concrete_botany_pot`, [
			'#botanypots:basic_botany_pots',
	   		`minecraft:${color}_concrete`
		])

		event.shapeless(`botanypots:${color}_glazed_terracotta_botany_pot`, [
			'#botanypots:basic_botany_pots',
	   		`minecraft:${color}}_glazed_terracotta`
		])

		// `${color}_terracotta`
		// `${color}_concrete`
		// `${color}_glazed_terracotta`
	})

})
