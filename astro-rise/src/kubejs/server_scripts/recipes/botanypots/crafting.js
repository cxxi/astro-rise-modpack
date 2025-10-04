ServerEvents.recipes(event => {
	
	event.remove({ output: /botanypots:.*/ })

	global.craft(event, 'botanypots:terracotta_botany_pot', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'enderio:dark_steel_nugget', 
	    B: 'thermal:phytogro',
	    C: 'minecraft:flower_pot'
	})

	global.craft(event, 'botanypots:terracotta_hopper_botany_pot', [
   		'botanypots:terracotta_botany_pot',
   		'minecraft:hopper'
   	])

	global.COLORS.forEach(color => {

		const materials = ['terracotta', 'glazed_terracotta', 'concrete']

		materials.forEach(material => {

			global.craft(event, `botanypots:${color}_${material}_botany_pot`, [
		   		'#botanypots:basic_botany_pots',
		   		`minecraft:${color}_${material}`
			])
		})

		materials.forEach(material => {

			global.craft(event, `botanypots:${color}_${material}_hopper_botany_pot`, [
		   		'#botanypots:hopper_botany_pots',
		   		`minecraft:${color}_${material}`
			])

			global.craft(event, `botanypots:${color}_${material}_hopper_botany_pot`, [
		   		`botanypots:${color}_${material}_botany_pot`,
		   		'minecraft:hopper'
			])
		})
		
	})

})
