function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

// slider

const next = document.querySelector('.next');
const preview = document.querySelector('.preview');

next.addEventListener('click', function () {
    const imgs = document.querySelectorAll('.img');

    const slNo1 = document.querySelector('.slNo1')
    const slNo2 = document.querySelector('.slNo2')
    const slNo3 = document.querySelector('.slNo3')
    const slNo4 = document.querySelector('.slNo4')
    const slNo5 = document.querySelector('.slNo5')
    const slNo6 = document.querySelector('.slNo6')

    const slNo = document.querySelector('.slide').appendChild(imgs[0])
    // console.log(slNo);

    if(slNo == slNo1){
        // console.log("dhdb");
        document.body.style.background = `linear-gradient(116deg, #3b4b5a -15.11%, #552ee0 51.46%, #34f722 113.99%)`
    }
    else if(slNo == slNo2){
        document.body.style.background = `linear-gradient(116deg, #2985db -15.11%, #cce0cf 51.46%, #f72222 113.99%)`
    }
    else if(slNo == slNo3){
        document.body.style.background = `linear-gradient(116deg, #4889c5 -15.11%, #e95454 51.46%, #d3d3d3 113.99%)`
    }
    else if(slNo == slNo4){
        document.body.style.background = `linear-gradient(116deg, #727577 -15.11%, #3d3535 51.46%, #d3d3d3 113.99%)`
    }
    else if(slNo == slNo5){
        document.body.style.background = `linear-gradient(116deg, #e4d506 -15.11%, #df1a1a 51.46%, #d3d3d3 113.99%)`
    }
    else if(slNo == slNo6){
        document.body.style.background = `linear-gradient(116deg, #3765a1 -15.11%, #cac4ca 51.46%, #102cdf 113.99%)`
    }
    
})

preview.addEventListener('click', function () {
    const imgs = document.querySelectorAll('.img');

    const slNo1 = document.querySelector('.slNo1')
    const slNo2 = document.querySelector('.slNo2')
    const slNo3 = document.querySelector('.slNo3')
    const slNo4 = document.querySelector('.slNo4')
    const slNo5 = document.querySelector('.slNo5')
    const slNo6 = document.querySelector('.slNo6')

    const slNu = document.querySelector('.slide').prepend(imgs[imgs.length - 1])
    console.log(imgs[0]);

    if(imgs[0] == slNo1){
        // console.log("dhdb");
        document.body.style.background = `linear-gradient(116deg, #e4d506 -15.11%, #df1a1a 51.46%, #d3d3d3 113.99%)`
    }
    else if(imgs[0] == slNo6){
        document.body.style.background = `linear-gradient(116deg, #727577 -15.11%, #3d3535 51.46%, #d3d3d3 113.99%)`
    }
    else if(imgs[0] == slNo5){
        document.body.style.background = `linear-gradient(116deg, #4889c5 -15.11%, #e95454 51.46%, #d3d3d3 113.99%)`
    }
    else if(imgs[0] == slNo4){
        document.body.style.background = `linear-gradient(116deg, #2985db -15.11%, #cce0cf 51.46%, #f72222 113.99%)`
    }
    else if(imgs[0] == slNo3){
        document.body.style.background = `linear-gradient(116deg, #3b4b5a -15.11%, #552ee0 51.46%, #34f722 113.99%)`
    }
    else if(imgs[0] == slNo2){
        document.body.style.background = `linear-gradient(116deg, #3765a1 -15.11%, #cac4ca 51.46%, #102cdf 113.99%)`
    }
})
