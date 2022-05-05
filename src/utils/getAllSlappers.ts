import { Entity, Document } from 'beapi-core'
import { slapperModal } from '../database/index.js'
import { Slapper } from '../types/index.js'
import { client } from '../Client.js'

export function getAllSlappers(): { entity: Entity, slapper: Document<Slapper> & Slapper }[] {
  const all: { entity: Entity, slapper: Document<Slapper> & Slapper }[] = []
  for (const slapper of slapperModal.findAll({})) {
    const entity = client.entities.getByUniqueId(slapper.uniqueId)
    all.push({
      entity,
      slapper,
    })
  }

  return all
}
