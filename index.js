import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const posts = [];
let id = 0;

app.get("/", (req, res) => {
    res.render("index.ejs", {posts});
})
app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    res.render("edit.ejs", {post});
})

app.post("/post", (req, res) => {
    id++;
    const newPost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
    }
    posts.push(newPost);
    res.render("index.ejs", {posts});
})

app.post("/edit", (req, res) => {
    const postId = parseInt(req.body.postId);
    const post = posts.find((p) => parseInt(p.id) === postId);
    const replacementPost = {
        id: postId,
        title: req.body.title || post.title,
        content: req.body.content || post.content,
    }
    const searchIndex = posts.findIndex((p) => parseInt(p.id) === postId);
    posts[searchIndex] = replacementPost;

    res.render("index.ejs", {posts});
})

app.post("/delete", (req, res) => {
    const postId = parseInt(req.body.postId);
    const postIndex = posts.findIndex((p) => parseInt(p.id) === postId);
    if(postIndex !== -1){
        posts.splice(postIndex, 1);
    }
    
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})