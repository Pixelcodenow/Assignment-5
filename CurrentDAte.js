document.addEventListener("DOMContentLoaded", function () {
    function updateDate() {
        let date = new Date();
        let options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
        let formattedDate = date.toLocaleDateString("en-US", options).replace(",", "");

        document.getElementById("dayName").textContent = formattedDate.split(" ")[0] + ",";
        document.getElementById("currentDate").textContent = formattedDate.split(" ").slice(1).join(" ");
    }

    updateDate();
});
