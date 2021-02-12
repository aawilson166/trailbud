class App extends React.Component {
    state = {
        name: '',
        location: '',
        // description: '',
        // length: '',
        // image: '',
        trails:[],
    }

    createTrail = (event) => {
        event.preventDefault();
        axios.post(
            '/api/trails',
            {
                name:this.state.newTrailName,
                location:this.state.newTrailLocation,
            }
        ).then(
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
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/trails/' + id,
            {
                name:this.state.updateTrailName,
                location:this.state.updateTrailLocation,
            }
        ).then(
            (response) => {
                this.setState({
                    trails:response.data,
                    name:'',
                    location:'',
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
    //     //event.target.reset()
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
    //             this.setState({trails: response.data, name: '', location: ''}),
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
                <input type="submit" value="Create Trail" />
            </form>
            <h2>List of trails</h2>
            <div>
                {
                    this.state.trails.map(
                        (trail) => {
                            return <div key={trail.id}>

                                {trail.name}: {trail.location}

                                <button value={trail.id} onClick={this.deleteTrail}>DELETE</button>

                                <form id={trail.id} onSubmit={this.updateTrail}>
                                    <input onChange={this.changeUpdateTrailName} type="text" placeholder="name"/><br/>
                                    <input onChange={this.changeUpdateTrailLocation} type="text" placeholder="location"/><br/>
                                    <input type="submit" value="Update Trail"/>
                                </form>
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