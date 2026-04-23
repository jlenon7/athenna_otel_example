import { User } from '#src/models/user'
import { BaseSeeder } from '@athenna/database'

export class UsersSeeder extends BaseSeeder {
  public async run() {
    await User.factory().count(10).create()
  }
}
