document
.getElementById("membershipForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let plan =
    document.getElementById("plan").value;

    let goal =
    document.getElementById("goal").value.trim();

    let message =
    document.getElementById("message");

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        plan === "" ||
        goal === ""
    ){
        message.innerHTML =
        "❌ Please fill all fields.";
        message.style.color = "red";
        return;
    }

    let emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailPattern.test(email)){
        message.innerHTML =
        "❌ Enter a valid email.";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
    "✅ Registration Successful!";
    message.style.color = "green";

    document
    .getElementById("membershipForm")
    .reset();
});

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let task =
    taskInput.value.trim();

    if(task === ""){
        alert("Enter a workout task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="deleteBtn">Delete</button>
    `;

    li.querySelector("button")
    .addEventListener("click", function(){
        li.remove();
    });

    document
    .getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}