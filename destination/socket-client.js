/**
 * Connect as a public user
 */

const { io } = require("socket.io-client");
// URL to your strapi instance
const SERVER_URL = "http://localhost:1337";

// connect the socket
const socket = io(SERVER_URL);

//  wait until socket connects before adding event listeners
socket.on("connect", () => {
  socket.on("blog-post:create", (data) => {
    console.log("Blog Post created!");
    console.log(data);
  });
  socket.on("blog-post:update", (data) => {
    console.log("Blog Post updated!");
    console.log(data);
  });
  socket.on("blog-post:delete", (data) => {
    console.log("Blog Post deleted!");
    console.log(data);
  });
  socket.on("comment:create", (data) => {
    console.log("comment created!");
    console.log(data);
  });
  socket.on("comment:update", (data) => {
    console.log("comment updated!");
    console.log(data);
  });
  socket.on("comment:delete", (data) => {
    console.log("comment deleted!");
    console.log(data);
  });
});
