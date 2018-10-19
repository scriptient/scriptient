import React from 'react'
import { graphql, navigate } from "gatsby"
import { Link } from 'gatsby'
import AdminList from '../components/admin-list'
import Layout from '../components/layout'
import { Button } from '@material-ui/core';

export default ({ data }) => {

    return (
        <Layout>
            <h1>Web App Administrators</h1>
            <AdminList data = {data.allMongodbScriptientDbAdminUsers} />

            <Button variant="contained" color="primary" onClick={() => { navigate('/') }}>
                Home
            </Button>
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