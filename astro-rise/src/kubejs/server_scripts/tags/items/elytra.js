// ServerEvents.tags('item', event => {

// 	event.add('elytraslot:elytra', [
// 	    'tconstruct:slime_chestplate'
// 	])
	
// })

ServerEvents.tags('item', event => {

	event.add('elytraslot:elytra', [
	    'tconstruct:slime_chestplate'
	])
	
})

// ServerEvents.highPriorityData(event => {

//   	event.addJson('elytraslot:tags/items/elytra', {
//   	  replace: false,
//   	  values: [
//   	    "minecraft:elytra",
//   	    "alexsmobs:tarantula_hawk_elytra",
//   	    "deeperdarker:soul_elytra",
//   	    "mekanism:hdpe_elytra",
//   	    "tconstruct:slime_chestplate"
//   	  ]
//   	})

//   	event.addJson('elytraslot:tags/item/elytra', {
//   	  replace: false,
//   	  values: [
//   	    "minecraft:elytra",
//   	    "alexsmobs:tarantula_hawk_elytra",
//   	    "deeperdarker:soul_elytra",
//   	    "mekanism:hdpe_elytra",
//   	    "tconstruct:slime_chestplate"
//   	  ]
//   	})

//   	console.info("[KubeJS] ElytraSlot patch loaded ✅")
// })