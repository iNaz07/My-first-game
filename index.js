let startGame = false
let flag = true
let pause = false 
window.addEventListener('keydown', function (e) {
    let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')]
    let coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')]
    let coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')]
    let coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]

    function getNewState(a) {
        flag = true

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`)
        ]
        for (let i = 0; i < figureNew.length; i++) {
            if (!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false
            }
        }
        if (flag) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure')
            }
            figureBody = figureNew

            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure')
            }
        }
    }

    if (e.code === 'ArrowLeft' && !pause && startGame) {
        getNewState(-1)
    } else if (e.code === 'ArrowRight' && !pause && startGame) {
        getNewState(1)
    } else if (e.code === 'ArrowDown' && !pause && startGame) {
        downKey = true
    } else if (e.code === 'ArrowUp' && !pause && startGame) {
        flag = true

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentfigure][rotate+2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentfigure][rotate+2][0][1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentfigure][rotate+2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentfigure][rotate+2][1][1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentfigure][rotate+2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentfigure][rotate+2][2][1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentfigure][rotate+2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentfigure][rotate+2][3][1]}"]`)
        ]
        for (let i = 0; i < figureNew.length; i++) {
            if (!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false
            }
        }
        if (flag) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure')
            }
            figureBody = figureNew

            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure')
            }
            if (rotate < 4) {
                rotate++
            } else {
                rotate = 1
            }
        }

    } else if (e.code === 'Space' && startGame) {
        pause = true
        clearInterval(t)
        cancelAnimationFrame(game)
        document.getElementById('pause').style.display = "block"
    } else if (e.code === 'KeyR' && (pause || gameover)) {
        timer.value = "Time: 00:00"
        location.reload()
    } else if (e.code === 'KeyC' && pause) {
        pause = false
        document.getElementById('pause').style.display = "none"
        startTimer(display);
        move()
    } else if (e.code === "KeyS" && !pause && !startGame) {
        startGame = true
        document.getElementsByClassName('pause')[1].style.display = "none"
        display = document.querySelector('#timer');
        startTimer(display);
        move()
    }
})

let ScoreBoard = new Object()
ScoreBoard.username = document.getElementById("1").value
ScoreBoard.score = input.value
ScoreBoard.time = timer.value

function Submit() {
    ScoreBoardData = {
        username: ScoreBoard.username,
        score: ScoreBoard.score,
        time: ScoreBoard.time
    }
    let init = {
        method: 'POST',
        url: 'localhost:3030'
    }
    const obj = JSON.parse(ScoreBoardData)
    fetch(init, obj).then((e) => {console.log(e.status)})
    GetScoreBoard()
}

function GetScoreBoard() {
    let ScoreBoardTable = []
    let init = {
        method: 'GET',
        url: 'localhost:3030'
    }
    fetch(init).then((response) => {
        return response.json();
  }).then(data => console.log(data))
  
}

 