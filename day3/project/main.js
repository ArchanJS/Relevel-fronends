let inp=document.getElementById('inp');
let btn=document.getElementById('btn');
let dan=document.getElementById('dan');
let suc=document.getElementById('suc');

btn.addEventListener('click',()=>{
    let val=inp.value;
    if(val.includes('@')&&val.includes('.')){
        suc.style.display='block';
        setTimeout(()=>{
            suc.style.display='none';
        },3000);
    }
    else{
        dan.style.display='block';
        setTimeout(()=>{
            dan.style.display='none';
        },3000)
    }
})