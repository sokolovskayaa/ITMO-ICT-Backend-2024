import { Request, Response } from "express"
import { UserService } from "../service/user";
import { User } from "../model/user";
import jwt from "jsonwebtoken"

const userService = new UserService();

exports.get_user = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userService.findById(id);
    if (user === null) {
        res
        .status(404)
        .send({ error: 'User with the specified id not found' })
    } else {
        res.send(JSON.stringify(user));
    }
};

exports.patch_user = async (req: Request, res: Response) => {
    const user = req.body as User;
    const updated_user = await userService.patch(user);
    if (updated_user === null) {
        res
        .status(400)
        .send({ error: 'User was not updated' })
    } else {
        res.send(JSON.stringify(updated_user));
    }
};


exports.get_user_by_token = function (token: string) {
    const parsed = jwt.verify(token, process.env.secret_key as string);
    const user_role = (parsed as User).role_name;
    return user_role;
};
