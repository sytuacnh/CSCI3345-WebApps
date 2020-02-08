/*
    Data script is loaded before this script, which is located under <body>
    player_stats is the const variable that stores the string data
    This behavior is guaranteed by the defer attribute of <script>
*/

const parseLine = (line) => {
    return line.split(/(\s+)/).filter(e => e.trim().length > 0);
}

const capitalizeName = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const parsePlayerName = (player) => {
    const [last, first] = player[0].split(',');
    player[0] = capitalizeName(first) + " " + capitalizeName(last);
    return player;
}

const [heads, players] = (function() {
    let player_lines = player_stats.split(/\r?\n/g);
    player_lines.shift();
    player_lines.pop();
    let heads = player_lines[0];
    player_lines.shift();
    return [parseLine(heads), player_lines.map(line => parseLine(line)).map(player => parsePlayerName(player))];
})();

// <div class="arrow-up"></div>
(function createTable(tableHeadData, tableContentData) {
    let table = document.createElement("table");
    let tableHeadBody = document.createElement("tbody");
    tableHeadBody.setAttribute("id", "headTableBody");
    let tableContentBody = document.createElement("tbody");
    tableContentBody.setAttribute("id", "contTableBody");

    let headRow = document.createElement("tr");
    tableHeadData.forEach(function(cellData) {
        let cell = document.createElement("th");
        cell.setAttribute("class", "sort");
        cell.appendChild(document.createTextNode(cellData));

        let arrow = document.createElement("div");
        arrow.setAttribute("class", "arrow-up");
        cell.appendChild(arrow);

        headRow.appendChild(cell);
    });
    tableHeadBody.appendChild(headRow);

    tableContentData.forEach(function(rowData) {
        let row = document.createElement("tr");
        rowData.forEach(function(cellData) {
            let cell = document.createElement("td");
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        tableContentBody.appendChild(row);
    });

    table.appendChild(tableHeadBody);
    table.appendChild(tableContentBody);
    document.getElementById("wrapper").appendChild(table);
})(heads, players);

(function addFooter() {
    let footer = document.createElement("footer");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Powered by Stanley Lin & "));
    let a = document.createElement('a');
    let linkText = document.createTextNode("Dougstats");
    a.appendChild(linkText);
    a.title = "Dougstats.com";
    a.href = "http://www.dougstats.com/";
    a.setAttribute("target", "_blank");
    p.appendChild(a);
    footer.appendChild(p);
    document.body.appendChild(footer);
    document.getElementById("wrapper").appendChild(footer);
})();

const sortNumberD = (x, y) => {
    // if (typeof x[0] === 'string' || typeof y[0] === 'string')
    //     console.log('either one is a string')
    const a = parseInt(x[0]);
    const b = parseInt(y[0]);

    if (a === b) return 0
    else return a > b ? 1 : -1;
}

const sortNumberA = (x, y) => {
    const a = parseInt(x[0]);
    const b = parseInt(y[0]);

    if (a === b) return 0
    else return a > b ? -1 : 1;
}

let arrayToBeSorted = new Array();
const headTableBody = document.getElementById("headTableBody");
const headList = headTableBody.getElementsByTagName("th");
const contTableBody = document.getElementById("contTableBody");
let contList = contTableBody.getElementsByTagName("tr");
let newNode;
let descendOrder = true;

for (let i = 0; i < headList.length; i++) {
    headList[i].index = i;
    headList[i].onclick = function() {
        if (this.className == "sort") {
            newNode = "";
            for (let j = 0; j < contList.length; j++) {
                arrayToBeSorted[j] = new Array();
                let tdElems = contList[j].getElementsByTagName("td");
                arrayToBeSorted[j][0] = tdElems[this.index].innerText;
                arrayToBeSorted[j][1] = j;
            }

            if (!isNaN(arrayToBeSorted[0][0])) {
                if (descendOrder)
                    arrayToBeSorted.sort(sortNumberD)
                else
                    arrayToBeSorted.sort(sortNumberA)
            } else {
                if (descendOrder)
                    arrayToBeSorted.sort();
                else
                    arrayToBeSorted.sort().reverse();
            }
            // descendOrder = !descendOrder;

            if (descendOrder) {
                let arrow = headList[i].lastChild;
                arrow.classList.add('arrow-reverse');
            } else {
                let arrow = headList[i].lastChild;
                arrow.classList.remove('arrow-reverse');
            }
            descendOrder = !descendOrder;

            for (let x = 0; x < contList.length; x++)
                newNode += "<tr>" + contList[arrayToBeSorted[x][1]].innerHTML + "</tr>";

            contTableBody.innerHTML = newNode;
        }
    }
}