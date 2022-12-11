const rout=require('../controllers/logic')
const Menu1 = require('../models/schema')
var arr=[]
function start(app){
    app.get('/',(req,res)=>{
        res.render('dashboard')
    })
    
    app.get('/regis',(req,res)=>{
        res.render('regis',{errmsg:"",succmsg:""})
    })
    app.post('/registdata',rout.register)
    app.post('/logindata',rout.login)

    app.get('/login',(req,res)=>{
        res.render('login',{errmsg:"",succmsg:""})
    })
    app.get('/cart',(req,res)=>{
        res.render('./customers/cart')
    })
    app.get('/addcart/:id',(req,res)=>{
        const data = arr.push(id)
        console.log(data)
        res.render('./customers/cart')
    })
    // app.post('/logindata',routes.login())
    app.get('/menu',(req,res)=>{
        Menu1.find().then(function(pizzas)  {
            console.log(pizzas)
          return res.render('menu',{pizzas:pizzas})
        })
        // const pizzas = await Menu1.find() 
        // return res.render('menu',{pizzas:pizzas})
})


}
module.exports=start