export default function Card(props){
    return(
        <div className="card">
            <img src= {props.image} alt= {props.place} />
            <div className="content">
                <h2>{props.place}</h2>
                <h4>{props.country}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}


//Destructuring method
// export default function Card(image, place, country, description){
//     return(
//         <div className="card">
//             <img src= {image} alt= {place} />
//             <div className="content">
//                 <h2>{place}</h2>
//                 <h4>{country}</h4>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }