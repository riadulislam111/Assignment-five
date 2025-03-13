document.addEventListener("DOMContentLoaded", function () {
    const completedButtons = document.querySelectorAll(".btn-primary");
    const taskAssigned = document.getElementById("task-assigned");
    const navbarCounter = document.getElementById("counter");
    const activityLog = document.querySelector("aside .flex");

    completedButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Board Update Successfully");

          
            let taskCount = parseInt(taskAssigned.innerText);
            if (taskCount > 0) {
                taskAssigned.innerText = taskCount - 1;
            }

            
            let navbarCount = parseInt(navbarCounter.innerText);
            navbarCounter.innerText = navbarCount + 1;

          
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");

        })
    });
});


document.getElementById("last-btn").addEventListener("click", function(){
alert("finished")
})