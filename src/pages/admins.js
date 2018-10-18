import React from 'react'
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import AdminList from '../components/admin-list'
import Layout from '../components/layout'

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