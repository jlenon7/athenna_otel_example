import {
  getNodeAutoInstrumentations,
  HttpOTLPTraceExporter,
  type NodeSDKConfiguration
} from '@athenna/otel'

export default {
  enabled: true,
  sdk: {
    serviceName: 'athenna_otel_example',
    traceExporter: new HttpOTLPTraceExporter({
      url: 'http://localhost:4318/v1/traces'
    }),
    instrumentations: [
      getNodeAutoInstrumentations({
        '@opentelemetry/instrumentation-knex': {
          enabled: true
        },
        '@opentelemetry/instrumentation-http': {
          enabled: true
        }
      })
    ]
  } satisfies Partial<NodeSDKConfiguration>
}
