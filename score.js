let playerBoard 
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
            playerBoard = res
            createTable(res, player)
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

function createTable(res, player) {
    document.getElementById("player").style.display = "none"
    document.getElementById("board").style.display = "block"
    document.getElementById("plname").innerHTML = player.Name
    let lenRes = res.length
    for (let i = 0; i < res.length; i++) {
        if (res[i].Name === player.Name) {
            const prc = Math.round((i+1)/lenRes * 100)
            document.getElementById("percent").innerHTML = prc+'%'
            document.getElementById("rank").innerHTML = i+1+''
        }
    }
    let table = document.getElementById("table")
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.classList.add("tdata")
        td.innerHTML = i+1
        tr.appendChild(td)
        if (res[i] !== undefined) {
            // console.log("whats here", res[i])
            for (const val of Object.values(res[i])) {              
                    let td = document.createElement("td")
                    td.classList.add("tdata1")
                    td.innerHTML = val
                    tr.appendChild(td) 
            } 
        } else {
            console.log("wha happen here")
            for (let j = 0; j < 3; j++) {
                let td = document.createElement("td")
                tr.appendChild(td)
            }
        }
        table.appendChild(tr)
    }       
}
let five = 5

function next() {
    if (playerBoard.length >= 6) {
        let tdata = document.querySelectorAll(".tdata")
        console.log(tdata)
        let j = 0
        for (let i = 0; i < 5; i++) {
            five++
            tdata[i].innerHTML = five
            if (playerBoard[five] !== undefined) {
                console.log("whats here", playerBoard[i])            
                for (const val of Object.values(playerBoard[five])) {                       
                    let tdata1 = document.querySelectorAll(".tdata1")
                    console.log("val", val)
                    console.log("tdata1", tdata1)
                    tdata1[j].innerHTML = val
                    j++
                } 
            } else {
                for (let k = j; k < 15; k++) {
                    let tdata1 = document.querySelectorAll(".tdata1")
                    tdata1[k].innerHTML = ''
                }
            }
        }
        console.log("this is s", five) 
    }   
}

function previous() {
    if (playerBoard.length >= 6) {
        let tdata = document.querySelectorAll(".tdata")
        console.log(tdata)
        let j = 0
        five -= 10
        for (let i = 0; i < 5; i++) {
            five++
            tdata[i].innerHTML = five        
            for (const val of Object.values(playerBoard[i])) {                       
                let tdata1 = document.querySelectorAll(".tdata1")
                console.log("val", val)
                console.log("tdata1", tdata1)
                tdata1[j].innerHTML = val
                j++
            } 
        }
        console.log("this is s", five) 
    }   
}