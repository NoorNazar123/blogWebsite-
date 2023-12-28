document.getElementById("blogForm").addEventListener("submit", function (event) {
   event.preventDefault();

   // Get the values from the form
   const title = document.getElementById("title").value;
   const content = document.getElementById("content").value;

   // Create a new article element for the blog post
   const newBlogPost = document.createElement("article");
   newBlogPost.innerHTML = `
       <h2>${title}</h2>
       <p>Published on: ${new Date().toDateString()}</p>
       <div class="content">
           ${content}
       </div>
   `;

   // Append the new blog post to the main content area
   document.querySelector("main").appendChild(newBlogPost);

   // Clear the form
   document.getElementById("title").value = "";
   document.getElementById("content").value = "";
});