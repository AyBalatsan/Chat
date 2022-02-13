export default function initTransforImg (){
    const commitItems = document.querySelectorAll('.commit__item').forEach((item) =>{
        const link = item.querySelector('.commit__link')
        const img = item.querySelector('.commit__platform-img')
        const srcImg = img.getAttribute('src')
        link.addEventListener('mouseover', ()=>{
            const newImg = img.src.replace('.png', '-c.png');
            img.setAttribute('src', newImg)
        })
        link.addEventListener('mouseout', ()=>{
            const newImg = img.src.replace('.png', '-c.png');
            img.setAttribute('src', srcImg)
        })
    });
}
