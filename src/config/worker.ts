import type { Context } from '@athenna/queue'

export default {
  /*
  |--------------------------------------------------------------------------
  | Configurations for cls-rtracer plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for cls-rtracer plugins. Check
  | the documentation for more information:
  |
  | https://github.com/puzpuzpuz/cls-rtracer
  |
  */

  rTracer: {
    enabled: false
  },

  otel: {
    contextEnabled: true,
    contextBindings: [
      {
        key: 'exampleId',
        resolve: (ctx: Context) => ctx.job.data.exampleId || 'example-id-from-job'
      }
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | Log worker tasks 
  |--------------------------------------------------------------------------
  |
  | This value defines if WorkerKernel will register a Logger to log all the
  | worker tasks.
  |
  */

  logger: {
    enabled: Env('LOG_WORKER', true),
    prettifyException: Env('LOG_PRETTY', true)
  }
}
