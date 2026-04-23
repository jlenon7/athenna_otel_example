import {
  getNodeAutoInstrumentations,
  type NodeSDKConfiguration
} from '@athenna/otel'

export default {
  enabled: true,
  sdk: {
    instrumentations: [
      getNodeAutoInstrumentations({
        '@opentelemetry/instrumentation-http': {
          enabled: true
        },
        '@opentelemetry/instrumentation-fastify': {
          enabled: true
        }
      })
    ]
  } satisfies Partial<NodeSDKConfiguration>
}
