document.getElementById('delete-text').addEventListener('focus', function () {
    document.body.style.backgroundColor= 'red';
})
document.getElementById('delete-text').addEventListener('blur', function () {
    document.body.style.backgroundColor= 'white';
})
document.getElementById('delete-text').addEventListener('keyup', function (event) {
    const delebtn= document.getElementById('delete-btn')
    if (event.target.value=='delete'){
        delebtn.removeAttribute('disabled')

    
    }
    else{
        delebtn.setAttribute('disabled',true)
    }
})
document.getElementById('delete-btn').addEventListener('click',function () {
    document.getElementById('hunted-text').style.display='none';
    
})
document.getElementById('delete-text').addEventListener('change', function () {
   const sureText= document.getElementById('delete-text')
   console.log( sureText.value );
   sureText.value='';

})