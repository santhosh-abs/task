import React from "react";
import { Grid } from "@mui/material";
import TableComponent from "../components/productdetails/tableComponent";
import CustomCard from "../components/productdetails/card";
import { productCard } from "../components/productdetails/variables/productpageDetails";
import './products.css'
import { sidebar } from "../dashboard/dasboard";

const ProductPage = () => {

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: '#ffffff' }}>
                    {sidebar.map((side, index) => (
                        <div key={index} style={{ padding: '24px' }}>
                            <img src={side} alt="sidebar" />
                        </div>
                    ))}
                </div>
                <div style={{ flexGrow: '1'}}>
                    <h1 className="h1">Products</h1>
                    <div className="card-section">
                        <Grid container sx={{ padding: '25px 20px', justifyContent: 'space-between' }}>
                            {productCard.map((body, index) => (
                                <Grid item key={index}>
                                    <CustomCard icon={body.icon} text={body.value} para={body.title} data={body.percent} arrow={body.arrow} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div style={{ paddingBottom: '40px' }}>
                        <TableComponent title='All Products' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;