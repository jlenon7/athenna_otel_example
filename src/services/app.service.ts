import { Otel } from '@athenna/otel'
import { Log } from '@athenna/logger'
import { Service } from '@athenna/ioc'
import { Queue } from '@athenna/queue'

@Service()
export class AppService {
  private readonly logger = Log.create({ namespace: AppService.name})

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
}
