import React from 'react'
import { graphql } from "gatsby"
import { Link } from 'gatsby'

import Layout from '../components/layout'

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
                {admin.node.first_name}
            </li>
        );

        return (
            <ul>{listItems}</ul>
        )

    }

}

export default ({ data }) => {

    return (
        <Layout>
            <h1>Web App Administrators</h1>
            <AdminList data = {data.allMongodbScriptientDbAdminUsers} />
            <Link to="/">Home</Link>
        </Layout>
    )
}

export const query = graphql`
query {
    allMongodbScriptientDbAdminUsers {
            edges {
                node {
                    mongodb_id
                    first_name
                    last_name
                    email
                }
            }
    }
}
`