const hotelPosts = [
    {
        hotelImage: './Images/hotel1.jpg',
        altImage: 'Hotel 1',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    },
    {
        hotelImage: './Images/hotel2.jpg',
        altImage: 'Hotel 2',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel3.jpg',
        altImage: 'Hotel 3',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel4.jpg',
        altImage: 'Hotel 4',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel5.jpg',
        altImage: 'Hotel 5',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel6.jpg',
        altImage: 'Hotel 6',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel7.jpg',
        altImage: 'Hotel 7',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel8.jpg',
        altImage: 'Hotel 8',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    }, {
        hotelImage: './Images/hotel9.png',
        altImage: 'Hotel 9',
        hotelTitle: 'Lorem ipsum dolor sit amet.',
        days: '3-5 Days',
        points: '4.5'
    },
];

const navLinks = document.querySelectorAll('.hotels .tab-pill-container .custom-tab-pill .nav-link');
const tabPanes = document.querySelectorAll('.hotels .tab-content .tab-pane');
const tabPanesName = ["Most Popular", "Best Price", "Near Me"];

const navLinkClickHandler = (event) => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    event.target.classList.add('active');
    tabPanes[tabPanesName.indexOf(event.target.textContent)].classList.add('active')
}

navLinks.forEach(navLink => {
    navLink.addEventListener('click', navLinkClickHandler);
});

//Add Animation to Friends Avatar List in Right Aside
const friendsAvatar = document.querySelectorAll('.friends div a');

friendsAvatar.forEach(friend => {
    friend.addEventListener('mouseover', (event) => {
        if(event.target.tagName === 'A'){
            console.log(event.target);
            for(let i = 0; i < friendsAvatar.length; i++){
                if(friendsAvatar[i].isEqualNode(event.target)){
                    friendsAvatar[i].style.marginInlineEnd = "20px";
                }
            }
        }
        
    })
})

friendsAvatar.forEach(friend => {
    friend.addEventListener('mouseleave', (event) => {
        if(event.target.tagName === 'A'){
            console.log(event.target);
            for(let i = 0; i < friendsAvatar.length; i++){
                if(friendsAvatar[i].isEqualNode(event.target)){
                    friendsAvatar[i].style.marginInlineEnd = "unset";
                }
            }
        }
        
    })
})
//#End //Add Animation to Friends Avatar List in Right Aside