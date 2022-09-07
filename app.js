const menu = document.querySelector('#logo')
const ul_list = document.getElementById('lists')
const list = document.getElementById('list-items')
const nav = document.getElementById('nav')
const bar = document.querySelector('bar')
const navlogo = document.querySelector('.nav_logo')
const read_more = document.querySelector('.read')
const read_less = document.querySelector('.read2')
const read_more2 = document.querySelector('.read3')
const read_less2 = document.querySelector('.read4')
const more_text = document.querySelector('.more-text')
const more_text2 = document.querySelector('.more-text2')
const lets_talk = document.querySelector('#btn3')
const mother = document.querySelector('.mother')
const lets = document.querySelector('.lets-talk')
const con2 = document.querySelector('.con2')
const lets_talk2 = document.querySelector('.lets-talk')
const con3a = document.querySelector('.con3a')
const con3b = document.querySelector('.con3b')
const con3c = document.querySelector('.con3c')
const con3a_btn = document.querySelector('.btna')
const con3b_btn = document.querySelector('.btnb')
const con3c_btn = document.querySelector('.btnc')



const logo = () => {
    menu.classList.toggle('is-active')
    ul_list.classList.toggle('active')
    
}

menu.addEventListener('click', logo);

const highlightmenu =() => {
    const elem = document.querySelector('.highlight')
    const container = document.querySelector('#container')
    const con2 = document.querySelector('#con2')
    const con3 = document.querySelector('#con3')
    const hire = document.querySelector('#hire')
    const footer = document.querySelector('#footer')

    let scrollPos = window.scrollY

    if (window.innerWidth > 900 && scroolPos < 600) {
        container.classList.add('#list-items')
        con2.classList.remove('#list-items ')
        return
    } else if  (window.innerWidth >900 && scrollPos < 1400){
        con2.classList.add('highlight')
        container.classList.remove('highlight')
        con3.classList.remove('highlight')
        return
    } else if  (window.innerWidth >900 && scrollPos < 2345){
        con3.classList.add('highlight')
        con2.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 900 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    
    }
};

window.addEventListener('scroll', highlightmenu);
window.addEventListener('click', highlightmenu);





const hideMobileMenu= () => {
    const bar = document.querySelector('.is-active');
    if (window.innerWidth <= 650 && bar) {
        menu.classList.toggle('is-active');
        ul_list.classList.remove('active');
    }
};

ul_list.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click',hideMobileMenu);


// const hideReadMore= () => {
//     more_text.style.display='block'
// }

// read_more.addEventListener('click', hideReadMore)

read_more.addEventListener('click', function () {
    more_text.style.display='block'
    read_less.style.display='block'
    read_more.style.display='none'
    con2.style.height='140vh'
})
read_less.addEventListener('click', function () {
    more_text.style.display='none'
    read_more.style.display='block'
    read_less.style.display='none'
    con2.style.height='120vh'
})
read_more2.addEventListener('click', function () {
    more_text2.style.display='block'
    read_less2.style.display='block'
    read_more2.style.display='none'
    lets_talk2.style.height="250vh"
})
read_less2.addEventListener('click', function () {
    more_text2.style.display='none'
    read_more2.style.display='block'
    read_less2.style.display='none'
    lets_talk2.style.height="180vh"
    
})

lets_talk.addEventListener('click', function () {
    setTimeout(() => {
        mother.style.display='none'
        lets.style.display='block'
    }, 2000);
})

ul_list.addEventListener('click',function () {
    mother.style.display='block'
    lets.style.display='none'
    con3a.style.display='none'
    con3b.style.display='none'
    con3c.style.display='none'
    hiree.style.display='none'
    hiree2.style.display='none'
    hiree3.style.display='none'
    hiree4.style.display='none'
    mother.style.opacity='1'
    nav.style.background='black'
    setTimeout(() => {
        navlogo.style.display='flex'
        mother.style.display='block'
        con3a.style.display='none'
        // con3a.style.transition='1s ease-in'
        
    }, );
})

con3a_btn.addEventListener('click', function () {
    mother.style.opacity='0.3'
    mother.style.transition='1s ease-in'
    nav.style.opacity='0.2'
    navlogo.style.transition='1s ease-in'
    setTimeout(() => {
        navlogo.style.display='none'
        mother.style.display='none'
        con3a.style.display='block'
        con3a.style.transition='0.5s ease-in'
        
    }, 2000);
    if (con3a.style.display='block') {
        nav.style.opacity='1'
        nav.style.background='#101010'

    }
})
con3b_btn.addEventListener('click', function () {
    mother.style.opacity='0.3'
    mother.style.transition='1s ease-in'
    nav.style.opacity='0.2'
    navlogo.style.transition='1s ease-in'
    setTimeout(() => {
        navlogo.style.display='none'
        mother.style.display='none'
        con3b.style.display='block'
        con3b.style.transition='1s ease-in'
        
    }, 2000);
    if (con3b.style.display='block') {
        nav.style.opacity='1'
        nav.style.background='#101010'

    }
    
})
con3c_btn.addEventListener('click', function () {
    mother.style.opacity='0.3'
    mother.style.transition='1s ease-in'
    nav.style.opacity='0.2'
    navlogo.style.transition='1s ease-in'
    setTimeout(() => {
        mother.style.display='none'
        con3c.style.display='block'
        con3c.style.transition='0.5s ease-in'
        navlogo.style.display='none'
        
        
    }, 2000);

    if (con3c.style.display='block') {
        nav.style.opacity='1'
        nav.style.background='#101010'

    }


})


