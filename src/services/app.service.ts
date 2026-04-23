import { Log } from '@athenna/logger'
import { Service } from '@athenna/ioc'
import { Queue } from '@athenna/queue'
import { User } from '#src/models/user'
import { Otel, Span } from '@athenna/otel'

@Service()
export class AppService {
  private readonly logger = Log.create({ namespace: AppService.name})

  @Span()
  public async findOne() {
    Otel.setCurrentContextValue('foo', 'bar-from-service')

    this.logger.info({ msg: 'AppService.findOne' })

    await Queue.add({ hello: 'world' })

    return {
      name: '@athenna/athenna',
      domain: null,
      version: '1.0.0',
      description: 'Athenna is awesome!',
      source: 'https://github.com/AthennaIO'
    }
  }

  @Span()
  public async findAll() {
    return User.findMany()
  }
}
