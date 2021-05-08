async function addPlayer() {
    
let player = {
    Name: document.getElementById("pname").value,
    Score: score,
    Time: timer.value.split(' ')[1]
}
    let url = 'http://localhost:8080/addplayer'
    let init = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        'Access-Control-Allow-Origin': '*',
        body: JSON.stringify(player)
    }
    try {
        let response = await fetch(url, init)
            let res =  await response.json()
            createTable(res)
    } catch(e) {
        console.log(e)
    }
}

async function allPlayer() {
    let url = 'http://localhost:8080/addplayer'
    let init = {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        'Access-Control-Allow-Origin': '*',
    }
    try {
        let response = await fetch(url, init)
        let res = await response.json()
    } catch(e) {
        console.log(e)
    }
}

function createTable(res) {
    document.getElementById("player").style.display = "none"
    document.getElementById("board").style.display = "block"
    let table = document.getElementById("table")
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr")
        // tr.classList.add("row", "result")
        let td = document.createElement("td")
        // td.classList.add("column", "result")
        td.innerHTML = i+1
        tr.appendChild(td)
        for (const val of Object.values(res[i])) {
            let td = document.createElement("td")
            // td.classList.add("column", "result")
            td.innerHTML = val
            tr.appendChild(td) 
        }
        table.appendChild(tr)
    }
}