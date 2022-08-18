import React, {useEffect, useState} from "react";
import axios from "axios";
import Cat from "./Cat";

const Cats = () => {
    const [cats, setCats] = useState([])

    const showCats = () => {
        axios
            .get('https://api.thecatapi.com/v1/breeds')
            .then(response => {
                setCats(response.data)
            })
    }

    useEffect(() => {
        showCats()
    }, [])

    return (
        <div>
            {cats.map(({id, name, image, origin, temperament, life_span, weight, description}) => {
                if (image)
                    return (
                        <Cat
                            key={id}
                            image={image}
                            name={name}
                            origin={origin}
                            temperament={temperament}
                            life_span={life_span}
                            weight={weight}
                            description={description}
                        />
                    )

            })}
        </div>
    );
};

export default Cats;
