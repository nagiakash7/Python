const express= require('express')
const app = express();


app.post('/user',(req,res)=>{

	console.log(parse(req.body)

	// return res.redirect('/practice')
})


const port =process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening to port  ${port}....`) ) 