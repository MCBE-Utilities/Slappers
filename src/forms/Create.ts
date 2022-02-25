import { client, Player } from 'beapi-core'
import { slapperModal } from '../database/index.js'

export function create(player: Player): void {
    const form = player.createModalForm()
    form.title = 'Create Slapper'
    form.addInput('Entity Id', 'minecraft:pig')
        .addInput('Slapper Name', 'Slapper Name', 'My Slapper')
        .addInput('Command', 'command', 'say hello world')
        .send((res) => {
            if (res.isCanceled) return
            const entity = client.world.spawnEntity(res.formValues[0], player.getLocation(), player.getDimensionName())
            entity.setNameTag(res.formValues[1])
            slapperModal.write({
                uniqueId: entity.getUniqueId(),
                name: res.formValues[1],
                command: res.formValues[2],
            }).save()

            return player.sendMessage('Slapper created.')
        })
}
