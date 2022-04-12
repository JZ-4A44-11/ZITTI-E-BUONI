import createServer from '../server'

class ZittieEBuonni {
  private readonly config: any

  public async run(): Promise<void> {
    const server = createServer({})
    await server.listen(4444)
  }
}
export default new ZittieEBuonni()
