

function getUsersUsingAxios(){
  return new Promise((resolve, reject) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then( (response) => {
   
    let users = response.data;
    var data = "";
    for(user of users){
     data += 
     `
     <div class="info " onclick="userClicked(${user.id},this)" >
     <h3>${user.name}</h3>
     <p>${user.email}</p>
   </div>
     
     `
    }
    document.querySelector(".start-side").innerHTML = data
    resolve()
  })
  .catch((error) => {
     
    alert(error);
    reject(error)
  })
})

}

function getPostsOfUser(userId){
  
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then( (response) => {
     
      let posts = response.data;
      var data = "";
           for(post of posts){
            data += 
            `
      
               <div class="box">
               <h4>${post.title}</h4>
               <hr />
               <p>
               ${post.body}
               </p>
             </div>
               `
           }
           document.querySelector(".end-side").innerHTML = data

    })
    .catch((error) => {
   
      alert(error);
    })

 

}
getUsersUsingAxios().then(() => {
  getPostsOfUser(10)
}).catch((err) => {
  alert(err)
})


function userClicked(id,ele){
  getPostsOfUser(id)
document.querySelectorAll(".info").forEach(e => {
  e.classList.remove("selected")
  })
ele.classList.add("selected")
// document.querySelectorAll(".info")[id-1].classList.add("selected")
}
























