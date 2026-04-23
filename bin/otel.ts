import { OtelIgnite } from '@athenna/otel'

await new OtelIgnite().load(import.meta.url)
