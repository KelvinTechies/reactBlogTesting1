const express=require('express')

const app=express()

route=app.Router()
    
    console.log(route)
const port= 4000


app.listen(port, ()=>{
    console.log(`app has started on port ${port}`)
})
