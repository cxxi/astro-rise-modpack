ServerEvents.highPriorityData(event => {

    let finalPlateau = event.get('twilightforest:final_plateau')

    if (finalPlateau && finalPlateau.structures) {

        finalPlateau.structures = finalPlateau.structures.filter(s => s.structure != 'twilightforest:final_castle')

        // finalPlateau.structures.push({
        //     structure: 'my_mod:my_end_portal_castle',
        //     spacing: 1,
        //     separation: 1,
        //     salt: 12345
        // })

        event.add('twilightforest:final_plateau', finalPlateau)
    }
})