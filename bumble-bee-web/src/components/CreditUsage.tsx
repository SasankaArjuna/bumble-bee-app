import React, {useState} from "react";
import {Divider, Typography} from "@mui/material";
import Chart from 'react-apexcharts'

const CreditUsage = () => {
    const options = {
        chart: {
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ["Credits"],
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        fill: {
            opacity: 1
        },
        colors:['#f12615', '#28cc69']
    }

    const series = [{
        name: 'Used Credits',
        data: [9000]
        },
        {
            name: 'Available Credits',
            data: [6000]
        }]

    return (
        <React.Fragment>
            <Typography
                variant="h6"
                gutterBottom
                color="grey"
            >
                Credit Usage
            </Typography>
            <Divider/>

            <Chart options={options} series={series} type="bar" height={130}/>
        </React.Fragment>
    )
}

export default CreditUsage