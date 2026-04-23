import '#bin/otel'
import 'reflect-metadata'

import { Ignite } from '@athenna/core'

const ignite = await new Ignite().installSourceMaps().load(import.meta.url)

await ignite.httpServer()
await ignite.worker()
