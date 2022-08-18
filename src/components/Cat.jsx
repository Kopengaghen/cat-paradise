import React from 'react';

const Cat = (props) => {
    return (
        <div>
            <div key={props.id} className="cat-cards">
                <div className="cat-card">
                    <img src={props.image.url} alt={props.image.id}/>
                </div>
                <div className="cat-info">
                    <div>{props.name}</div>
                    <div><b>{props.origin}</b></div>
                    <div><span>Temperament:</span> {props.temperament}</div>
                    <div><span>Life Span:</span> {props.life_span}</div>
                    <div><span>Weight:</span> {props.weight.metric}</div>
                    <div><span>Description</span> <br/>{props.description}</div>
                </div>
            </div>

        </div>
    );
};

export default Cat;
