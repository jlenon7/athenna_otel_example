import { Log } from '@athenna/logger'
import { User } from '#src/models/user'
import { Otel, Span } from '@athenna/otel'
import { Queue, Worker, type Context } from '@athenna/queue'

@Worker()
export class AppWorker {
  private readonly logger = Log.create({ namespace: AppWorker.name })

  @Span()
  public async handle(ctx: Context<{ hello: string }>) {
    Otel.setCurrentContextValue('foo', 'bar-from-worker')

    if (ctx.job.attempts < 0) {
      await Queue.ack(ctx.job.id)

      return
    }

    this.logger.info({ msg: 'AppWorker.handle', attempts: ctx.job.attempts, data: ctx.job.data })

    await User.findMany()
  }
}
