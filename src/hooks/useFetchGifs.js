import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loadings: true,
    });

    useEffect(() => {

        getGifs( category )
                .then( img => {
                    
                        setState({
                            data: img,
                            loadings: false
                        });

                });
    }, [category]);


    return state;

}
