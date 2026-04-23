import { Column, BaseModel } from '@athenna/database'

export class User extends BaseModel {
  @Column()
  public id: number

  @Column()
  public name: string

  public static async definition(): Promise<Partial<User>> {
    return {
      id: this.faker.number.int(),
      name: this.faker.person.fullName()
    }
  }
}
