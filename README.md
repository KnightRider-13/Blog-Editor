# My Blogger

A simple blog editor built with **Node.js**, **EJS**, and **CSS**. This application allows users to create, edit, and delete posts in a lightweight blogging platform.

## Description

This project is a blog editor that lets users add, edit, and delete posts using a simple interface. Built with **Node.js** and rendered using **EJS** templates. The application stores the posts in-memory (using an array) for simplicity.

## Table of Contents

- [Description📝](#description)
- [Installation🛠️](#installation)
- [Usage](#usage)
- [Features✨](#features)
- [Code Highlights🔍](#code-highlights)
- [Contributing🤝](#contributing)
- [Contact📧](#contact)
- [License⚖️](#license)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/KnightRider-13/Blog-Editor.git
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Start the server:
```bash
npm start
```
### 4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

- Home Page: Displays all blog posts and options to edit or delete.
- Add Post: Submit a title and content to create a new post.
- Edit Post: Update the title or content of an existing post.
- Delete Post: Remove a post from the list

## Features

- Create a Post: Add new blog posts with a title and content.
- Edit a Post: Modify existing posts.
- Delete a Post: Remove posts from the list.
- Simple Interface: A user-friendly interface with clean design.

## Code Highlights

### 1. Handling Post Creation
The `/post` route allows users to create a new blog post. Here's how it works:
```javascript
app.post("/post", (req, res) => {
    id++;
    const newPost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
    }
    posts.push(newPost);
    res.render("index.ejs", {posts});
});
```
### 2. Editing a Post
The /edit route is used to update a blog post. The post's id is used to identify and update it:
```javascript
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
});
```
### 3. Deleting a Post
The /delete route removes a post from the posts array by its id:
```javascript
app.post("/delete", (req, res) => {
    const postId = parseInt(req.body.postId);
    const postIndex = posts.findIndex((p) => parseInt(p.id) === postId);
    if(postIndex !== -1){
        posts.splice(postIndex, 1);
    }
    res.redirect("/");
});
```

## Contributing

Contributions are welcome! To contribute: 

Fork the repository. 

Create a new branch (git checkout -b feature/YourFeature). 

Commit your changes (git commit -m 'Add YourFeature'). 

Push to the branch (git push origin feature/YourFeature). 

Create a pull request. 

## Contact
Ismaa'eel – www.linkedin.com/in/ismaaeel-fahmay – fahmay17@gmail.com

## License
This project does not have a license. If you'd like to use the code, please contact me for permission.
