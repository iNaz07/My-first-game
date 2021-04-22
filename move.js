function move() {
    if (downKey) {
        fpsInterval = 1000 / 10
    } else {
        fpsInterval = 1000 / 2
    }
    if (gameover) {
        live--
        lives.value = `Lives: ${live}`
        if (live === 0) {
            cancelAnimationFrame(game)
            alert('Game over')
            location.reload()
            return
        }
        gameover = false
    }
    now = Date.now()

    elapsed = now - then

    if (elapsed > fpsInterval) {

        then = now - (elapsed % fpsInterval)

        let moveFlag = true
        let coordinates = [
            [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
            [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
            [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
            [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]
        ]
        for (let i = 0; i < coordinates.length; i++) {
            if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) {
                moveFlag = false
                downKey = false
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
            for (let i = 1; i < 15; i++) {
                let count = 0
                for (let key = 1; key < 11; key++) {
                    if (document.querySelector(`[posX = "${key}"][posY = "${i}"]`).classList.contains('set')) {
                        count++
                        if (count == 10) {
                            score += 10
                            input.value = `Score: ${score}`
                            for (let m = 1; m < 11; m++) {
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
                    for (let n = 1; n < 11; n++) {
                        if (document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')) {
                            gameover = true
                            cancelAnimationFrame(game)
                            let elem = document.getElementsByClassName('tetris')[0]
                            elem.parentNode.removeChild(elem);
                            createBoard()
                            break
                        }
                    }
                }
                create()

            }

        }

    }
    game = requestAnimationFrame(move)
}

let fpsInterval, now, elapsed
let then = Date.now()
let lastTime = Date.now()