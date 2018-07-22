import React, { Component } from 'react';
import './programs.css';

const programsUrl = "http://localhost:8888/wp-json/wp/v2/programas";

class ProgramList extends Component {
    constructor() {
        super();
        this.state = {
            programs: []
        };
    }

    componentDidMount = () => {
        fetch(programsUrl).then( (data) => {
            return data.json();
        }).then( (programData) => {
            this.setState({ programs : programData });
        })
    };

    render = () => {
        let programs = this.state.programs.map((program, id) => {
            return (
              <div key={program.id} className='program'>
                <h2>{program.title.rendered}</h2>
                <img src={program.better_featured_image.media_details.sizes.medium_large.source_url} alt={program.better_featured_image.alt_text} />
                <p>{program.acf.description}</p>
                <p>{program.acf.tracklist}</p>
                <p>created by: {program.acf.author}</p>
              </div>
            )
        })

        return (
            <div className="Programs">
              <h1>Programas</h1>
              <div className='container'>
                {programs}
              </div>
            </div>
        );
    }
}

export default ProgramList