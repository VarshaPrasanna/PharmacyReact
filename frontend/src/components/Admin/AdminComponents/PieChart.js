import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
var categories = [];
const PieChart = () => {
    const [cat, setcat] = useState([]);

    const getProductData = async () => {
        try {
            let category = [];
            const data = await axios.get("http://localhost:3000/products/");
            data.data.products.map(c => {
                category.push(c.categories)
            })
            categories = category;
            // console.log(categories)
            setcat(categories)
            // console.log(cat)
        } catch (e) {
            console.log(e);
        }
    };

    var test = cat


    // console.log((test))
    localStorage.setItem('cat', [...test])

    var b = localStorage.getItem('cat')
    // console.log('b', b)
    var arr = b.split(',')
    // console.log('barr', arr)

    const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    var occurence = [...map.values()]
    var keys = [...map.keys()]
    // console.info([...map.keys()])

    // console.info([...map.values()])


    const data = {
        labels: keys,

        datasets: [
            {
                label: '# of Votes',
                data: occurence,
                backgroundColor: [
                    'rgb(123,104,238)',
                    'rgb(54, 162, 235)',
                    'rgb(255,99,71)',
                    'rgba(0,255,255)',
                    'rgba(255,165,0)',
                    'rgb(255, 99, 132)',

                    'rgba(255,255,0)',
                    'rgb(12, 200, 0)'
                ],
                borderColor: [
                    'rgb(123,104,238)',
                    'rgb(54, 162, 235)',
                    'rgb(255,99,71)',
                    'rgba(0,255,255)',
                    'rgba(255,165,0)',
                    'rgb(255, 99, 132)',

                    'rgba(255,255,0)',
                    'rgb(12, 200, 0)'
                ],
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {

        getProductData();

    }, []);
    return (
        <>
            <Pie data={data} />;
        </>
    );
}

export default PieChart;
