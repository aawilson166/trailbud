class App extends React.Component {
    state = {
        name: '',
        location: '',
        description: '',
        length: '',
        image: '',
        trails:[],
    }

    createTrail = (event) => {
        event.preventDefault();
        event.target.reset()
        axios.post(
            '/api/trails',
            {
                name:this.state.newTrailName,
                location:this.state.newTrailLocation,
                description:this.state.newTrailDescription,
                length:this.state.newTrailLength,
                image:this.state.newTrailImage
            }
        )
        .then(
            (response) => {
                this.setState({
                    trails:response.data
                })
            }
        )
    }

    changeNewTrailImage = (event) => {
        this.setState({
            newTrailImage:event.target.value
        });
    }

    changeNewTrailLength = (event) => {
        this.setState({
            newTrailLength:event.target.value
        });
    }

    changeNewTrailDescription = (event) => {
        this.setState({
            newTrailDescription:event.target.value
        });
    }

    changeNewTrailLocation = (event) => {
        this.setState({
            newTrailLocation:event.target.value
        });
    }

    changeNewTrailName = (event) => {
        this.setState({
            newTrailName:event.target.value
        });
    }

    deleteTrail = (event) => {
        axios.delete('/api/trails/' + event.target.value).then(
            (response) => {
                this.setState({
                    trails:response.data
                })
            }
        )

    }

    updateTrail = (event) => {
        event.preventDefault();
        event.target.reset();
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/trails/' + id,
            {
                name:this.state.updateTrailName,
                location:this.state.updateTrailLocation,
                description:this.state.updateTrailDescription,
                length:this.state.updateTrailLength,
                image:this.state.updateTrailImage,
            }
        ).then(
            (response) => {
                this.setState({
                    trails:response.data,
                    name:'',
                    location:'',
                    description: '',
                    length:'',
                    image: '',
                })
            }
        )
    }

    changeUpdateTrailName = (event) => {
        this.setState(
            {
                updateTrailName:event.target.value
            }
        )
    }

    changeUpdateTrailLocation = (event) => {
        this.setState(
            {
                updateTrailLocation:event.target.value
            }
        )
    }

    changeUpdateTrailDescription = (event) => {
        this.setState(
            {
                updateTrailDescription:event.target.value
            }
        )
    }

    changeUpdateTrailLength = (event) => {
        this.setState(
            {
                updateTrailLength:event.target.value
            }
        )
    }

    changeUpdateTrailImage = (event) => {
        this.setState(
            {
                updateTrailImage:event.target.value
            }
        )
    }

        componentDidMount = () => {
        axios.get('/api/trails').then(
            (response) => {
                this.setState({
                    trails:response.data
                })
            }
        )
    }

    //==========================================================
    //new functions why don't these work?
    //==========================================================
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     axios.post('/api/trails/', this.state).then((response) => {
    //         this.getTrails()
    //     })
    // }

    // deleteTrail = (event) => {
    //     axios.delete('/api/trails/' + event.target.value).then(response => {
    //         this.getTrails()
    //     })
    // }

    // updateTrail = (event) => {
    //     event.preventDefault()
    //     event.target.reset()
    //     const id = event.target.id
    //     axios.put('/api/trails/' + id, this.state).then(response => {
    //         this.getTrails()
    //     })
    // }

    // getTrails = () => {
    //     axios
    //         .get('/api/trails/')
    //         .then(
    //         (response) =>
    //             this.setState({trails: response.data, name: '', location: '', description: '', length: '', image: ''}),
    //         (err) => console.log(err)            
    //     )
    //      .catch((error) => console.error(error))
    // }
 
    // componentDidMount = () => {
    //     this.getTrails()
    // }
    //==========================================================
    //==========================================================

    render = () => {
        return <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trails</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Add a new trail</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="home">
                        <img class="home-img" src="https://www.motorbiscuit.com/wp-content/uploads/2020/01/2020-Lexus-460-GX-Overland-luxury-camping-concept-Lexus-03-1024x576.jpg" alt="img"></img>
                        <p className="home-info">
                            Welcome to Trailbud.<br/>
                            Discover new Overlanding trails to explore and upload info about your favorite trails. If adventure is on your bucket list, this is the App for you!
                        </p>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="card mb-3">
                        {
                            this.state.trails.map(
                                (trail) => {
                                    return <div key={trail.id}>
                                        <img src={trail.image} alt="img" className="card-img-top"></img>  
                                        <div className="card-body">
                                            <h5 className="card-title"><b>{trail.name}</b></h5>
                                            <p className="card-text"><b>Description:</b> {trail.description}</p>
                                            <div className="card-text">
                                                <b>Location:</b> {trail.location}, <b>Length:</b> {trail.length}
                                                <details className="updateCard">
                                                    <summary>Edit Trail</summary>
                                                    <form id={trail.id} onSubmit={this.updateTrail}>
                                                        <input className="update" onChange={this.changeUpdateTrailName} type="text" placeholder="name"/><br/>
                                                        <input className="update" onChange={this.changeUpdateTrailLocation} type="text" placeholder="location"/><br/>
                                                        <input className="update" onChange={this.changeUpdateTrailDescription} type="text" placeholder="description"/><br/>
                                                        <input className="update" onChange={this.changeUpdateTrailLength} type="text" placeholder="length"/><br/>
                                                        <input className="update" onChange={this.changeUpdateTrailImage} type="text" placeholder="image"/><br/>
                                                        <input className="update" className="btn btn-primary" type="submit" value="Update Trail"/>
                                                        <button className="update" className="btn btn-danger"value={trail.id} onClick={this.deleteTrail}>Delete</button>
                                                    </form>
                                                </details>
                                            </div>
                                        </div>                                
                                    </div>                            
                                }
                            )
                        }
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="new-trail">
                        <h2>Add your trail</h2>
                        <form  onSubmit={this.createTrail}>
                            <input onChange={this.changeNewTrailName} type="text" placeholder="name" /><br/>
                            <input onChange={this.changeNewTrailLocation} type="text" placeholder="location" /><br/>
                            <input onChange={this.changeNewTrailDescription} type="text" placeholder="description" /><br/>
                            <input onChange={this.changeNewTrailLength} type="text" placeholder="length" /><br/>
                            <input onChange={this.changeNewTrailImage} type="text" placeholder="image" /><br/>
                            <input className="btn btn-primary" type="submit" value="Create Trail" />
                        </form>
                    </div>
                    <img className="new-img" src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFub3JhbWF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img"></img>
                </div>
            </div>
        </div>    
    }
}
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)