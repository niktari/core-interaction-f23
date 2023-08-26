let cells_c = document.querySelectorAll('#letter-c div.fill')
let cells_1 = document.querySelectorAll('#number-1 div.fill')
let cells_i = document.querySelectorAll('#letter-i div.fill')


for (let cell_c of cells_c) {
    cell_c.onmousemove = function() {

        cell_c.style.opacity = Math.random();
        
        setTimeout(() => {
            cell_c.style.opacity = '1';
        }, 1000);
        

}

}

for (let cell_1 of cells_1) {
    cell_1.onmousemove = function() {
        
        cell_1.style.borderRadius = '100px'

        setTimeout(() => {
            cell_1.style.borderRadius = "0"; // Revert back to 0px after 0.3 seconds
        }, 1000);

}

}

for (let cell_i of cells_i) {

    cell_i.onmousemove = function() {
        console.log('moved')

        cell_i.classList.add("rotate");

        setTimeout(() => {
            cell_i.classList.remove("rotate");
        }, 1000);
    }
}