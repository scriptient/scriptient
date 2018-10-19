import React from 'react'

class AdminList extends React.Component {

    constructor(data) {

        super();
        console.log(data)
        this.state = {
            admins: data.data.edges
        }

    }

    render() {
        
        const listItems = this.state.admins.map((admin) =>
            <li key={admin.node.first_name}>     
                {admin.node.first_name} {admin.node.last_name} | {admin.node.email}
            </li>
        );

        return (
            <ul>{listItems}</ul>
        )

    }

}

export default AdminList