import Image from "next/image";


const menu = [

{

section: "Regular Items",

items: [

{ img: "/images/dish1.jpg", title: "ITALIAN MUSHROOM", price: "$12.00" },

{ img: "/images/dish2.jpg", title: "SPICY CHICKEN", price: "$14.00" },

{ img: "/images/dish3.jpg", title: "VEGAN BURGER", price: "$11.50" },

{ img: "/images/dish4.jpg", title: "MAYO ROLL WITH CHESSE", price: "$13.50" },

{ img: "/images/dish5.jpg", title: "PIZZA POINT ", price: "$15.00" },

],

},

{

section: "Best Items",

items: [

{ img: "/images/best1.jpg", title: "SEAFOOD", price: "$18.00" },

{ img: "/images/best2.jpg", title: "RIBEYE STEAK", price: "$22.00" },

{ img: "/images/best3.jpg", title: "LOBSTER ROLL", price: "$20.00" },

{ img: "/images/best4.jpg", title: "Burger", price: "$8.00" },

{ img: "/images/best5.jpg", title: "SUSHI PLATTER", price: "$25.00" },

],

},

];


export default function Home() {

return (

<div className="min-h-screen bg-[#22222b] font-sans flex justify-center">

<div className="w-full max-w-4xl rounded-xl border-1 border-yellow-500 shadow-lg overflow-hidden bg-[#161614]">

{/* Header */}

<div className="bg-yellow-500 text-center py-2">

<span className="text-base text-[#22222b] font-semibold tracking-wide">

Restaurant and Food Court

</span>

</div>


{/* Banner */}

<div

className="w-full h-32 bg-center bg-cover mt-0"

style={{ backgroundImage: "url('/images/food-banner.jpg')" }}

/>


{/* Title & Button */}

<div className="text-center py-3">

<h3 className="text-xl font-bold mb-2 text-white">Food Lover</h3>

<button className="bg-yellow-500 text-black font-bold py-1 px-6 rounded-lg hover:bg-yellow-400 text-sm">

Our Menu

</button>

</div>


{/* Menu Items */}

<div className="grid grid-cols-2 gap-x-1 pb-6">

{menu.map((sec, index) => (

<div

key={sec.section}

className={`relative ${index === 0 ? "-ml-1" : "ml--8 "}`}

>

{/* Vertical divider line on the right side of the first column */}

{index === 0 && (

<div className="absolute right-[-5px] top-0 bottom-0 w-px bg-yellow-500" />

)}


<h4 className="text-sm font-bold text-yellow-500 mb-3 ml-5">

{sec.section}

</h4>

<div className="space-y-3">

{sec.items.map((item, idx) => (

<div key={idx} className="flex items-center px-2">

<div className="w-12 h-12 mr-3 rounded-full overflow-hidden border border-yellow-500">

<Image

src={item.img}

alt={item.title}

width={48}

height={48}

className="object-cover w-full h-full"

/>

</div>

<div className="flex-1">

<div className="font-bold text-yellow-500 text-xs sm:text-sm break-words whitespace-normal">

{item.title}

</div>

<div className="font-bold text-yellow-500 text-xs sm:text-sm">

{item.price}

</div>

</div>

</div>

))}

</div>

</div>

))}

</div>


{/* Footer with ORDER NOW button */}

<div className="bg-[#161614] border-t border-gray-700 py-4 px-6 text-center">

<button 

className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold py-2 px-8 rounded-lg text-sm transition-colors duration-200 shadow-md"

style={{ backgroundColor: '#FFA726' }}

>

ORDER NOW

</button>
</div>

</div>

</div>

);

}

