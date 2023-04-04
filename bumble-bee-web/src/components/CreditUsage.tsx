import React, {useState} from "react";
import {Divider, Typography} from "@mui/material";
import Chart from 'react-apexcharts'
import {useSelector} from "react-redux";

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

const INITIAL_CHART_DATA = [{
    name: 'Used Credits',
    data: [0]
},
    {
        name: 'Available Credits',
        data: [0]
    }]
const CreditUsage: React.FC<{
    chartData: any
}> = ({chartData}) => {
    // const [series, setSeries] = useState(INITIAL_CHART_DATA)
    // const userCreditInfo = useSelector((state: any) => state.credits.userCreditInfo )

    // React.useEffect(() => {
    //     if(userCreditInfo.data?.creditLimit !==null && userCreditInfo.data?.usedCredits !== null) {
    //         const used = userCreditInfo.data?.usedCredits || 0
    //         const total = userCreditInfo.data?.creditLimit || 0
    //         const available = total - used
    //         const newChartData = [{
    //             name: 'Used Credits',
    //             data: [used]
    //             },
    //             {
    //                 name: 'Available Credits',
    //                 data: [available]
    //             }]
    //         setSeries(newChartData)
    //     }
    //
    // }, [userCreditInfo])

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

            <Chart options={options} series={chartData} type="bar" height={130}/>
        </React.Fragment>
    )
}

export default CreditUsage