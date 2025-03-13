document.addEventListener("click", function () {
    const activityLog = document.getElementById("activity-log");
    const clearHistoryBtn = document.getElementById("clear-history");

    function addActivityLog(taskName) {
        const timeNow = new Date();
        const formattedTime = timeNow.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        let logEntry = document.createElement("div");
        logEntry.classList.add("bg-gray-100", "p-3", "rounded-lg", "shadow", "flex", "justify-between", "items-center");

        logEntry.innerHTML = `
            <span class="text-sm text-gray-700"> You completed "<b>${taskName}</b>"</span>
            <span class="text-xs text-gray-500">${formattedTime}</span>
        `;

        activityLog.prepend(logEntry);
    }

    // Example: When a "Completed" button is clicked
    document.querySelectorAll(".btn-primary").forEach((button) => {
        button.addEventListener("click", function () {
            addActivityLog("Fix Mobile Button Issue");
        });
    });

    // Clear History Button Functionality
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = ""; // Clear all logs
    });
});