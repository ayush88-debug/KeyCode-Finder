const insert =document.querySelector("#insert")

window.addEventListener("keydown", function(e){
    const key = e.key
    const keycode=e.keyCode
    const code=e.code

    insert.innerHTML= `
    <div class="color">
              <h2>Tou have pressed ${key==' ' ? "Space" : key}</h2> <br>
             <h4>KeyCode: ${keycode}    &nbsp;&nbsp;        Code: ${code}</h4>
    </div>
    `
})