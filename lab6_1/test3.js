document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const searchBtn = document.getElementById("searchBtn");
    const addBtn = document.getElementById("addBtn");
  
    searchBtn.addEventListener("click", searchPosts);
    addBtn.addEventListener("click", addPost);
  
    async function fetchPosts(query = "") {
      const response = await fetch(apiUrl + (query ? `?q=${query}` : ""));
      return await response.json();
    }
  
    async function searchPosts() {
      const query = document.getElementById("search").value;
      const posts = await fetchPosts(query);
      displayPosts(posts);
    }
  
    async function addPost() {
      const title = document.getElementById("title").value;
      const body = document.getElementById("body").value;
      const post = { title, body, userId: 1 };
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(post),
      });
      const newPost = await response.json();
      displayPost(newPost);
    }
  
    async function updatePost(id, updatedPost) {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updatedPost),
      });
      const newPost = await response.json();
      document.getElementById(`post-${id}`).replaceWith(createPostRow(newPost));
    }
  
    window.deletePost = async (id) => {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      document.getElementById(`post-${id}`).remove();
    };
  
    function displayPosts(posts) {
      const postsTable = document.getElementById("postsTable");
      postsTable.innerHTML = "";
      posts.forEach(post => {
        postsTable.appendChild(createPostRow(post));
      });
    }
  
    function displayPost(post) {
      const postsTable = document.getElementById("postsTable");
      postsTable.appendChild(createPostRow(post));
    }
  
    function createPostRow(post) {
      const row = document.createElement("tr");
      row.id = `post-${post.id}`;
      row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td>${post.userId}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="editPost(${post.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deletePost(${post.id})">Delete</button>
        </td>
      `;
      return row;
    }
  
    window.editPost = (id) => {
      const row = document.getElementById(`post-${id}`);
      const title = row.children[1].textContent;
      const body = row.children[2].textContent;
      row.innerHTML = `
        <td>${id}</td>
        <td><input type="text" value="${title}" id="edit-title-${id}" /></td>
        <td><input type="text" value="${body}" id="edit-body-${id}" /></td>
        <td>${row.children[3].textContent}</td>
        <td>
          <button class="btn btn-success btn-sm" onclick="savePost(${id})">Save</button>
          <button class="btn btn-secondary btn-sm" onclick="cancelEdit(${id})">Cancel</button>
        </td>
      `;
    };
  
    window.savePost = async (id) => {
      const title = document.getElementById(`edit-title-${id}`).value;
      const body = document.getElementById(`edit-body-${id}`).value;
      await updatePost(id, { id, title, body, userId: 1 });
    };
  
    window.cancelEdit = (id) => {
      const row = document.getElementById(`post-${id}`);
      const title = row.querySelector(`#edit-title-${id}`).value;
      const body = row.querySelector(`#edit-body-${id}`).value;
      row.innerHTML = `
        <td>${id}</td>
        <td>${title}</td>
        <td>${body}</td>
        <td>${row.children[3].textContent}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="editPost(${id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deletePost(${id})">Delete</button>
        </td>
      `;
    };
  
    fetchPosts().then(displayPosts);
  });
  