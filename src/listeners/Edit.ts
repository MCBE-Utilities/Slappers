import { client } from 'beapi-core'
import { edit } from '../forms/index.js'

client.on('PlayerTag', (data) => {
    if (data.tag !== 'edit_slapper') return

    return edit(data.player)
})
