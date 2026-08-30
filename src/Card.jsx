import React from 'react'

const Card = ({ po }) => {
    return (
        <div>

            <div className="bg-white rounded-xl shadow-lg p-4 m-4 ">
                <img src={po.image} alt={po.Name} className="w-40 h-48 object-cover" />
                <h1 className="text-xl font-bold mt-2">{po.Name}</h1>
                <p className="font-bold text-black"> {po.Rating}</p>
            <p className="text-4xl font-bold text-green-500">{po.Price}</p>
        </div>
        </div >
    )
}
export default Card;