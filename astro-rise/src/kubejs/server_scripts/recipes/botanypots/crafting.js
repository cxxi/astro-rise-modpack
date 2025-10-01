ServerEvents.recipes(event => {
	
	event.remove({ output: /botanypots:.*/ })

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

		// basic terracotta

	   	event.shapeless(`botanypots:${color}_terracotta_botany_pot`, [
	   		'#botanypots:basic_botany_pots',
	   		`minecraft:${color}_terracotta`
		])

		// basic concrete

		event.shapeless(`botanypots:${color}_concrete_botany_pot`, [
			'#botanypots:basic_botany_pots',
	   		`minecraft:${color}_concrete`
		])

		// basic glazed terracotta

		event.shapeless(`botanypots:${color}_glazed_terracotta_botany_pot`, [
			'#botanypots:basic_botany_pots',
	   		`minecraft:${color}_glazed_terracotta`
		])

		// hopper terracotta

		event.shapeless(`botanypots:${color}_terracotta_hopper_botany_pot`, [
	   		'#botanypots:hopper_botany_pots',
	   		`minecraft:${color}_terracotta`
		])

		event.shapeless(`botanypots:${color}_terracotta_hopper_botany_pot`, [
	   		`botanypots:${color}_terracotta_botany_pot`,
	   		'minecraft:hopper'
		])

		// hopper concrete

		event.shapeless(`botanypots:${color}_concrete_hopper_botany_pot`, [
			'#botanypots:hopper_botany_pots',
	   		`minecraft:${color}_concrete`
		])

		event.shapeless(`botanypots:${color}_concrete_hopper_botany_pot`, [
			`botanypots:${color}_concrete_botany_pot`,
	   		'minecraft:hopper'
		])

		// hopper glazed terracotta

		event.shapeless(`botanypots:${color}_glazed_terracotta_hopper_botany_pot`, [
			'#botanypots:hopper_botany_pots',
	   		`minecraft:${color}_glazed_terracotta`
		])		

		event.shapeless(`botanypots:${color}_glazed_terracotta_hopper_botany_pot`, [
			`botanypots:${color}_glazed_terracotta_botany_pot`,
	   		'minecraft:hopper'
		])
	})

})
