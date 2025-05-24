let inputBar = document.querySelector(".input")
let add = document.querySelector(".add")
let listtask = document.querySelector("ul")

add.addEventListener("click",()=>{
    // console.log("add")
    let task = inputBar.value 
    inputBar.value="";
    if (task =="")return;
    let ele = document.createElement("li")
    ele.innerHTML=`${task} <button>Delete</button>`
     
    let Deletebtn = ele.querySelector("button")

    Deletebtn.addEventListener("click",()=>{
          listtask.removeChild(ele);
        //   console.log(Deletebtn)
        // console.log("delete")
    
    })

       listtask.appendChild(ele);

})


    


