function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    // 2. Add the Ability to Wait for walkEast: 1) Make it asynchronous, 2) Make it accept time as a parameter, 3) At the end of the function, invoke sleep and pass it time as an argument, 4) Use await to pause walkEast until sleep (time) has resolved, 5) After sleep has resolved, invoke stop to stop the character.
    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time)
        stop()
    }

    // 4. Use the same pattern to make walkNorth, walkSouth, and walkWest asynchronous
    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        stop()
    }

    // 4. Use the same pattern to make walkNorth, walkSouth, and walkWest asynchronous
    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        stop()
    }

    // 4. Use the same pattern to make walkNorth, walkSouth, and walkWest asynchronous
    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

/* 1. This only defines a function that wraps setTimeout (a function that accepts a callback) with a function that returns a promise instead. This practice is often used with older JavaScript functions that do not support promises and is commonly referred to as promisifying*/
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}

// 6. THE FOLLOWING CODE ONLY WORKS IN INDEX.JS, IT DOES NOT WORK HERE!!!...
// async function moveNPC(){
//     await npc.walkNorth(1400)
//     await npc.walkEast(1200)
//     await npc.walkSouth(300)
//     await npc.walkEast(1500)
//     await npc.walkSouth(1500)
//     await npc.walkWest(2700)
//     await npc.walkNorth(400)
// }
// moveNPC()
