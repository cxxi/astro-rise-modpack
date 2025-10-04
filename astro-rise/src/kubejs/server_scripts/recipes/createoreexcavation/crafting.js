ServerEvents.recipes(event => {

	// vein_finder

	event.remove({ id: 'createoreexcavation:vein_finder' })

	global.craft(event, 'createoreexcavation:vein_finder', [
	    ' BA', 
	    ' DC',
	    'D  '  
	], {
	    A: 'minecraft:ender_eye', 
	    B: 'thermal:sapphire',
	    C: 'thermal:ruby',
	    D: 'createaddition:brass_rod'
	})

	// drilling_machine

	event.remove({ id: 'createoreexcavation:drilling_machine' })

	global.craft(event, 'createoreexcavation:drilling_machine', [
	    'ABCBA', 
	    'BDEDB',
	    'FGHGI',
	    'BJJJB',
	    'ABBBA'
	], {
	    A: 'create:brass_block', 
	    B: 'create:brass_sheet',
	    C: 'create:copper_casing',
	    D: 'create:electron_tube',
	    E: 'create:spout',
	    F: 'create:brass_casing',
	    G: 'astro_rise:earth_mechanism',
	    H: 'create:mechanical_drill',
	    I: 'create:brass_tunnel',
	    J: 'create:sturdy_sheet'
	})

	// extractor

	event.remove({ id: 'createoreexcavation:extractor' })

	global.craft(event, 'createoreexcavation:extractor', [
	    'ABCBA', 
	    'BDEDB',
	    'FGHGI',
	    'BJJJB',
	    'ABBBA'
	], {
	    A: 'create:brass_block', 
	    B: 'create:brass_sheet',
	    C: 'create:mechanical_pump',
	    D: 'create:electron_tube',
	    E: 'create:hose_pulley',
	    F: 'create:brass_casing',
	    G: 'astro_rise:earth_mechanism',
	    H: 'create:mechanical_drill',
	    I: 'create:fluid_pipe',
	    J: 'create:sturdy_sheet'
	})

})