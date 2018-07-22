import React, { Component } from 'react';

const residentsURL = "http://localhost:8888/wp-json/wp/v2/residentes";

class ResidentList extends Component {
    constructor() {
        super();
        this.state = {
            residents: []
        };
    }

    componentDidMount = () => {
        fetch(residentsURL).then( (data) => {
            return data.json();
        }).then( (residentData) => {
            this.setState({ residents : residentData });
        })
    };

    render = () => {
        let residents = this.state.residents.map((resident, id) => {
            return (
                <div key={resident.id}>
                <img src={resident.better_featured_image.media_details.sizes.medium_large.source_url} alt={resident.better_featured_image.alt_text} />
                <h2>{resident.title.rendered}</h2>
                <p>{resident.acf.description}</p>
                <p>created: {resident.acf.fecha_creacion}</p>
                <hr></hr>
                </div>
            )
        })

        return (
            <div className="residents">
              <h1>Residentes</h1>
              {residents}
            </div>
        );
    }
}

export default ResidentList