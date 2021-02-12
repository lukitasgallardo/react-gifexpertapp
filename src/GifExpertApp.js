import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState( ['Dragon Ball']);

    /*const handdleAdd = () =>{
        //setCategories([...categories, 'HunterXHunter']);
        setCategories(cats => [...cats, 'HUnterXHunter']); // el argumento "cats" representa el valor del estado anterior 
    }*/

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => {
                        //return <li key={category}> {category} </li>
                        return <GifGrid
                                    key={category} 
                                    category={category} 
                                />
                    })
                }
            </ol>

        </>
    );
}

export default GifExpertApp;