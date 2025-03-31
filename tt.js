// select every thing that will be required
const input=document.querySelector("input");
const button=document.querySelector("button");
const taskList=document.querySelector(".list");

// user interaction
const inputHandler=function () {
        const newTask=input.value;
        if(newTask.length==0){
              return;
        }
        // alert("handler:"+newTask);
          // add task
         // element create
         const taskEle=createTask(newTask);
  
    
           // append
          taskList.appendChild(taskEle);
             //    clear the input
           input.value=""
           const deleteBtn=taskEle.children[1];
           deleteBtn.addEventListener("click",function(){
            taskEle.remove();
           })
}
 function createTask(newTask){
const div=document.createElement("div");
const li=document.createElement("li");
const button=document.createElement("button");
button.innerText="Delete";
li.textContent=newTask;
div.appendChild(li);
div.appendChild(button);
return div;

}
button.addEventListener("click",inputHandler);