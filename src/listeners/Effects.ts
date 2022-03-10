import { client, Minecraft } from 'beapi-core'
import { slapperModal } from '../database/index.js'

client.on('Tick', () => {
    for (const slapper of slapperModal.findAll({})) {
        const entity = client.entities.getByUniqueId(slapper.uniqueId)
        if (!entity) continue
        entity.executeCommand('tp @s ~ ~ ~')
        entity.executeCommand('effect @s instant_health 20 255 true')
        entity.executeCommand('effect @s weakness 20 255 true')
    }
})
