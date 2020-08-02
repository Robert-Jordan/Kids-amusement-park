import { Service, Cookery, Animators, AdditionalServices } from '../../components/category/types';
import Item1 from '../../assets/img/FestivalTable.jpg'
import Item2 from '../../assets/img/AngryBirds.jpg'
import Item3 from '../../assets/img/Masha.jpg'
import Item4 from '../../assets/img/Dogs.jpg'
import Item5 from '../../assets/img/RoomOfFear1.jpg'
import Item6 from '../../assets/img/RoomOfFear2.jpg'
import Item7 from '../../assets/img/LaughterRoom.jpg'
import Item8 from '../../assets/img/LaserTag.jpg'
import kyiv_beyblade from '../../assets/img/kyiv_beyblade.jpg'
import kyiv_lol from '../../assets/img/kyiv_lol.jpg'
import kyiv_minions from '../../assets/img/kyiv_minions.jpg'
import kyiv_frozen from '../../assets/img/kyiv_frozen.jpg'
import kyiv_avengers from '../../assets/img/kyiv_avengers.jpg'
import kyiv_alice from '../../assets/img/kyiv_alice.jpg'

const possibleTimeForGameRooms = [{
    startTime: "10:00",
    endTime: "15:00"
},
{
    startTime: "16:00",
    endTime: "22:00"
},
{
    startTime: "10:00",
    endTime: "22:00"
}
]

export const cookery: Cookery[] = [{
    name: "Cake",
    portion: "800g",
    price: 200
},
{
    name: "Pizza",
    portion: "50cm",
    price: 150
},
{
    name: "Burger",
    portion: "200g",
    price: 60
},
{
    name: "Ice-cream",
    portion: "100g",
    price: 30
},
{
    name: "Fruit salad",
    portion: "150g",
    price: 35
},
{
    name: "Cola",
    portion: "1L",
    price: 25
},
{
    name: "Fanta",
    portion: "1L",
    price: 25
},
{
    name: "Sprite",
    portion: "1L",
    price: 25
}
]

export const animators: Animators[] = [{
    name: "Little Pony",
    price: 2000
},
{
    name: "Spider man",
    price: 1900
},
{
    name: "Clowns",
    price: 1500
},
{
    name: "Fixies",
    price: 2100
},
{
    name: "Pirates",
    price: 2300
},
{
    name: "Princesses",
    price: 2000
},
{
    name: "Magician",
    price: 2500
},
];

export const additionalServices: AdditionalServices[] = [{
    name: "Pinata",
    price: 200
},
{
    name: "Baloon",
    price: 10
},
{
    name: "Fortune wheel",
    price: 150
}];

export const serviceCategories = [
    { name: "Birthdays" },
    { name: "Themed rooms" },
    { name: "Laughter rooms" },
    { name: "Rooms of fear" },
    { name: "Large Halls" },
];

export const serviceCities = [
    { name: "Kharkiv" },
    { name: "Kyiv" },
];

export const services: Service[] = [{
    id: 1,
    title: 'Snow White and the Seven Dwarfs',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2000,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: Item1,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 2,
    title: 'Angry birds',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2400,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: Item2,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 3,
    title: 'Masha and the Bear',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2200,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: Item3,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 4,
    title: '101 dalmatians',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2200,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: Item4,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 5,
    title: 'Room of fear',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[3]],
    price: {
        minimalPrice: 2000,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: Item5
},
{
    id: 6,
    title: 'Room of fear',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[3]],
    price: {
        minimalPrice: 600,
        adultPrice: 200,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: Item6
},
{
    id: 7,
    title: 'Laughter room',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[2]],
    price: {
        minimalPrice: 600,
        adultPrice: 200,
        childrenPrice: 200,
    },
    city: serviceCities[0],
    img: Item7
},
{
    id: 8,
    title: 'Lasertag',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[4]],
    price: {
        minimalPrice: 1200,
        adultPrice: 200,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: Item8
},
{
    id: 9,
    title: 'Beyblade',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 1800,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: kyiv_beyblade,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 10,
    title: 'Lol',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 1900,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: kyiv_lol,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 11,
    title: 'Minions',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2400,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: kyiv_minions,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 12,
    title: 'Frozen heart',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2350,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: kyiv_frozen,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 13,
    title: 'Avengers',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2000,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[1],
    img: kyiv_avengers,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
},
{
    id: 14,
    title: 'Alice in Wonderland',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    category: [serviceCategories[0], serviceCategories[1]],
    price: {
        minimalPrice: 2000,
        adultPrice: 50,
        childrenPrice: 200
    },
    city: serviceCities[0],
    img: kyiv_alice,
    time: possibleTimeForGameRooms,
    cookery: cookery,
    animators: animators,
    additionalServices: additionalServices,
}
];