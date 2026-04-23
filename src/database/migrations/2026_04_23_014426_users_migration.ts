import { BaseMigration, type DatabaseImpl } from '@athenna/database'

export class UsersMigration extends BaseMigration {
  public tableName = 'users'

  public async up(db: DatabaseImpl) {
    return db.createTable(this.tableName, builder => {
      builder.increments('id')
      builder.string('name')
    })
  }

  public async down(db: DatabaseImpl) {
    return db.dropTable(this.tableName)
  }
}
