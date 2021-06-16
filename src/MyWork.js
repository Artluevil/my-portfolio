import React from 'react';
import MyWorkCard from './components/MyWorkCard'
import dataWorkENG from './data/dataWorkENG.json'
import dataWorkPL from './data/dataWorkPL.json'

const MyWork = (props) => {

    const { languageEnglish } = props

    return (
        <>
            <section className="section-mywork">
                <div className="mywork-main-text">
                    {languageEnglish ? <h2>My recent work</h2> : <h2>Moje ostatnie prace</h2>}
                    {languageEnglish ? <p>Some of my projects that I builded to learn web development</p> : <p>Niektóre z moich projektów które stworzyłem, żeby nauczyć się tworzenia stron internetowych</p>}
                </div>
                {languageEnglish ? dataWorkENG.Works.map(data => (
                    <MyWorkCard key={data.id} data={data} isEnglish={true}/>
                )): 
                dataWorkPL.Works.map(data => (
                    <MyWorkCard key={data.id} data={data} isEnglish={false}/>
                ))}
            </section>
        </>
    )
}

export default MyWork