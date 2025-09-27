// make a video game class
// establish properties: name, color, eaten/or not
// establish methods: run, hide, eat
// assign objects to each class
// pass values
// Blinky (red), Pinky (pink), Inky (blue), and Clyde (orange)

class CreatePacGhost{
    constructor(pacName, pacColor, pacSpeed){
        this.name = pacName
        this.color = pacColor
        this.speed = pacSpeed
        this.isEatean = false
    }
    
    run (){
        alert('Ahhhhhhhhhh')
    }
    hide (){
        alert ('Shhhh be very very quiet')
    }
    eat (){
        alert ('Time for payback')
    }
}

let blinky = new CreatePacGhost ('Blinky', 'Red','fast')

let pinky = new CreatePacGhost ('Pinky', 'Pink','fast')

pinky.run()

// completed with the help of Michael in tutoring session with MJ (Majourie Alouidor)