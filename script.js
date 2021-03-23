let tetris = document.createElement('div')
tetris.classList.add('tetris')

for (let i=1; i < 181; i++) {
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

let x = 5, y = 15

let mainArr = [
    //palka
    [
        [0, 1],
        [0, 2],
        [0, 3], 
        //povorot na 90
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ], 
        //povorot na 180 
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],
        //povorot na 270
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2]
        ], 
        //povorot na 360 
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],
    ],
    //square 
    [
        [1, 0],
        [0, 1],
        [1, 1], 
        //povorot na 90
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
         //povorot na 180
         [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
         //povorot na 270
         [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
         //povorot na 360
         [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
    ], 
    // L
    [
        [1, 0],
        [0, 1],
        [0, 2], 
        //povorot na 90
        [
            [0, 0],
            [-1, 1],
            [1, 0],
            [2, -1]
        ],
         //povorot na 180
         [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0]
        ],
         //povorot na 270
         [
            [-1, 0],
            [0, -1],
            [2, -2],
            [1, -1]
        ],
         //povorot na 360
         [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0]
        ],
    ],
    //mirror L
    [
        [1, 0],
        [1, 1],
        [1, 2],
           //povorot na 90
           [
            [0, 0],
            [0, 0],
            [1, -1],
            [-1, -1]
        ],
         //povorot na 180
         [
            [0, -1],
            [-1, 0],
            [-2, 1],
            [1, 0]
        ],
         //povorot na 270
         [
            [2, 0],
            [0, 0],
            [1, -1],
            [1, -1]
        ],
         //povorot na 360
         [
            [-2, 0],
            [1, -1],
            [0, 0],
            [-1, 1]
        ],
    ], 
    //left z
    [
        [1, 0],
        [-1, 1],
        [0, 1], 
        //povorot na 90
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
         //povorot na 180
         [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ],
         //povorot na 270
         [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
         //povorot na 360
         [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ],    
    ],
    //right z
    [
        [1, 0],
        [1, 1],
        [2, 1], 
        //povorot na 90
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
         //povorot na 180
         [
            [-2, 1],
            [0, 0],
            [-1, 1],
            [1, 0]
        ],
         //povorot na 270
         [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
         //povorot na 360
         [
            [-2, 1],
            [0, 0],
            [-1, 1],
            [1, 0]
        ], 
    ], 
    //lego
    [
        [1, 0],
        [2, 0],
        [1, 1], 
        //povorot na 90
        [
            [1, -1],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
         //povorot na 180
         [
            [0, 0],
            [-1, 0],
            [-1, 0],
            [1, -1]
        ],
         //povorot na 270
         [
            [1, -1],
            [1, -1],
            [1, -1],
            [0, 0]
        ],
         //povorot na 360
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
        return Math.round(Math.random()*(mainArr.length-1))
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
let input = document.getElementsByTagName('input')[0]
input.value = `Your score: ${score}`

function move() {
    let moveFlag = true
    let coordinates = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]
    ]
    for (let i=0; i<coordinates.length; i++) {
        if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) {
            moveFlag = false
            console.log(document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`))
            break
        }
    }
    if (moveFlag) {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure')
        }
        figureBody = [
            document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1]-1}"]`) 
        ]
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.add('figure')
        }
    } else {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure')
            figureBody[i].classList.add('set')
        }
        for (let i=1; i < 15; i++) {
            let count = 0
            for (let key=1; key < 11; key++) {
                if (document.querySelector(`[posX = "${key}"][posY = "${i}"]`).classList.contains('set')) {
                    count++
                    if (count == 10)  {
                        score += 10
                        input.value = `Your score: ${score}`
                        for (let m=1; m <11; m++) {
                            document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
                        }
                        let set = document.querySelectorAll('.set')
                        let newSet = []
                        for (let s = 0; s < set.length; s++) {
                            let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')]
                            if (setCoordinates[1] > i) {
                                set[s].classList.remove('set')
                                newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`))
                            }
                        }
                        for (let a = 0; a < newSet.length; a++) {
                            newSet[a].classList.add('set')
                        }
                        i--
                    }
                }
                for (let n=1; n<11; n++) {
                    if (document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')) {
                        clearInterval(interval)
                        alert('Game over')
                        break
                    }
                    
                }
            }
            create()       
        }
        
    }

}

let interval = setInterval(() => {
    move()
}, 300)

let flag = true

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
        // console.log(figureNew)
        for (let i = 0; i < figureNew.length; i++) {
            if (!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false                
            }
        }
        if (flag) {
            for (let i = 0; i<figureBody.length; i++) {
                figureBody[i].classList.remove('figure')
            }
            figureBody = figureNew

            for (let i = 0; i<figureBody.length; i++) {
                figureBody[i].classList.add('figure')
            }
        }
    }

    if (e.code === 'ArrowLeft') {
        getNewState(-1)
    } else if (e.code == 'ArrowRight') {
        getNewState(1)
    } else if (e.code == 'ArrowDown') {
        move()
    } else if (e.code == 'ArrowUp') {
        console.log(document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentfigure][rotate+2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentfigure][rotate+2][0][1]}"]`))
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
                for (let i = 0; i<figureBody.length; i++) {
                    figureBody[i].classList.remove('figure')
                }
                figureBody = figureNew
    
                for (let i = 0; i<figureBody.length; i++) {
                    figureBody[i].classList.add('figure')
                }
                if (rotate < 4) {
                    rotate++
                } else {
                    rotate = 1
                }
            }
        
    }
})

