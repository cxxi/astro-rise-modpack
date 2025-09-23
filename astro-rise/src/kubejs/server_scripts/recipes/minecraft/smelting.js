ServerEvents.recipes(event => {

	event.smelting('bigreactors:anglesite_crystal', 'bigreactors:anglesite_ore')
	event.smelting('bigreactors:benitoite_crystal', 'bigreactors:benitoite_ore')
	// event.blasting('mekanism:ingot_tin', 'mekanism:tin_ore') 
	// event.blasting('mekanism:ingot_tin', 'mekanism:deepslate_tin_ore') 
	event.smelting('mekanism:ingot_tin', '#forge:ores/tin') 

	// event.blasting('mekanism:ingot_osmium', 'mekanism:osmium_ore') 
	// event.blasting('mekanism:ingot_osmium', 'mekanism:deepslate_osmium_ore') 
	// event.blasting('mekanism:ingot_osmium', 'mekanismaaa:moon_osmium_ore') 
	event.smelting('mekanism:ingot_osmium', '#forge:ores/osmium')

	// event.blasting('mekanism:ingot_lead', 'mekanism:lead_ore') 
	// event.blasting('mekanism:ingot_lead', 'mekanism:deepslate_lead_ore')
	event.smelting('mekanism:ingot_lead', '#forge:ores/lead')

	event.smelting('mekanism:ingot_uranium', 'mekanism:uranium_ore') 
	event.smelting('mekanism:fluorite_gem', 'mekanism:fluorite_ore') 
	event.smelting('thermal:apatite', 'thermal:apatite_ore') 
	event.smelting('thermal:cinnabar', 'thermal:cinnabar_ore') 
	event.smelting('thermal:sulfur', 'thermal:sulfur_ore') 
	// event.blasting('thermal:ingot_silver', 'thermal:silver_ore') 
	// event.blasting('thermal:ingot_silver', 'thermal:deepslate_silver_ore')
	event.smelting('thermal:silver_ingot', '#forge:ores/silver')

	// event.blasting('thermal:ingot_nickel', 'thermal:nickel_ore') 
	// event.blasting('thermal:ingot_nickel', 'thermal:deepslate_nickel_ore')
	event.smelting('thermal:nickel_ingot', '#forge:ores/nickel') 

	// event.blasting('thermal:sapphire', 'thermal:sapphire_ore') 
	// event.blasting('thermal:sapphire', 'thermal:deepslate_sapphire_ore') 
	event.smelting('thermal:sapphire', '#forge:ores/sapphire') 

	// event.blasting('thermal:ruby', 'thermal:ruby_ore') 
	// event.blasting('thermal:ruby', 'thermal:deepslate_ruby_ore') 
	event.smelting('thermal:ruby', '#forge:ores/ruby')

	event.smelting('tconstruct:cobalt_ingot', 'tconstruct:cobalt_ore')
})