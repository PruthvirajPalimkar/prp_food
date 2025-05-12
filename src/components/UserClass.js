import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
            }
        }
        // console.log(props);
        // console.log(this.props.name+"constructor ")
        // this.state={
        //     // count: 0,
        //     // count2: 2,
        // };
    }

    async componentDidMount(){
        // console.log(this.props.name+"Component Mount")
        const data = await fetch("https://api.github.com/users/pruthviraj");
        const json = await data.json();

        // console.log(json);
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        // console.log("Component Did Update");
    }

    componentWillUnmount(){
        // console.log("Component will Unmount");
    }

    render() {
        // const {name, location} = this.props;
        // const {count} = this.state;
        const {login, id, avatar_url } = this.state.userInfo;
        // console.log(this.props.name+"Child Render")
        return (
            <div className="user-card">
                <img src={avatar_url}/>
              <h2>Name: {login}</h2>
              <h3>Location: {id}</h3>
              <h4>Contact: @pruthviraj</h4>
                <h2>Class based component</h2>
            </div>
        );
    }
} 

export default UserClass;