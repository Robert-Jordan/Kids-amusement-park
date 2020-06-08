import Item1 from 'assets/img/FestivalTable.jpg'
import Item2 from 'assets/img/AngryBirds.jpg'
import Item3 from 'assets/img/Masha.jpg'
import Item4 from 'assets/img/Dogs.jpg'
import Item5 from 'assets/img/RoomOfFear1.jpg'
import Item6 from 'assets/img/RoomOfFear2.jpg'
import Item7 from 'assets/img/LaughterRoom.jpg'
import Item8 from 'assets/img/LaserTag.jpg'
import serviceCategories from '../views/category/servicesCategories';

export const services = [{
            id: 1,
            title: 'Snow White and the Seven Dwarfs',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[1], serviceCategories[2]],
            price: 110,
            img: Item1
        },
        {
            id: 2,
            title: 'Angry birds',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[1], serviceCategories[2]],
            price: 80,
            img: Item2
        },
        {
            id: 3,
            title: 'Masha and the Bear',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[1], serviceCategories[2]],
            price: 120,
            img: Item3
        },
        {
            id: 4,
            title: '101 dalmatians',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[1], serviceCategories[2]],
            price: 260,
            img: Item4
        },

        {
            id: 5,
            title: 'Group room of fear',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[4]],
            price: 110,
            img: Item5
        },
        {
            id: 6,
            title: 'Single room of fear',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[4]],
            price: 80,
            img: Item6
        },
        {
            id: 7,
            title: 'Laughter room',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[3]],
            price: 120,
            img: Item7
        },
        {
            id: 8,
            title: 'Lasertag',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            category: [serviceCategories[5]],
            price: 260,
            img: Item8
        },
    ];
