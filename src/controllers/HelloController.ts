import { Request } from 'firebase-functions'
import { Response } from 'express'

class HelloController  {
  public async handle(request: Request, response: Response) {
    return response.status(200).send({ message: 'hello world' })
  }
}

export { HelloController }
