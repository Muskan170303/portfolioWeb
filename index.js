const mode_btn= document.getElementsByClassName('slider')[0];

mode_btn.addEventListener('click', ()=>{
    console.log('hehe');
    const light= document.getElementById('light');
    const dark= document.getElementById('dark');
    if(light.style.color=='white'){
        light.style.color='black';
        dark.style.color='white';
        document.documentElement.setAttribute('data-theme', 'dark')
        document.body.style.backgroundColor='var(--sec1)';
    } else{
        light.style.color='white';
        dark.style.color='black';
        document.documentElement.setAttribute('data-theme', 'light')
        document.body.style.backgroundColor='white';
    }
});


