import express from "express";
import { UserService } from "./../services/user/UserService.js"; 

const userRouter = express.Router();

export const userRoutes = (router) => {

    router.use('/user', userRouter);

    userRouter.get('/:_id', (req, res) => {
        console.log(`Hitting the GET user endpoint`);
        const id = req.params._id;
        
        UserService.get(id)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json({ message: err.message}))
    });

    userRouter.post('/', async (req, res) => {
        console.log(`Hitting the POST user endpoint`);

        UserService.create(req.body)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json({ message: err.message}))
    });

    userRouter.put('/:_id', async (req, res) => {
        console.log(`Hitting the PUT user endpoint`);
        
        const id = req.params._id;
        const data = req.body;

        UserService.update(id, data)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json({ message: err.message }))

    });

    userRouter.delete('/:_id', (req, res) => {
        console.log(`Hitting the DELETE user endpoint`);
        
        const id = req.params._id;

        UserService.delete(id)
            .then(user => {
                if (user) {
                    res.status(200).json({
                        message: `User with ${id} has been deleted`
                    })
                } else {
                    res.status(404).json({
                        message: `User with ${id} not found`
                    })
                }
            })
            .catch(err => res.status(500).json({ message: err.message}))

    });

};
