var tablero = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
var jugador=" ";
var jugadorActual=" ";
var turno=0;
var partidaGanada=false;

let turnoJugador=document.getElementById("identificarJugador");

let bandera=true;
function cambiarjugador(){
    if(bandera){
        turnoJugador.innerHTML="X";
        bandera=false;
    }else{
        turnoJugador.innerHTML="0";
        bandera=true;
    }
}


let celda1=document.getElementById("idCelda1");
let celda2=document.getElementById("idCelda2");
let celda3=document.getElementById("idCelda3");
let celda4=document.getElementById("idCelda4");
let celda5=document.getElementById("idCelda5");
let celda6=document.getElementById("idCelda6");
let celda7=document.getElementById("idCelda7");
let celda8=document.getElementById("idCelda8");
let celda9=document.getElementById("idCelda9");

celda1.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
    console.log(tablero);
    if(!partidaGanada){
        jugadorActual=obtenerJugador();
        if(valido(0,0)){
            document.getElementById("myCelda1").innerHTML=jugadorActual;
            cambiarjugador();
            if(hayGanador(0,0,jugadorActual)){
                alert("Felicidades jugador "+jugadorActual+" ganaste")
            }
        }
    }else{
        alert("Existe un ganador no se puede continuar");
    }
    
    } 
},false)

celda2.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(0,1)){
                document.getElementById("myCelda2").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(0,1,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
            }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda3.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(0,2)){
                document.getElementById("myCelda3").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(0,2,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
            }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda4.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(1,0)){
                document.getElementById("myCelda4").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(1,0,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
            }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda5.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(1,1)){
                document.getElementById("myCelda5").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(1,1,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
        }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda6.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(1,2)){
                document.getElementById("myCelda6").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(1,2,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
        }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda7.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(2,0)){
                document.getElementById("myCelda7").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(2,0,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
        }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda8.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(2,1)){
                document.getElementById("myCelda8").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(2,1,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
        }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)

celda9.addEventListener('click',function(){
    if(turno>=9){
        alert("Existe un empate");
    }else{
        console.log(tablero);
        if(!partidaGanada){
            jugadorActual=obtenerJugador();
            if(valido(2,2)){
                document.getElementById("myCelda9").innerHTML=jugadorActual;
                cambiarjugador();
                if(hayGanador(2,2,jugadorActual)){
                    alert("Felicidades jugador "+jugadorActual+" ganaste")
                }
        }
        }else{
            alert("Existe un ganador no se puede continuar");
        }
    }
},false)



function valido(x,y){
    if(tablero[x][y]==' '){
        tablero[x][y]=jugadorActual;
        return true;
    }
    alert("Posicion ocupada intente otra");
    return false;
}

function obtenerJugador(){
    if(turno%2==0){
        turno++;
        jugadorActual="X";
        return 'X';
    }else{
        turno++;
        jugadorActual="0";
        return '0';
    }
}

function hayGanador(row,column,valor){
    if(ganadorFila(row,valor) || ganadorColumna(column,valor) || diagonalPrincipal(valor) || diagonalSecundaria(valor) ){
        partidaGanada=true;
        return true;
    }else{
        return false;
    }
}
function ganadorFila(row,valor){
    for (let i = 0; i < 3; i++) {
        if(tablero[row][i]!=valor){
            return false;
        }
    }
    return true;
}
function ganadorColumna(column,valor){
    for (let i = 0; i < 3; i++) {
        if(tablero[i][column]!=valor){
            return false;
        }
    }
    return true;
}
function diagonalPrincipal(valor){
    if(tablero[0][0]==valor && tablero[1][1]==valor && tablero[2][2]==valor){
        return true;
    }
    return false;
}

function diagonalSecundaria(valor){
    if(tablero[2][0]==valor && tablero[1][1]==valor && tablero[0][2]==valor){
        return true;
    }
    return false;
}