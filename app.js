const express= require ('express');
const app=express();
const port=3000;
app.set('view engine','pug');
app.set('views','./views')

const middleware=(req,res,next)=>{
const now=new Date();
const hour=now.getHours();
const day=now.getDay();
if(day>=1 && day<=5 && hour>=9 && hour<=17){
    next();
}else{
    res.render('notopen');
}       
}
app.use(middleware);
app.get('/',(req,res)=>{
res.render('home')
})
app.get('/service',(req,res)=>{
    res.render('service')
    })
    app.get('/contact',(req,res)=>{
        res.render('contact')
        })

        app.use((err, req, res, next) => {  
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
        


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})