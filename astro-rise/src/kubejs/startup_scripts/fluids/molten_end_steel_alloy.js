StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:end_steel_alloy')
    	.stillTexture('astro_rise:fluid/end_steel_alloy_still')
        .flowingTexture('astro_rise:fluid/end_steel_alloy_flowing')
        .displayName('Molten End Steel Alloy')
})