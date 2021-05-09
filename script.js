function createBoard() {
    let tetris = document.createElement('div')
    tetris.classList.add('tetris')

    for (let i = 1; i < 181; i++) {
        let excel = document.createElement('div')
        excel.classList.add('excel')
        tetris.appendChild(excel)
    }

    let main = document.getElementsByClassName('main')[0]
    main.appendChild(tetris)

    let excel = document.getElementsByClassName('excel')
    let i = 0

    for (let y = 18; y > 0; y--) {
        for (let x = 1; x < 11; x++) {
            excel[i].setAttribute('posX', x)
            excel[i].setAttribute('posY', y)
            i++
        }
    }
}

createBoard()

let x = 5,
    y = 15

let mainArr = [
    [
        [0, 1],
        [0, 2],
        [0, 3],
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ],
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ],
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],
    ],
    [
        [1, 0],
        [0, 1],
        [1, 1],
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
    ],
    [
        [1, 0],
        [0, 1],
        [0, 2],
        [
            [0, 0],
            [-1, 1],
            [1, 0],
            [2, -1]
        ],
        [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0]
        ],
        [
            [-1, 0],
            [0, -1],
            [2, -2],
            [1, -1]
        ],
        [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0]
        ],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2],
        [
            [0, 0],
            [0, 0],
            [1, -1],
            [-1, -1]
        ],
        [
            [0, -1],
            [-1, 0],
            [-2, 1],
            [1, 0]
        ],
        [
            [2, 0],
            [0, 0],
            [1, -1],
            [1, -1]
        ],
        [
            [-2, 0],
            [1, -1],
            [0, 0],
            [-1, 1]
        ],
    ],
    [
        [1, 0],
        [-1, 1],
        [0, 1],
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ],
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ],
    ],
    [
        [1, 0],
        [1, 1],
        [2, 1],
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
        [
            [-2, 1],
            [0, 0],
            [-1, 1],
            [1, 0]
        ],
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
        [
            [-2, 1],
            [0, 0],
            [-1, 1],
            [1, 0]
        ],
    ],
    [
        [1, 0],
        [2, 0],
        [1, 1],
        [
            [1, -1],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        [
            [0, 0],
            [-1, 0],
            [-1, 0],
            [1, -1]
        ],
        [
            [1, -1],
            [1, -1],
            [1, -1],
            [0, 0]
        ],
        [
            [-2, 0],
            [0, -1],
            [0, -1],
            [-1, -1]
        ],
    ]
]
let currentfigure = 0
let figureBody = 0
let rotate = 1

function create() {
    function getRandom() {
        return Math.round(Math.random() * (mainArr.length - 1))
    }
    rotate = 1
    currentfigure = getRandom()

    figureBody = [
        document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentfigure][0][0]}"][posY = "${y + mainArr[currentfigure][0][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentfigure][1][0]}"][posY = "${y + mainArr[currentfigure][1][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentfigure][2][0]}"][posY = "${y + mainArr[currentfigure][2][1]}"]`),
    ]

    for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure')
    }
}
create()

let score = 0
let s = 0
let m = 0
let live = 1
let input = document.getElementById('score')
input.value = `Score: ${score}`
let timer = document.getElementById('timer')
timer.value = "Time: 00:00"
let lives = document.getElementById('lives')
lives.value = `Lives: ${live}`
let downKey = false
let gameover = false
let game
let t

function startTimer(display) {

    t = setInterval(function () {
        s++

        if (s === 60) {
            m++
            m = m < 10 ? "0" + m : m
            s = 0
        }
        s = s < 10 ? "0" + s : s
        if (m === 0) {
            display.value = "Time: 00:" + s
        } else {
            display.value = "Time: " + m + ":" + s
        }

    }, 1000);

}