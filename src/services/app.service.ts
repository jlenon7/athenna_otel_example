import { Log } from '@athenna/logger'
import { Service } from '@athenna/ioc'
import { Otel } from '@athenna/otel'

@Service()
export class AppService {
  private readonly logger = Log.create({ namespace: AppService.name})

  public findOne() {
    this.logger.info({ msg: 'AppService.findOne' })

    return {
      name: '@athenna/athenna',
      domain: null,
      version: '1.0.0',
      description: 'Athenna is awesome!',
      source: 'https://github.com/AthennaIO'
    }
  }
}
