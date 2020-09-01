
const users = require('./secrets')
const {db, Users, Items} = require('./models')

const items = [
    {
        name: 'Mazda Miata',
        price: 54000,
        description: 'With a spirited 181-hp engine redlining at 7,500 rpm, the MX-5 Miata was made to move your mind, body and spirit.',
        imageUrl: "https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: 'Cheverolet Corvette',
        price: 76000,
        description: 'This all-new mid-engine sports car is so much more than Next Generation – it’s next level. At once precise and powerful, the Corvette Stingray coupe and convertible have been completely redesigned from the ground up to deliver a thrill on every drive.',
        imageUrl: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",
    },
    {
        name: 'Alfa Romeo 4C Spider',
        price: 67000,
        description: 'The lightweight chassis and turbocharged engine of the 4C Spider combine to make a sports car that is stunning to behold and exhilarating to drive.',
        imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
        name: 'Mercedes-Benz GLA-Class',
        price: 34000,
        description: 'More than a commanding view of the road ahead, the new second-generation GLA offers a rewarding view of what\'s next. It not only puts more sport in compact SUVs, it puts more you.',
        imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg",
    },
    {
        name: 'Tesla Roadster',
        price: 200000,
        description: 'Elon Musk wants to make the fastest car in the world. With a 0-60 mph time of 1.9 seconds, 0-100 mph in 4.2 seconds, a quarter-mile time of 8.8 seconds and a top speed of over 250 mph, the all-electric Tesla Roadster is going to be that car. A SpaceX options package will apparently take performance to another level, too.',
        imageUrl: "https://cdn.carbuzz.com/gallery-images/2020-tesla-roadster-carbuzz-523781.jpg",
    },
    {
        name: 'Bugatti Divo',
        price: 5800000,
        description: 'With 1500 horsepower, a 236-mph top speed, and a claimed 2.4-second time to 62 mph, the Bugatti Divo is the definition of a numbers car.',
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg?crop=0.822xw:1.00xh;0.109xw,0&resize=640:*",
    },
    {
        name: 'Ferrari F8 Triboto',
        price: 279450,
        description: 'The F8 Tributo is powered by a twin-turbocharged 3.9-liter V-8 that produces 710 horsepower and 568 lb-ft of torque. All models are rear-wheel drive, and a seven-speed automatic transmission changes the gears.',
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ferrari-f8-tributo-120-1568805901.jpg?crop=0.982xw:0.804xh;0.00641xw,0.160xh&resize=1200:*",
    },
    {
        name: 'Lamborghini Heracan',
        price: 261000,
        description: 'Nestled just behind the passenger compartment is a naturally aspirated 5.2-liter V10 that delivers 631 horsepower and 443 pound-feet of torque. Ostensibly unchanged from its configuration in the Performante, the high-winding mill howls to its 8000 RPM redline through a new center-exit active exhaust system that changes its volume and character based on both drive mode and throttle position.',
        imageUrl: "https://icdn5.digitaltrends.com/image/digitaltrends/2020-lamborghini-huracan-evo-spyder-review-7.jpg",
    },
    {
        name: 'Bugatti Veyron Super Sport',
        price: 17000000,
        description: '1,200 hp, a maximum torque of 1,500 Nm, acceleration from 0 to 100 km/h in 2.5 seconds and a top speed of 415 km/h – 2010 the Veyron 16.4 Super Sport made experts and car fans all around the world marvel at this performance data and shone bright as the new star in the super sports car sky.',
        imageUrl: "https://i.pinimg.com/originals/cb/9e/e2/cb9ee2b13178d8e402490ec537774c51.jpg",
    },
    {
        name: 'Mercedes-Benz G-Wagon',
        price: 139000,
        description: 'In the tier list of off-road SUVs, the Mercedes G-Class stands at the top. With three locking differentials, a ladder frame and all-wheel drive, the original didn\'t need a big engine to conquer trails. ... The latest models can climb 100% grades, offer outrageous power, and sometimes come with 6 wheels.',
        imageUrl: "https://www.motoringresearch.com/wp-content/uploads/2019/01/30_g-wagen.jpg",
    },
    {
        name: 'Mercedez Vision AVTR',
        price: 540000,
        description: 'With its four high-performance and near-wheel-built electric motors, the VISION AVTR embodies a particularly agile implementation of the vision of a dynamic luxury saloon. With a combined engine power of more than 350 kW, the VISION AVTR sets a new benchmark for EQ Power.',
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-concept-1580768332.jpg?crop=0.556xw:0.417xh;0.250xw,0.262xh&resize=1200:*",
    }
]

const seed = async() => {
    try {
        await db.sync({force: true})
        await Users.bulkCreate(users)
        await Items.bulkCreate(items)
        db.close()
        console.log('Seed Sucessful!')
    } catch(er) { 
        db.close()
        console.log(er) 
    }
}

seed()
