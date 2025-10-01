StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:end_stone_alloy')
    	.stillTexture('astro_rise:fluid/end_stone_alloy_still')
        .flowingTexture('astro_rise:fluid/end_stone_alloy_flowing')
        .displayName('Molten End Stone Alloy')
})