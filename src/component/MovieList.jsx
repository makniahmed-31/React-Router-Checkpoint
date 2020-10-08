import React from 'react';
import { FiStar } from 'react-icons/fi';

const MovieList = (props) => {
    var movielist=props.movielist;

    var Stars =[];
    var index=0;
    Stars.forEach(el=>index++ + el);
    console.log(Stars);
    
    const rateFn=(x)=>{
        let Star =[];

        for (let i = 0; i < x; i++) {
            
            Star.push(<FiStar className='fi' color='red' fill='yellow'/>)
        }
        return Star;

    };
    const rateClick=(x)=>{
        let Star =[];

        for (let i = 0; i < x; i++) {
            
            Star.push(< FiStar className='Fi' key={i} onClick={fillStrOn} />)
        }
        Stars.push(Star);
        return Star;
    };
    const fillStrOn=(e)=>{
        e.target.style.fill='red';
        console.log(e)
    }
    return ( 

        <div className="container-movielist">
            {
                movielist.filter(el=>el.title.toUpperCase().includes(props.Filtermovie.toUpperCase())).map((el,index)=>
                <div className="list" key={index} >
                    
                    <p>{rateClick(10)}</p>
                    <img src={el.posterUrl} alt="poster" className="poster"/>
                    <h1 className="title">{el.title}</h1>
                    <p className="infos">{el.description}</p>
                    <p>{el.rate}{rateFn(el.rate)}</p>
                </div>
                    )
                    
            }

            
        </div>
     );
}
 
export default MovieList;