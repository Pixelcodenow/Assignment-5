document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".card button");
    const taskAssignedElement = document.querySelector(".border-blue-400 p:last-child");
    const taskCountElement = document.querySelector(".ml-2.font-bold.text-lg");
    const activityLogContainer = document.querySelector(".activity-log");
    const clearHistoryButton = document.querySelector(".clear-history-btn");

    function checkAllTasksCompleted() {
        const remainingTasks = document.querySelectorAll(".card button:not([disabled])");
        if (remainingTasks.length === 0) {
            setTimeout(() => {
                alert("🎉 Congratulations!!! You have completed all the current tasks.");
            }, 500);
        }
    }

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.disabled) return;

            alert("Board updated successfully");

            // Disable the button
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");

            // Update Task Assigned count
            let assignedCount = parseInt(taskAssignedElement.innerText);
            if (!isNaN(assignedCount) && assignedCount > 0) {
                taskAssignedElement.innerText = assignedCount - 1;
            }

            // Update Navbar Task count
            let taskCount = parseInt(taskCountElement.innerText);
            if (!isNaN(taskCount)) {
                taskCountElement.innerText = taskCount + 1;
            }

            // Get Task Title and Current Time
            let taskTitle = button.closest(".card").querySelector("h3").innerText;
            let currentTime = new Date().toLocaleTimeString();

            // Create a new message element
            let messageElement = document.createElement("div");
            messageElement.innerText = `You have completed the task: ${taskTitle} at ${currentTime}`;
            messageElement.style.background = "#F4F7FF";
            messageElement.style.padding = "10px";
            messageElement.style.borderRadius = "8px";
            messageElement.style.marginTop = "5px";

            // Append new message BELOW clear button
            activityLogContainer.appendChild(messageElement);

            // Check if all tasks are completed
            checkAllTasksCompleted();
        });
    });

    // Clear History Button
    clearHistoryButton.addEventListener("click", function () {
        // Remove all messages inside activity log
        const messages = activityLogContainer.querySelectorAll("div");
        messages.forEach(msg => msg.remove());
    });
});
