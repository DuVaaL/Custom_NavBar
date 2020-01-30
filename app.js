// Select Elements 

let targets = document.querySelectorAll(' .mainList > li');
let background = document.querySelector(' .backgroundDrop');
let nav = document.querySelector('.topNav');

function mouseEnter(){
    console.log('Mouse enter');
    this.classList.add('target-enter');
    setTimeout(() =>  {
        this.classList.add('target-enter-active');;
    } , 150);
    background.classList.add('open');

    let dropdown = this.querySelector('.dropdown');
    const dropdownCoordonnates = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    const coords= {
        width : dropdownCoordonnates.width ,
        height : dropdownCoordonnates.height
    };

    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;


}

function mouseLeave(){
    console.log('Mouse Leave');
    this.classList.remove('target-enter');
    this.classList.remove('target-enter-active');
    background.classList.remove('open');
    

}

targets.forEach(target => target.addEventListener('mouseenter', mouseEnter));
targets.forEach(target => target.addEventListener('mouseleave', mouseLeave));
