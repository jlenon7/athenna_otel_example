import { Parser } from '@athenna/common'
import { Env } from '@athenna/config'

export default {
  /*
  |--------------------------------------------------------------------------
  | Default Queue Connection Name
  |--------------------------------------------------------------------------
  |
  | Athenna's queue API supports an assortment of back-ends via a single
  | API, giving you convenient access to each back-end using the same
  | syntax for every one. Here you may define a default connection.
  |
  */

  default: Env('QUEUE_CONNECTION', 'memory'),

  /*
   |--------------------------------------------------------------------------
   | Queue Connections
   |--------------------------------------------------------------------------
   |
   | Here you may configure the connection information for each server that
   | is used by your application. A default configuration has been added
   | for each back-end shipped with Athenna. You are free to add more.
   |
   | Drivers: "memory", "aws_sqs", "database", "fake"
   |
   */

  connections: {
    memory: {
      driver: 'memory',
      queue: 'my_queue',
      attempts: 3,
      deadletter: 'my_queue_dlq',
      visibilityTimeout: Parser.timeToMs('6m'),
      backoff: {
        type: 'exponential',
        delay: 2000,
        jitter: 0.5
      }
    }
  }
}
