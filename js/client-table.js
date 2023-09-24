const response = {
    "clientdata": [
        {
        "url": "client-a.html",
        "name": "Client A",
        "platforms": "TikTok, Youtube"
        },
        {
        "url": "#",
        "name": "Client B",
        "platforms": "TikTok"
        },
        {
        "url": "#",
        "name": "Client C",
        "platforms": "TikTok"
        },
        {
        "url": "#",
        "name": "Client D",
        "platforms": "TikTok, Youtube"
        },
        {
        "url": "#",
        "name": "Client E",
        "platforms": "TikTok, Youtube"
        },
        {
        "url": "#",
        "name": "Client F",
        "platforms": "TikTok"
        },
        {
        "url": "#",
        "name": "Client G",
        "platforms": "YouTube"
        }
    ]
}
 
const tableContent = document.getElementById("table-content")
const tableButtons = document.querySelectorAll("th button");
 
const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.slice(1).map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        cell.innerHTML = obj[key];
        row.appendChild(cell);
    });
    const url = Object.values(obj)[0];
    row.setAttribute("onclick", `location.href='${url}'`)
    return row;
};
 
const getTableContent = (data) => {
    data.map((obj) => {
        const row = createRow(obj);
        tableContent.appendChild(row);
    });
};
 
const sortData = (data, param, direction = "asc") => {
    tableContent.innerHTML = '';
    const sortedData =
        direction == "asc"
        ? [...data].sort(function (a, b) {
            if (a[param] < b[param]) {
                return -1;
            }
            if (a[param] > b[param]) {
                return 1;
            }
            return 0;
            })
        : [...data].sort(function (a, b) {
            if (b[param] < a[param]) {
                return -1;
            }
            if (b[param] > a[param]) {
                return 1;
            }
            return 0;
            });

    getTableContent(sortedData);
};
 
const resetButtons = (event) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};
 
window.addEventListener("load", () => {
    getTableContent(response.clientdata);

    [...tableButtons].map((button) => {
        button.addEventListener("click", (e) => {
        resetButtons(e);
        if (e.target.getAttribute("data-dir") == "desc") {
            sortData(response.clientdata, e.target.id, "desc");
            e.target.setAttribute("data-dir", "asc");
        } else {
            sortData(response.clientdata, e.target.id, "asc");
            e.target.setAttribute("data-dir", "desc");
        }
        });
    });
});