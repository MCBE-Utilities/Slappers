import { edit } from '../forms/index.js'
import { client } from '../Client.js'

client.on('PlayerTag', (data) => {
    if (data.tag !== 'edit_slapper') return

    return edit(data.player)
})
