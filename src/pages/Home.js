import React, {Fragment} from "react"
import { HeaderContent, Header, Icon, GridRow, GridColumn, Grid } from 'semantic-ui-react'
const Home=()=>{
    return <Fragment>
        <div className='main-body'>
            <div>
                <Header as='h1' textAlign='center' style={{
                    color: '#A9A9A9',
                    fontFamily: 'Ubuntu',
                    fontWeight: '500',
                    fontSize: '42px',
                    position: 'relative',
                    zIndex: '100'
                    }}>
                    <HeaderContent>Md Habibur Rahman</HeaderContent>
                </Header>
                <div className='identity'>
                <p>#<span style={{color: '#e06c75'}}>Programmer</span> #<span style={{color: '#1AACAC'}}>Listener</span> #<span style={{color: '#e4bb68'}}>Traveller</span> #<span style={{color: '#789461'}}>Photographer</span></p>
                </div>
                <div className="icon-container">
                <a href="https://www.facebook.com/iammhhabib/"><Icon name='facebook square' size='big'/></a>
                <a href="https://www.linkedin.com/in/mh-habib/"><Icon name='linkedin square' size='big'/></a>
                <a href="https://github.com/mhhabib/"><Icon name='github square' size='big'/></a>
                <a href="https://stackoverflow.com/users/5929910/mhhabib"><Icon name='stack overflow' size='big'/></a>
                <a href="https://500px.com/p/mhhabib"><Icon name='500px' size='big'/></a>
                </div>
            </div>
            <div className='footer'>
            <Grid columns='two' divided>
                <GridRow>
                <GridColumn>
                <p>Page size - 99KB</p>
                </GridColumn>
                <GridColumn>
                <p style={{color: '#505355'}}>Click anywhere 5 times within a second to learn more about me</p>
                </GridColumn>
                </GridRow>
                </Grid>        
            </div>
        </div>
    </Fragment>
}
export default Home;