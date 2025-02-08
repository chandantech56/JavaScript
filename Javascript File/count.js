// for (let i = 0; i < 5; i++) {
//     console.count();
//   }

document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    const countLabel = document.querySelector("label label");
    
    document.getElementById("inc").addEventListener("click", function () {
        count++;
        updateCount();
    });

    document.getElementById("dec").addEventListener("click", function () {
        count--;
        updateCount();
    });

    document.getElementById("ref").addEventListener("click", function () {
        count = 0;
        updateCount();
    });
    
    function updateCount() {
        countLabel.textContent = count;
    }
});