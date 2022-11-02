import React from 'react'
import Header from '../components/header/Header';
//import TreeView from '../components/navbar/TreeView';
import Grid from '@mui/material/Grid';
import Content from '../components/centre/Content'
import SideNav from '../components/sidenav/SideNav'
export default function Home() {
    return (
        <div>
            <div>
                <Grid container>
                    <Grid item>
                        <Header />
                    </Grid>
                    <Grid>
                    <SideNav/>
                </Grid> 
                    <Grid>
                       <Content />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
