const response = {
    "clientdata": [
        {
        "date": "09/26/23",
        "time": "6:00pm EST",
        "name": "Stream 7",
        "platform": "TikTok",
        "views": "23476",
        "likes": "16834"
        },
        {
        "date": "09/25/23",
        "time": "6:00pm EST",
        "name": "Stream 6",
        "platform": "TikTok",
        "views": "10752",
        "likes": "98743"
        },
        {
        "date": "09/24/23",
        "time": "6:00pm EST",
        "name": "Stream 5",
        "platform": "TikTok",
        "views": "23138",
        "likes": "20033"
        },
        {
        "date": "09/24/23",
        "time": "1:00pm EST",
        "name": "Stream 4",
        "platform": "YouTube",
        "views": "1900",
        "likes": "1143"
        },
        {
        "date": "09/23/23",
        "time": "6:00pm EST",
        "name": "Stream 3",
        "platform": "TikTok",
        "views": "16865",
        "likes": "9878"
        },
        {
        "date": "09/22/23",
        "time": "6:00pm EST",
        "name": "Stream 2",
        "platform": "TikTok",
        "views": "14094",
        "likes": "8078"
        },
        {
        "date": "09/21/23",
        "time": "6:00pm EST",
        "name": "Stream 1",
        "platform": "TikTok",
        "views": "12856",
        "likes": "11057"
        }
    ]
}
 
const tableContent = document.getElementById("table-content")
const tableButtons = document.querySelectorAll("th button");
 
const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        cell.innerHTML = obj[key];
        row.appendChild(cell);
    });
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