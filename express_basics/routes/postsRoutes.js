const express=require("express");
const knex=require("../db/client");// connection database

const router= express.Router(); // router from express


router.get("/",(req,res)=>{
    // console.log('I am in posts router');
    knex("posts")
    .orderBy('createAt','desc')
    .then(posts=>{
        console.log(posts);
        res.render("posts/index",{posts: posts}) // this will render (send data) a index.js page
    })
});
// Create Request is divided into 2 parts:
// 1. Part is grabbing the blank form - > which is a get request 
// 2/ part is saving data on server -> which is a post request
// Part 1: for create request
router.get('/new',(req,res)=>{ // the route will automatically prepend with /posts
    // so the path or request from use will be:http://localhost:3000/posts/new
    
        // This request will render new.ejs file located in a views/posts dire
        res.render("posts/new");
})
// Post  + /post/
router.post("/",(req,res)=>{ // this route will address post request comming from the form when submit button is pressed. This is defined in a form tag : method and action
    console.log(req.body);
    const formData =req.body;
    knex("posts")
    .insert({
        title: formData.title,
        content: formData.content,
        imageUrl: formData.imageUrl
    })
    .returning('*')
    .then(posts=>{
        // To show the data that is saved in a db
        const [post]=posts//👈🏻 This is a new line to destructure array
        console.log(post);
        res.redirect(`/posts/${post.id}`) // redirecting our server to display the show.ejs(Show page). Which we will be building now.
    })
})

// Show Page
router.get("/:id",(req,res)=>{
    // In the URL above all the words that are prefixed with ":" are known as URL params
    // we can see these values in req.paramswhere the name of prperty corresponds to the name of url params
    // /posts/:id/:name/:job
    // /posts/100/bob/developer
    // req.params == { id:"100", name:"bob", job:"developer"}
    const id=req.params.id;
    knex('posts')
    .where("id",id)
    .first()
    .then( post=>{
        if(post){
            res.render("posts/show",{post: post})
        }else{
            res.redirect("/posts")
        }
    })
})
router.delete("/:id",(req,res)=>{
    const id= req.params.id;
    knex("posts")
    .where("id",id)
    .del()
    .then(()=>{
        res.redirect("/posts");
    });

});


module.exports=router;