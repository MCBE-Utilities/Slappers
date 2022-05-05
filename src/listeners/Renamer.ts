import { client } from '../Client.js'
import { slapperModal } from '../database/index.js'

client.on('Tick', () => {
    for (const slapper of slapperModal.findAll({})) {
        const entity = client.entities.getByUniqueId(slapper.uniqueId)
        if (!entity) continue
        if (entity.getNameTag() === slapper.name) continue
        entity.setNameTag(slapper.name)
    }
})
