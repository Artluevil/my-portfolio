import React from 'react';
import { useMediaQuery } from 'react-responsive'


const MyWorkCard = (props) => {

    const { data, isEnglish } = props 

    const isMobile = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    return (
        <>
            <div>
                {isMobile ? <div className="mywork-wrapper">
                    <div className="container-mywork">
                        <div className="mywork-container-text">
                            <h2>{data.name}</h2>
                            <p>{data.dsc}</p>
                        </div>
                        <div className="mywork-container-tags">
                            {data.tags.map(tag => (
                                <div className="tag">
                                    <p>{tag}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mywork-container-button">
                            {isEnglish ? <a href={data.siteLink} target="_blank" rel="noreferrer">Visit Site</a> : <a href={data.siteLink} target="_blank" rel="noreferrer">Odwiedź stronę</a>}
                        </div>
                    </div>
                    <div className="mywork-container-image">
                        <img src={data.img} alt="project overview"/>
                    </div>
                </div> :

                <div className="mobile-mywork-wrapper">
                    <div className="mobile-mywork-container-image">
                        <img src={data.img} alt="project overview"/>
                        <div className="mobile-image-wrapper">
                        <div className="mobile-container-mywork">
                        <div className="mobile-mywork-container-text">
                            <h2>{data.name}</h2>
                            <p>{data.dsc}</p>
                        </div>
                        <div className="mobile-mywork-container-tags">
                            {data.tags.map(tag => (
                                    <div className="mobile-tag">
                                        <p>{tag}</p>
                                    </div>
                                ))}
                        </div>
                        <div className="mobile-mywork-container-button">
                            {isEnglish ? <a href={data.siteLink} target="_blank" rel="noreferrer">Visit Site</a> : <a href={data.siteLink} target="_blank" rel="noreferrer">Odwiedź stronę</a>}
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default MyWorkCard