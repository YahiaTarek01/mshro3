Guidelet titlemain = document.querySelector('.title')
let play =  document.querySelector('.single1')
let lang =  document.querySelector('.single2')
let exit =  document.querySelector('.single4')
let main = document.querySelector('.main')
let body = document.querySelector('.body')
let Gun = document.querySelector('.s1')
let Rock = document.querySelector('.s2')
let Fire = document.querySelector('.s3')
let Scissors = document.querySelector('.s4')
let Snack = document.querySelector('.s5')
let Human = document.querySelector('.s6')
let Tree = document.querySelector('.s7')
let Wolf = document.querySelector('.s8')
let Sponge = document.querySelector('.s9')
let paper = document.querySelector('.s10')
let Air = document.querySelector('.s11')
let Water = document.querySelector('.s12')
let Dragon = document.querySelector('.s13')
let Devil = document.querySelector('.s14')
let Lightning = document.querySelector('.s15')
let Ready = document.querySelector('.s16')
let p1 = document.querySelector('.p2')
let p2 = document.querySelector('.p1')
let res = document.querySelector('.result')
let gamer = document.querySelector('.game') 
gamer.style.display = 'none'


play.onmouseover = function(){
    play.innerHTML = "> Start Game <"
    lang.style.fontSize = "28px" 
    exit.style.fontSize = "28px"
}
play.onmouseout = function(){
    play.innerHTML = "Start Game"
    lang.style.fontSize = "35px"
    exit.style.fontSize = "35px"
}
lang.onmouseover = function(){
    lang.innerHTML = "> Guide <"
    play.style.fontSize = "28px"
    exit.style.fontSize = "28px"
}
lang.onmouseout = function(){
    lang.innerHTML = "Guide"
    play.style.fontSize = "35px"
    exit.style.fontSize = "35px"
}
exit.onmouseover = function(){
    exit.innerHTML = "> Exit <"
    lang.style.fontSize = "28px"
    play.style.fontSize = "28px"
}
exit.onmouseout = function(){
    exit.innerHTML = "Exit"
    lang.style.fontSize = "35px"
    play.style.fontSize = "35px"
}



titlemain.onmouseover = function(){
    titlemain.innerHTML = "RSP :)"
    titlemain.style.fontSize = "55px"
    titlemain.style.transiton = "0.5s"
    exit.style.fontSize = "28px"
    lang.style.fontSize = "28px"
    play.style.fontSize = "28px"
    a = setTimeout(() => {
        play.innerHTML = ":)"     
    }, 1000);
    k = setTimeout(() => {
        lang.innerHTML = ":)"
    }, 2000);
    r = setTimeout(() => {
        exit.innerHTML = ":)"
    }, 3000);
}
titlemain.onmouseout = function(){
    titlemain.innerHTML = "RSP Game"
    titlemain.style.fontSize = "60px"
    titlemain.style.transition = "0.5s"
    exit.style.fontSize = "35px"
    lang.style.fontSize = "35px"
    play.style.fontSize = "35px"
    play.innerHTML = "Start Game"
    lang.innerHTML = "Guide"
    exit.innerHTML = "Exit"
    clearTimeout(a)
    clearTimeout(k)
    clearTimeout(r)
}

play.onclick = function(){
  main.style.display = "none"  
  gamer.style.display = "block"
}
Ready.onclick = function(){
    main.style.display = "block"  
    gamer.style.display = "none"
  }
Gun.onclick = function(){
    
    p1.innerHTML = Gun.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Rock.onclick = function(){
    p1.innerHTML = Rock.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Rock'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Fire.onclick = function(){
    p1.innerHTML = Fire.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Snake'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Scissors.onclick = function(){
    p1.innerHTML = Scissors.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Snack.onclick = function(){
    p1.innerHTML = Snack.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Snack'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Human.onclick = function(){
    p1.innerHTML = Human.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Human'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Tree.onclick = function(){
    p1.innerHTML = Tree.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Tree'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Wolf.onclick = function(){
    p1.innerHTML = Wolf.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Wolf'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Sponge.onclick = function(){
    p1.innerHTML = Sponge.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Paper'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Sponge'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
paper.onclick = function(){
    p1.innerHTML = paper.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Air'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Paper'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Air.onclick = function(){
    p1.innerHTML = Air.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Water'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Air'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Water.onclick = function(){
    p1.innerHTML = Water.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Water'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Dragon.onclick = function(){
    p1.innerHTML = Dragon.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Dragon'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Devil.onclick = function(){
    p1.innerHTML = Devil.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Devil'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}
Lightning.onclick = function(){
    p1.innerHTML = Lightning.innerHTML
    let game = ['Lightning','Devil','Dragon','Water','Air','Paper','Sponge','Wolf','Tree','Human','Snake','Scissors','Snake','Fire','Rock','Gun']
    let randomchoice = Math.floor(Math.random() * game.length)
    let randome = game[randomchoice]
    p2.innerHTML = randome
    res.innerHTML = ''
    m = setInterval(() => {
        res.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
    if(p2.innerHTML == 'Tree'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Gun'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Rock'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Fire'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if( p2.innerHTML == 'Snack'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Scissors'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
    else if(p2.innerHTML == 'Human'){
        res.innerHTML = `${p1.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML == 'Lightning'){
        res.innerHTML = `Draw`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }else if(p2.innerHTML !== ''){
        res.innerHTML = `${p2.innerHTML} Is Win`
        p1.innerHTML = '...'
        p2.innerHTML = '...'
    }
clearInterval(m)}, 3000);
setTimeout(() => {
        res.innerHTML = '...'
    }, 5000);

}