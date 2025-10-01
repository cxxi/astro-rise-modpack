StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:molten_conductive_alloy')
    	.stillTexture('astro_rise:fluid/conductive_alloy_still')
        .flowingTexture('astro_rise:fluid/conductive_alloy_flowing')
        .displayName('Molten Conductive Alloy')
})