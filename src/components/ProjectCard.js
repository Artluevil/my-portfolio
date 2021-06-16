import React from 'react';

const ProjectCard = (props) => {

    const { data, languageEnglish } = props

    return(
        <div className="project-wrapper">
            <div className="project-info">
                <div className="project-info-text">
                    <h2>{data.name}</h2>
                    <p>{data.dsc}</p>
                </div>
                <div className="project-info-links">
                    {languageEnglish ? <a href={data.siteLink} target="_blank" rel="noreferrer">Website</a> : <a href={data.siteLink} target="_blank" rel="noreferrer">Strona</a>}
                </div>
            </div>
            <div className="project-img">
                <img src={data.img} alt="project overview"/>
            </div>
        </div>
    )
}

export default ProjectCard