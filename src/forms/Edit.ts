import { Player } from 'beapi-core'
import { slapperModal } from '../database/index.js'
import { client } from '../Client.js'

export function edit(player: Player): void {
    const form = player.createActionForm()
    form.title = 'Edit Slapper'
    form.body = 'Select a slapper you would like to edit.'
    const slappers = slapperModal.findAll({})
    for (const slapper of slappers) {
        const entity = client.entities.getByUniqueId(slapper.uniqueId)
        if (entity) {
            form.addButton(`${slapper.name}\n §aLoaded§r`)
        } else {
            form.addButton(`${slapper.name}\n §cUnloaded§r`)
        }
    }
    if (slappers.length === 0) {
        form.body = '§cNo slappers found. Maybe try adding some?§r'
        form.addButton('Exit')
    }
    form.send((res) => {
        if (res.isCanceled || slappers.length === 0) return

        return editSlapper(player, slappers[res.selection].uniqueId)
    })
}

function editSlapper(player: Player, slapperId: number): void {
    const slapper = slapperModal.find({ uniqueId: slapperId })
    if (!slapper) return console.error(`[Slappers] Could not find a slapper with the id ${slapperId}.`)
    const form = player.createModalForm()
    form.title = 'Edit Slapper'
    form.addInput('Slapper Name', 'Slapper Name', slapper.name)
        .addInput('Command', 'Command', slapper.command)
        .send((res) => {
            if (res.isCanceled) return edit(player)
            slapper.name = res.formValues[0]
            slapper.command = res.formValues[1]
            slapper.save()

            return player.sendMessage('Slapper updated.')
        })
}