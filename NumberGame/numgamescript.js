
var i_score = 10
var highScore = 0
const jsConfetti = new JSConfetti()

var ran //= //Math.floor(Math.random()*10+1)

function check(){
    if (i_score <=0){
        alert("TRY AGAIN!")
    }
    else{
        check1()
    }

}

function check1(){
    var numIn = document.getElementById("get").value
    ran = 5
    

    if (numIn == ran){
        if(highScore < i_score){
            highScore = i_score
            document.getElementById("hscore").innerHTML = "&#9971 Highest Score: "+ highScore
            document.getElementById("guess").innerHTML = "YAY !!.."
            jsConfetti.addConfetti()


        }
        
    }

    else{
        i_score = i_score-1
        document.getElementById("iscore").innerHTML = "&#128175 your score:"+ i_score
        document.getElementById("guess").innerHTML = "ahh too close"
    }
    document.getElementById("get").value=''
}

