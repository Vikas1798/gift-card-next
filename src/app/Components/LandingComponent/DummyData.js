import forms from '@/app/Components/Assets/TabIcons/farms.png';
import amazingViews from '@/app/Components/Assets/TabIcons/amazingViews.png';
import golfing from '@/app/Components/Assets/TabIcons/golfing.png';
import lakefront from '@/app/Components/Assets/TabIcons/lakefront.png';
import omg from '@/app/Components/Assets/TabIcons/omg.png';
import rooms from '@/app/Components/Assets/TabIcons/rooms.png';
import vineyards from '@/app/Components/Assets/TabIcons/vineyards.png';

import seven from '@/app/Components/Assets/hotelImages/7.webp';
import one from '@/app/Components/Assets/hotelImages/1.webp';
import two from '@/app/Components/Assets/hotelImages/2.webp';
import three from '@/app/Components/Assets/hotelImages/3.webp';
import four from '@/app/Components/Assets/hotelImages/4.webp';
import five from '@/app/Components/Assets/hotelImages/5.webp';


// import vineyards from '@/app/Components/Assets/TabIcons/vineyards.png';

const filterData= [
    {
        name:'Farms',
        slug:'farms',
        icon: forms
    },
    {
        name:'Amazing views',
        slug:'amazing-iews',
        icon:amazingViews
    },
    {
        name:'OMG!',
        slug:'omg',
        icon: omg
    },
    {
        name:'Golfing',
        slug:'golfing',
        icon: golfing
    },
    {
        name:'Vineyards',
        slug:'vineyards',
        icon:lakefront
    },
    {
        name:'Beachfront',
        slug:'beachfront',
        icon:forms
    },
    {
        name:'Amazing pools',
        slug:'amazing-pools',
        icon:omg
    },
    {
        name:'Lakefront',
        slug:'lakefront',
        icon:lakefront
    },
    {
        name:'Rooms',
        slug:'rooms',
        icon:rooms
    },
    {
        name:'Countryside',
        slug:'countryside',
        icon:forms
    },
    {
        name:'Trending',
        slug:'trending',
        icon:lakefront
    },
    {
        name:'Cabins',
        slug:'cabins',
        icon:amazingViews
    },
    {
        name:'Tropical',
        slug:'tropical',
        icon:rooms
    },
    {
        name:'National parks',
        slug:'national-parks',
        icon:lakefront
    },
    {
        name:'Bed & breakfasts',
        slug:'bed-and-breakfasts',
        icon:forms
    },
    {
        name:'Tiny homes',
        slug:'tiny-homes',
        icon:rooms
    },
    {
        name:'Camping',
        slug:'camping',
        icon:amazingViews
    },
    {
        name:'Design',
        slug:'design',
        icon:vineyards
    },
    {
        name:'Castles',
        slug:'castles',
        icon:forms
    },
    {
        name:'Islands',
        slug:'islands',
        icon:rooms
    },
    {
        name:'Treehouses',
        slug:'treehouses',
        icon:amazingViews
    },
    {
        name:'New',
        slug:'new',
        icon:vineyards
    }
]

const hotelsData = [
    {
        place:"Karnataka, India",
        distance:"199",
        nights:"2",
        fromTo:"1-6 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:one
    },
    {
        place:"Kodagu, India",
        distance:"209",
        nights:"6",
        fromTo:"10-16 Sep",
        taxes:'6,323',
        ration:"4.84",
        image:two
    },
    {
        place:"Madikeri, India",
        distance:"219",
        nights:"6",
        fromTo:"9-15 Sep",
        taxes:'41,196',
        ration:"4.91",
        image:three
    },
    {
        place:"Hosur, India",
        distance:"50",
        nights:"5",
        fromTo:"4-9 Sep",
        taxes:'35,380',
        ration:"5.0",
        image:four
    },
    {
        place:"Nandi Hills, India",
        distance:"47",
        nights:"5",
        fromTo:"3-8 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:five
    },
    {
        place:"Alappuzha, India",
        distance:"360",
        nights:"7",
        fromTo:"7-12 Sep",
        taxes:'6,969',
        ration:"4.99",
        image:seven
    },
    {
        place:"Bengaluru, India",
        distance:"199",
        nights:"2",
        fromTo:"1-6 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:one
    },
    {
        place:"Cherttala, India",
        distance:"209",
        nights:"6",
        fromTo:"10-16 Sep",
        taxes:'6,323',
        ration:"4.84",
        image:two
    },
    {
        place:"Wayanad, India",
        distance:"219",
        nights:"6",
        fromTo:"9-15 Sep",
        taxes:'41,196',
        ration:"4.91",
        image:three
    },
    {
        place:"Drimnin, India",
        distance:"50",
        nights:"5",
        fromTo:"4-9 Sep",
        taxes:'35,380',
        ration:"5.0",
        image:four
    },
    {
        place:"Murbad, India",
        distance:"47",
        nights:"5",
        fromTo:"3-8 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:five
    },
    {
        place:"Goa, India",
        distance:"360",
        nights:"7",
        fromTo:"7-12 Sep",
        taxes:'6,969',
        ration:"4.99",
        image:seven
    },
    {
        place:"Karnataka, India",
        distance:"199",
        nights:"2",
        fromTo:"1-6 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:one
    },
    {
        place:"Kodagu, India",
        distance:"209",
        nights:"6",
        fromTo:"10-16 Sep",
        taxes:'6,323',
        ration:"4.84",
        image:two
    },
    {
        place:"Madikeri, India",
        distance:"219",
        nights:"6",
        fromTo:"9-15 Sep",
        taxes:'41,196',
        ration:"4.91",
        image:three
    },
    {
        place:"Hosur, India",
        distance:"50",
        nights:"5",
        fromTo:"4-9 Sep",
        taxes:'35,380',
        ration:"5.0",
        image:four
    },
    {
        place:"Nandi Hills, India",
        distance:"47",
        nights:"5",
        fromTo:"3-8 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:five
    },
    {
        place:"Alappuzha, India",
        distance:"360",
        nights:"7",
        fromTo:"7-12 Sep",
        taxes:'6,969',
        ration:"4.99",
        image:seven
    },
    {
        place:"Bengaluru, India",
        distance:"199",
        nights:"2",
        fromTo:"1-6 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:one
    },
    {
        place:"Cherttala, India",
        distance:"209",
        nights:"6",
        fromTo:"10-16 Sep",
        taxes:'6,323',
        ration:"4.84",
        image:two
    },
    {
        place:"Wayanad, India",
        distance:"219",
        nights:"6",
        fromTo:"9-15 Sep",
        taxes:'41,196',
        ration:"4.91",
        image:three
    },
    {
        place:"Drimnin, India",
        distance:"50",
        nights:"5",
        fromTo:"4-9 Sep",
        taxes:'35,380',
        ration:"5.0",
        image:four
    },
    {
        place:"Murbad, India",
        distance:"47",
        nights:"5",
        fromTo:"3-8 Sep",
        taxes:'35,380',
        ration:"4.84",
        image:five
    },
    {
        place:"Goa, India",
        distance:"360",
        nights:"7",
        fromTo:"7-12 Sep",
        taxes:'6,969',
        ration:"4.99",
        image:seven
    },

]

export { filterData, hotelsData};