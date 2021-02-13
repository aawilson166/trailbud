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
            <h2>Create Trail</h2>
            <form onSubmit={this.createTrail}>
                <input onChange={this.changeNewTrailName} type="text" placeholder="name" /><br/>
                <input onChange={this.changeNewTrailLocation} type="text" placeholder="location" /><br/>
                <input onChange={this.changeNewTrailDescription} type="text" placeholder="description" /><br/>
                <input onChange={this.changeNewTrailLength} type="text" placeholder="length" /><br/>
                <input onChange={this.changeNewTrailImage} type="text" placeholder="image" /><br/>
                <input className="btn btn-primary" type="submit" value="Create Trail" />
            </form>
            <h2>List of trails</h2>
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
                                            <button className="update" className="btn btn-danger"value={trail.id} onClick={this.deleteTrail}>DELETE</button>
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
    }
}
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)