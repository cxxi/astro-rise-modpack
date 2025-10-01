StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:copper_alloy')
    	.stillTexture('astro_rise:fluid/copper_alloy_still')
        .flowingTexture('astro_rise:fluid/copper_alloy_flowing')
        .displayName('Molten Copper Alloy')
})