import { join } from 'path'
import { config } from 'dotenv'

export default async (): Promise<void> => {
  config({ path: join(__dirname, 'test/.env.testing') })
}
