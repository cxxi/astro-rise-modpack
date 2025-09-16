WorldGenEvents.highPriorityData(event => {

    event.modify('twilightforest:final_plateau', biome => {
        biome.structures = biome.structures.filter(struct => struct.structure != 'twilightforest:final_castle')
    })

})