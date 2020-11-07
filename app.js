//Movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.info h1');
const description = document.querySelector('.info h3');
const resume = document.querySelector('.resume img');
const download = document.querySelector('.download button');


//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Pop out
    title.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(120px)';
    resume.style.transform = 'translateZ(150px) rotateZ(25deg)';
    download.style.transform = 'translateZ(75px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // title.style.transition = 'all 0.5s ease';

    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    resume.style.transform = 'translateZ(0px) rotateZ(0deg)';
    download.style.transform = 'translateZ(0px)';
});

//Animate Out on Download button hover
// download.addEventListener('mouseenter', (e) => {
//     card.style.transition = 'all 0.5s ease';
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     // title.style.transition = 'all 0.5s ease';

//     title.style.transform = 'translateZ(0px)';
//     description.style.transform = 'translateZ(0px)';
//     resume.style.transform = 'translateZ(0px) rotateZ(0deg)';
//     download.style.transform = 'translateZ(0px)';
// });

