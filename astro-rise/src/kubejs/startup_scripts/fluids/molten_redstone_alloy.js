StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:redstone_alloy')
    	.stillTexture('astro_rise:fluid/redstone_alloy_still')
        .flowingTexture('astro_rise:fluid/redstone_alloy_flowing')
        .displayName('Molten Redstone Alloy')
})