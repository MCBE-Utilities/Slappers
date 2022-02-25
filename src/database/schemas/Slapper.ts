import { schema, SchemaTypes } from 'beapi-core'
import { Slapper } from '../../types/index.js'

export const slapperSchema = schema<Slapper>({
    uniqueId: SchemaTypes.Number,
    name: SchemaTypes.String,
    command: SchemaTypes.String,
})
