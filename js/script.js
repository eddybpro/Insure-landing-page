const burger = document.getElementById('burger');
const listContainer = document.getElementById('list-container');
const firstSpan = document.getElementById('first')
const secondSpan = document.getElementById('second')
const thirdSpan = document.getElementById('third');
const navList = document.querySelectorAll('.nav-list');

burger.addEventListener('click',()=>{
    
    listContainer.classList.toggle('list-containerS')

    firstSpan.classList.toggle('firstS');
    secondSpan.classList.toggle('secondS');
    thirdSpan.classList.toggle('thirdS');
})

navList.forEach(list => {
    list.addEventListener('click',()=>{
        listContainer.classList.toggle('list-containerS')

        firstSpan.classList.toggle('firstS');
        secondSpan.classList.toggle('secondS');
        thirdSpan.classList.toggle('thirdS');
    })
});















