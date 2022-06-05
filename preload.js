const fs = require('fs');
window.addEventListener('DOMContentLoaded', () => {
    const studentList = fs.readFileSync("StudentList.txt", "utf8");
    const studentListArray = studentList.split("\n");
    let idiot = document.getElementById("idiot");
    let isRolling = true;
    let currentStu = null;
    let waitAudio = document.getElementById("waitAudio");
    let doDraw = document.getElementById("doDraw");
    function rollStu() {
        let index = Math.floor(Math.random() * studentListArray.length);
        idiot.innerText = studentListArray[index];
        currentStu = index;
    }
    let draw = true;
    studentListArray.pop();
    let rollLoop = setInterval(rollStu, 40);
    let btn = document.getElementById("btn-run");
    doDraw.onclick = () => {
        console.log(1)
        if (draw) {
            draw = false;
        }else{
            draw = true;
        }
    }
    btn.onclick = () => {
        if(studentListArray.length == 0){
            idiot.innerHTML = "没有怨种啦（大悲）";
            waitAudio.pause();
        }else{
            if (isRolling) {
                if(draw){
                    studentListArray.splice(currentStu, 1);
                }
                clearInterval(rollLoop);
                btn.innerHTML = "Start";
                isRolling = false;
                waitAudio.pause();
            } else {
                rollLoop = setInterval(rollStu, 40);
                btn.innerHTML = "Stop";
                isRolling = true;
                waitAudio.play();
            }
        }
    }
})