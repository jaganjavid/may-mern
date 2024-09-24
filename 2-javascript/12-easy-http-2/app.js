

const http = new EasyHTTP();

// Get user

http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));


const users = {
    name:"Jagan javid",
    username:"jagan_javid",
    email:"jj@gmail.com"
};

http.post("https://jsonplaceholder.typicode.com/users", users)
.then(data => console.log(data))
.catch(err => console.log(err))

http.put("https://jsonplaceholder.typicode.com/users/5", users)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/7")
.then(data => console.log(data))
.catch(err => console.log(err))