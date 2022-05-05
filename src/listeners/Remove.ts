import { client } from '../Client.js'
import { slapperModal } from '../database/index.js'

client.on('EntityDestroyed', (entity) => {
    const slapper = slapperModal.find({ uniqueId: entity.getUniqueId() })
    if (!slapper) return
    slapper.delete()
    console.warn(`[Slappers] The slapper with the id ${slapper.uniqueId} was removed from the stack.`)
})
