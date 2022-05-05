import { Location, Dimension, Entity, Document } from 'beapi-core'
import { slapperModal } from '../database/index.js'
import { Slapper } from '../types/index.js'
import { client } from '../Client.js'

export function createSlapper(entityId: string, location: Location, dimension: Dimension, name: string, command: string): { entity: Entity, slapper: Document<Slapper> & Slapper } {
  const entity = client.world.spawnEntity(entityId, location, dimension)
  const slapper = slapperModal.write({
    uniqueId: entity.getUniqueId(),
    name,
    command,
  })

  return {
    entity,
    slapper,
  }
}
