import React from 'react';

const SkillCard = (props) => {

    const { data } = props

    return (
        <div className="card-container">
            <div className="card-circle">
                <img src={data.img} alt="logo of skill card"/>
            </div>
            <div className="card-text">
                <h2>{data.name}</h2>
                <p>{data.dsc}</p>
            </div>
        </div>
    )
}

export default SkillCard
