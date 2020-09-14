const http = new easyHTTP();

// get
// http.get("http://jsonplaceholder.typicode.com/posts", function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// post
const data = {
  title: "custom post",
  body: "this is a custom post",
};

// http.post("http://jsonplaceholder.typicode.com/posts", data, function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// put resuest
// http.put("http://jsonplaceholder.typicode.com/posts/1", data, function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// delete request

http.delete("http://jsonplaceholder.typicode.com/posts/1", function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
