document.querySelector(".btn-circle").addEventListener("click", function () {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
