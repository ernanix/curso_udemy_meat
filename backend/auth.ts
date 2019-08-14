import {Request,Response}  from 'express'
import {User, users} from './users'

import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, resp: Response)=> {
    const user: User = req.body
    console.log("log body email " + req.body['email'])
    console.log("log body pwd " + req.body['password']) 
    if(isValid(user)){
        const dbUser: User = users[user.email]
        const token = jwt.sign({sub: dbUser.email, iss:'meat-api'},'meat-api-psw')
        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
    }else{
        resp.status(403).json({message: 'Dados inválidos.'})
    }
}


function isValid(user: User): boolean {
    console.log("user name: "+ user.name)
    if (!user){
        return false
    }
    const dbUser = users[user.email]
    console.log("dbUser: "+ dbUser)
    return dbUser !== undefined && dbUser.matches(user)
}