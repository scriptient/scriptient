import React from 'react'
import { navigate } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Button variant="contained" color="primary" onClick={() => {navigate('/admins/')}}>
      Admins
    </Button>

    
  </Layout>
)

export default IndexPage
