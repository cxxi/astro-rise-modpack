ServerEvents.recipes(event => {

  event.remove({ type: 'create:block_cutting', output: /astro_rise:.*_mold/ })

})