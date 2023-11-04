window.onload = function () {
    const nombreInput = document.getElementById("nombre");
    const lowerPara = document.getElementById("lower");
    const upperPara = document.getElementById("upper");
    const minimoPara = document.getElementById("minimo");
    const submit = document.getElementById("submit");

    nombreInput.addEventListener("keyup", () => {
        validarLowerCharacter();
        validarUpperCharacter();
        validarMinimoCaracteres();
        validarInput();
    });

    function validarLowerCharacter() {
        const inputValue = nombreInput.value;
        if (/[a-z]/.test(inputValue)) {
            lowerPara.style.color = "green";
            lowerPara.style.listStyleImage = "url('img/Green_tick.png')";
            
        } else {
            lowerPara.style.color = "red";
            lowerPara.style.listStyleImage = "url('img/cruz.png')";
        }
    }

    function validarUpperCharacter() {
        const inputValue = nombreInput.value;
        if (/[A-Z]/.test(inputValue)) {
            upperPara.style.color = "green";
            upperPara.style.listStyleImage = "url('img/Green_tick.png')";
        } else {
            upperPara.style.color = "red";
            upperPara.style.listStyleImage = "url('img/cruz.png')";
        }
    }

    function validarMinimoCaracteres() {
        const inputValue = nombreInput.value;
        if (inputValue.length >= 6) {
            minimoPara.style.color = "green";
            minimoPara.style.listStyleImage = "url('img/Green_tick.png')";
        } else {
            minimoPara.style.color = "red";
            minimoPara.style.listStyleImage = "url('img/cruz.png')";
        }
    }
    function validarInput(){
        const inputValue = nombreInput.value;
        if(inputValue.length >= 6 && /[A-Z]/.test(inputValue)&& /[a-z]/.test(inputValue)){
            submit.style.backgroundColor="yellow";
        }else{
            submit.style.backgroundColor="rgba(231, 212, 39, 0.422)";
        }
    }
};