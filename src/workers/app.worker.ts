import { Log } from '@athenna/logger'
import { Inject } from '@athenna/ioc'
import { Otel, Span } from '@athenna/otel'
import { Queue, Worker, type Context } from '@athenna/queue'
import { AppService } from '#src/services/app.service'

@Worker()
export class AppWorker {
  @Inject()
  public readonly appService: AppService

  private readonly logger = Log.create({ namespace: AppWorker.name })

  @Span()
  public async handle(ctx: Context<{ hello: string }>) {
    Otel.setCurrentContextValue('foo', 'bar-from-worker')

    if (ctx.job.attempts < 0) {
      await Queue.ack(ctx.job.id)

      return
    }

    this.logger.info({ msg: 'AppWorker.handle', attempts: ctx.job.attempts, data: ctx.job.data })

    await this.appService.findAll()
  }
}
