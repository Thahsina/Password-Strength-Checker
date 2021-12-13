const background = document.getElementById('background')
const password = document.getElementById('password')
let regExp = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


password.addEventListener('input', (e)=>{
    const input = e.target.value
    console.log(typeof input);
    const length= input.length
    const blurValue = 20 - length *2
    if (input.match(regExp)){
        background.style.filter= `blur(${blurValue}px)`

    }
    
})