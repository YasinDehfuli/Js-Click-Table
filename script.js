function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let text = "";

for (let i = 0; i < 10; i++) {
    text += '<tr>';
    //text = text + <tr>
    for (let j = 0; j < 10; j++) {
        text += '<td>' + getRandomNumberBetween(1, 99) + '</td>';
        // text= text + <td> </td>
    }
    text += '</tr>'
}
document.querySelector('table').innerHTML = text;


let tds = document.querySelectorAll('td');
for (let td of tds) {
    td.addEventListener("click", function () {

        let acts = document.querySelectorAll('td.active');
        td.setAttribute('class', "active")
        if (acts.length == 3) {
            for (let act of acts) {
                act.removeAttribute('class');
            }
        } else if (acts.length == 2) {
            let sum = 0;
            for (let act of acts) {
                sum += parseInt(act.innerHTML)
            }
            sum += parseInt(this.innerHTML)
            document.querySelector('h1').innerText = '';
            for (let i = 1; i < 10; i++) {
                if ((sum % i) == 0) {
                    document.querySelector('h1').innerHTML +=i+'<br>';
                }
            }
        }
        this.setAttribute('class','active');
    })
}