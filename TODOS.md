# Microblog Todos and Notes:
## Part 1
- [x] Site header / navigation that appears on all pages
  - [x] link to / homepage "Blog"
  - [x] Link to post-add form: "Add a new post"

- [x] Blog Post Form
  - [x] Title
  - [x] Description
  - [x] body
  - [x] Routed to `/new`
  - [x] Canceling should redirect to homepage
  - [x] saving should redirect to homepage 
  - [x] use same form for editing a blog post

- [x] A "Post view" page shows a post > Routed to `/[postid]`
  - [x] It should have a button that shows and edit form for the post
  - [x] It should have a button to delete the post

- [x] A "homepage list" that shows the title and descriptio nof each post
  - [x] The title should be a link to the detail of the post
  - [x] This should be routed to `/`

## Part 2
- [x] Add comments
  - [x] Add a feature that lets visitors comment on individual posts
  - [x] on the post-view, it should list all existing comments (in order they were made)
  - [x] Delete button to delete a comment
  - [x] below that should be ian inline form for adding a new comment

## Part 3
- [x] Refactor: Use Redux

## Part 4
Connect to API
- [x] it loads the simple list of id/title/description from the server for all posts, and uses this to show the list on the homepage
- [x] when visiting a post, it retrieves the full detail of that post
- [x] adding/editing/deleting posts updates the backend
- [x] adding/deleting comments updates the backend

```
app.use("/api/posts/:post_id/comments", postCommentsRoutes);
app.use("/api/posts", postsRoutes);
```

### Consider:
So, you may find it helpful for your Redux state to have two different top-level keys:
* change `posts` mapping: `{ id, title, description, body, comments }`
* `titles` : an array of the simple `{ id, title, description }` you get from the backend when yo uget basic data on all posts
--- 
### Part 4 notes:
When doing async stuff with dispatch, I found out that I would need to chain a `.then` on the dispatch, because if I did it immediately after, `history.push()` would execute immediately after, and the state may not be reflected properly.
```javascript
dispatch(addPostToApi(post)).then(() => history.push('/'))
```