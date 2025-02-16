import { prismaClient } from "db"
import express, { type Request, type Response } from "express"

const app = express()

app.use(express.json())


app.get("/getUser", async (req : Request, res : Response) => {
    try {
        const users = await prismaClient.user.findMany()

        res.status(200).json({
            users : users
        })
    } catch (error) {
        res.status(400).json({
            msg : "something went wrong" + error
        })
    }
})


app.post("/createUser", async(req : Request, res : Response) => {
    const { email, password } = req.body()

    if(!email || !password){
        res.status(400).json({
            msg : "no valid email or passowrd"
        })
    }


    try {
        const user = await prismaClient.user.create({
            data : {
                email,
                password
            }
        })

        res.status(200).json({
            user : user.id
        })
    } catch (error) {
        res.status(500).json({
            msg : "something went wrong in the serve " + error
        })
    }
})





// app.post("/addTodo", async (req : Request, res : Response) => {
//     const { name } = req.body()

//     try {
//         const todo = await prismaClient.todo.create({
//             data : {
//                 name,
//                 userId : 
//             }
//         })
//     } catch (error) {
        
//     }
// })


app.get("/one", (req : Request, res : Response) => {
    res.json({
        msg : "hii"
    })
})

app.listen(4000, () => {
    console.log("app is running at port 4000");
    
})