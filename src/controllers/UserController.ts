import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const userRepository = getRepository(User)

    const userAlreadyExists = await userRepository.findOne({
      email
    })

    const user = userRepository.create({
      name,
      email
    })
    if (userAlreadyExists) {
      return res.status(400).json({
        error: "User already exists!"
      })
    }

    await userRepository.save(user)

    return res.json(user)
  }
}

export { UserController }