import React from "react";
import Grid from '@mui/material/Grid';
import Puranpoli from './Puranpoli.jpg';
import Maharashtra from './Maharashtra_Districts.jpg'
import { Link } from "react-router-dom";
//import SendIcon from '@mui/icons-material/Send';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';


function FoodInfo() {
    return (

        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={Puranpoli} style={{
                        width: "390px", height: "610px"
                    }} alt="PuranPoli" />
                </Grid>
                <Grid item xs={8}>
                    <h1 className="App" style={{ color: '#cb314c', fontFamily: 'math' }}>The Food of Maharashtra</h1>
                    <br />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Let us proceed by elaborating further upon the regional diversities of Maharashtra.
                        The territory of Maharashtra can be divided into the following regional formations:
                        Konkan, Desh, Khandesh, Marathwada and Vidarbha. The climatic and cultural peculiarities
                        of every region are reflected in the ingredients and tenor of its food. The Konkan region
                        is the coastal belt of Maharashtra and comprises primarily of the districts and cities of
                        Raigad, Sindhudurg, Ratnagiri, Mumbai and Thane. As is true for most coastal areas, rice and
                        fish are the staples of this region. A specialty of this cuisine is saltwater fishes dipped
                        in a variety of sour-sweet gravies that pair beautifully with steamed rice. Konkani cuisine
                        itself is quite diverse and includes several-sub cuisines such as Malvani and Saraswat Brahmin.
                        Moving inwards from Konkan, one reaches the region known as Desh that includes the main districts
                        of Pune, Satara and Kolhapur. This region historically formed the centre of the Maratha empire.
                        The spicy Kolhapuri cuisine of this region offers a peek into the eating habits of the royals.</p>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <img src={Maharashtra} alt='Maharashtra' style={{ height: "257px", width: "400px" }} />
                        </Grid>
                        <Grid item xs={4} style={{ paddingTop: '135px' }}>
                            <Button variant="contained" endIcon={<NavigateNextIcon />} className="App" >
                                <Link to='/signin' style={{color:'white'}}>Checkout</Link>
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    );
}

export default FoodInfo;

{/* <Grid container spacing={2}>
<Grid item xs={4}>
<img src={Puranpoli} alt="PuranPoli"/>
</Grid>
<Grid item xs={8}>
<p>The expression “Indian food” always invokes a riot of flavours arising out of the 
   incredible diversity of the country’s landscape, climate and cultures. 
   The culinary culture of Maharashtra can be best explained from a similar perspective.
    The landscape of this state presents a patchwork of food habits ranging from the briny
     flavours of the coastal areas to the rustic flavours of the inner mainland. Apart from
      certain signature dishes that have found a place in restaurant menus throughout the country
       (such as Vada Pav and Pav Bhaji), traditional Maharashtrian food is relatively unknown beyond
        the confines of the state. Maharashtrian cuisine is one of the most wholesome and underrated
         cuisines of the Indian subcontinent.</p>
</Grid>
</Grid> */}






{/* <p>  The expression “Indian food” always invokes a riot of flavours arising out of the 
   incredible diversity of the country’s landscape, climate and cultures. 
   The culinary culture of Maharashtra can be best explained from a similar perspective.
    The landscape of this state presents a patchwork of food habits ranging from the briny
     flavours of the coastal areas to the rustic flavours of the inner mainland. Apart from
      certain signature dishes that have found a place in restaurant menus throughout the country
       (such as Vada Pav and Pav Bhaji), traditional Maharashtrian food is relatively unknown beyond
        the confines of the state. Maharashtrian cuisine is one of the most wholesome and underrated
         cuisines of the Indian subcontinent.</p> */}