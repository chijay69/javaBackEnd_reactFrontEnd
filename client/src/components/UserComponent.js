import React from "react";
import getUsers from "./services/getUsers";

class UserComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        const users = getUsers();
        console.log(users)
        users.then((response) => {
            this.setState({ users: response.data })
        });

    }

    render(){
        return(
            <div>
                <h1 className="text-center">React API Consumer</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent