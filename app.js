const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));
let items=["a","b"];

app.get("/",function (req,res) {   
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day=today.toLocaleDateString("en-us",options);

    res.render("list",{theDayToday:day,itemss:items});
});

app.post("/",function (req,res) {
    let text=req.body.newItem;

    items.push(text);

    res.redirect('/');
    
})

app.listen(3000,function () {
    console.log("Started");
});