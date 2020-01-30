// Select Elements 

let targets = document.querySelectorAll(' .mainList > li');
let background = document.querySelector(' .backgroundDrop');
let nav = document.querySelector('.topNav');

//Functions
function mouseEnter(){
    console.log('Mouse enter');
    this.classList.add('target-enter');
    setTimeout(() =>  {
       if( this.classList.contains('target-enter')){
        this.classList.add('target-enter-active');
       }
    } , 150);
    background.classList.add('open');

    let dropdown = this.querySelector('.dropdown');
    const dropdownCoordonnates = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    console.log(dropdownCoordonnates);
    
    const coords= {
        width : dropdownCoordonnates.width ,
        height : dropdownCoordonnates.height,
        top : dropdownCoordonnates.top - navCoords.top ,
        left : dropdownCoordonnates.left - navCoords.left,
    };

    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


}

function mouseLeave(){
    console.log('Mouse Leave');
    this.classList.remove('target-enter');
    this.classList.remove('target-enter-active');
    background.classList.remove('open');
    

}


//AddEventListeners
targets.forEach(target => target.addEventListener('mouseenter', mouseEnter));
targets.forEach(target => target.addEventListener('mouseleave', mouseLeave));
