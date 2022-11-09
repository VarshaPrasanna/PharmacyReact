import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)
var oDate = []



const BarChart = () => {
    const [date, setdate] = useState([]);

    const getOrders = async () => {
        try {
            let order = [];
            const data = await axios.get(
                "http://localhost:3000/orders/"
            );
            console.log(data.data);
            data.data.orders.map(c => {
                order.push(c.createdAt.slice(0, 10))
            })
            oDate = order;
            console.log(order)
            setdate(oDate)

        } catch (e) {
            console.log(e);
        }
    };
    var test = oDate


    console.log((test))
    localStorage.setItem('odate', [...test])

    var b = localStorage.getItem('odate')
    console.log('b', b)
    var arr = b.split(',')
    console.log('barr', arr)

    const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    var occurence = [...map.values()]
    var keys = [...map.keys()]
    console.info([...map.keys()])

    console.info([...map.values()])
    const data = {
        labels: keys,
        datasets: [
            {
                label: 'Number of Orders VS Day',
                data: occurence,
                backgroundColor: [
                    'pink',
                    '#17a2b8',
                    '#ffc107',
                    'rgb(87, 185, 96)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (

        <>
            <div className='header'>

                <div className='links'>

                </div>
            </div>
            <Bar data={data} />
        </>
    )
};

export default BarChart;