const skill_btn1 = document.querySelector('.skills-btn1')
const skill_btn2 = document.querySelector('.skills-btn2')
const skill_btn3 = document.querySelector('.skills-btn3')
const skill_btn4 = document.querySelector('.skills-btn4')
const skill_btn1a = document.querySelector('.skills-btn1a')
const skill_btn2a = document.querySelector('.skills-btn2a')
const skill_btn3a = document.querySelector('.skills-btn3a')
const skill_btn4a = document.querySelector('.skills-btn4a')
const skill_card1 = document.querySelector('.skills-card1')
const skill_card2 = document.querySelector('.skills-card2')
const skill_card3 = document.querySelector('.skills-card3')
const skill_card4 = document.querySelector('.skills-card4')
const skill_wrapper = document.querySelector('.skills-wrapper')
const skills = document.querySelector('.con4')
const para1 = document.querySelector('.para1')
const para2 = document.querySelector('.para2')
const para3 = document.querySelector('.para3')
const para4 = document.querySelector('.para4')

skill_btn1.addEventListener('click', function () {
   
    skill_card1.style.width='70%'
    skill_card1.style.position='absolute'
    skill_card1.style.height='70%'
    skill_wrapper.style.background='#101011'
    skill_card1.style.border='solid 1px orangered'
    skill_card1.style.opacity='none'
    skill_btn1.style.display='none'
    skill_btn1a.style.display='block'
    para1.style.display='block'

})
skill_btn1a.addEventListener('click', function () {
   
    skill_card1.style.width='300px'
    skill_card1.style.position='inherit'
    skill_card1.style.height='435px'
    skill_wrapper.style.background='#101010'
    skill_card1.style.border='none'
    para1.style.display='none'
    skill_btn1a.style.display='none'
    skill_btn1.style.display='block'

})

skill_btn2.addEventListener('click', function () {
   
    skill_card2.style.width='70%'
    skill_card2.style.position='absolute'
    skill_card2.style.height='70%'
    skill_wrapper.style.background='#101011'
    skill_card2.style.border='solid 1px orangered'
    skill_card2.style.opacity='none'
    skill_btn2.style.display='none'
    skill_btn2a.style.display='block'
    para2.style.display='block'
    
    

})
skill_btn2a.addEventListener('click', function () {
   
    skill_card2.style.width='300px'
    skill_card2.style.position='inherit'
    skill_card2.style.height='435px'
    skill_wrapper.style.background='#101010'
    skill_card2.style.border='none'
    skill_btn2a.style.display='none'
    skill_btn2.style.display='block'
    para2.style.display='none'

})

skill_btn3.addEventListener('click', function () {
   
    skill_card3.style.width='70%'
    skill_card3.style.position='absolute'
    skill_card3.style.height='70%'
    skill_wrapper.style.background='#101011'
    skill_card3.style.border='solid 1px orangered'
    skill_card3.style.opacity='none'
    skill_btn3.style.display='none'
    skill_btn3a.style.display='block'
    para3.style.display='block'
    

})
skill_btn3a.addEventListener('click', function () {
   
    skill_card3.style.width='300px'
    skill_card3.style.position='inherit'
    skill_card3.style.height='435px'
    skill_wrapper.style.background='#101010'
    skill_card3.style.border='none'
    skill_btn3a.style.display='none'
    skill_btn3.style.display='block'
    para3.style.display='none'

})

skill_btn4.addEventListener('click', function () {
   
    skill_card4.style.width='70%'
    skill_card4.style.position='absolute'
    skill_card4.style.height='70%'
    skill_wrapper.style.background='#101011'
    skill_card4.style.border='solid 1px orangered'
    skill_card4.style.opacity='none'
    skill_btn4.style.display='none'
    skill_btn4a.style.display='block'
    para4.style.display='block'
    

})
skill_btn4a.addEventListener('click', function () {
   
    skill_card4.style.width='300px'
    skill_card4.style.position='inherit'
    skill_card4.style.height='435px'
    skill_wrapper.style.background='#101010'
    skill_card4.style.border='none'
    skill_btn4a.style.display='none'
    skill_btn4.style.display='block'
    para4.style.display='none'

})

skill_btn1.addEventListener('click', function myfuntion(x) {
    if (x.matches) {
        
    }
})
var x = window.matchMedia("(max-width: 650px)")


const hire_btn = document.querySelector('.btn3')
const hiree = document.querySelector('.hire-extension')
const hire_btn2 = document.querySelector('.btn3a')
const hiree2 = document.querySelector('.hire2-extension')
const hire_btn3 = document.querySelector('.btn3b')
const hiree3 = document.querySelector('.hire3-extension')
const hire_btn4 = document.querySelector('.btn3c')
const hiree4 = document.querySelector('.hire4-extension')

hire_btn.addEventListener('click', function () {
    hiree.style.display='block'
    // hire_btn.style.color='blue'
    mother.style.display='none'
    
})
hire_btn2.addEventListener('click', function () {
    hiree2.style.display='block'
    // hire_btn.style.color='blue'
    mother.style.display='none'
    con3a.style.display='none'
})
hire_btn3.addEventListener('click', function () {
    hiree3.style.display='block'
    // hire_btn.style.color='blue'
    mother.style.display='none'
    con3b.style.display='none'
})
hire_btn4.addEventListener('click', function () {
    hiree4.style.display='block'
    // hire_btn.style.color='blue'
    mother.style.display='none'
    con3c.style.display='none'
})

const sub = document.querySelector('.btn')
const drop = document.querySelector('.drop')



sub.addEventListener('mouseover', function () {
    drop.style.top='79px'
})
sub.addEventListener('mouseleave', function () {
    drop.style.top='-79px'
})
drop.addEventListener('mouseover', function () {
    drop.style.top='79px'
})
drop.addEventListener('mouseleave', function () {
    drop.style.top='-79px'
})