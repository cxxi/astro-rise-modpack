ServerEvents.recipes(event => {

    // rubber

    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

    // event.custom({
    //     type: 'treetap:tap_extract',
    //     log: {
    //         item: 'thermal:rubberwood_log'
    //     },
    //     processing_time: 1200,
    //     result: {
    //         item: 'thermal:resin_bucket'
    //     },
    //     collect_bucket: true,
    //     display_fluid: {
    //         fluid: 'thermal:resin'
    //     }
    // })

})