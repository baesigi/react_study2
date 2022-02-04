import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
function Detail() {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async() =>{
            const json = await(
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                ).json();
            setLoading(false);
            setData(json.data.movie);
        };
    useEffect(()=>{
        getMovie();
    },[]);

    return (
        
        <div>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    <img src={data.medium_cover_image}/>
                    <h1>{data.title}</h1>
                    <p>{data.description_full}</p>
                </div>
                )
                
            
            }
            
        </div>

    )

}
export default Detail;