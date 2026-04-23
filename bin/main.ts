import '#bin/otel'
import 'reflect-metadata'

import { Ignite } from '@athenna/core'
import { Database } from '@athenna/database'

const ignite = await new Ignite().installSourceMaps().load(import.meta.url)

await ignite.httpServer()
await ignite.worker()

await Database.runMigrations()
await Database.runSeeders()
