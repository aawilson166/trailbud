class App extends React.Component {
    state = {
        trails:[]
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

    render = () => {
        return <div>
            <h2>Create Trail</h2>
            <form onSubmit={this.createTrail}>
                <input onKeyUp={this.changeNewTrailName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewTrailLocation} type="text" placeholder="location" /><br/>
                <input type="submit" value="Create Trail" />
            </form>
            <h2>List of trails</h2>
            <ul>
                {
                    this.state.trails.map(
                        (trail, index) => {
                            return <li key={index}>

                                {trail.name}: {trail.location}

                                <button value={trail.id} onClick={this.deleteTrail}>DELETE</button>

                                <form id={trail.id} onSubmit={this.updateTrail}>
                                    <input onKeyUp={this.changeUpdateTrailName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdateTrailLocation} type="number" placeholder="location"/><br/>
                                    <input type="submit" value="Update Trail"/>
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }


}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)