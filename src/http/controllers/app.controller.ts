import { Otel } from '@athenna/otel'
import { Log } from '@athenna/logger'
import { Inject } from '@athenna/ioc'
import { AppService } from '#src/services/app.service'
import { Controller, type Context } from '@athenna/http'

@Controller()
export class AppController {
  private readonly logger = Log.create({ namespace: AppController.name })

  @Inject()
  private readonly appService: AppService

  public async show({ response }: Context) {
    /**
     * Overwrite the context value for the exampleId key.
     */
    Otel.setCurrentContextValue('exampleId', 'example-id-from-controller')

    /**
     * Add a new context value that is not defined in the context bindings.
     */
    Otel.setCurrentContextValue('foo', 'bar')

    this.logger.info({ msg: 'AppController.show' })

    const data = this.appService.findOne()

    return response.status(200).send(data)
  }
}
