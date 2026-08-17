export default function Card(props){
    return(
        <div className="card">
            <img src= {props.image} alt= {props.name} />
            <div className="content">
                <h2>{props.name}</h2>
                <h4>{props.category}</h4>
                <h5>{props.price}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}