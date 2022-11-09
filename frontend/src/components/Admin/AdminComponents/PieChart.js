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




    // var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]



    var q = ['Ayurveda', 'Clinical', 'Covid essentials', 'Health devices', 'Home Care', 'Nutrients', 'Personal Care'];
    var test = cat


    console.log((test))
    localStorage.setItem('cat', [...test])

    var b = localStorage.getItem('cat')
    // console.log('b', b)
    var arr = b.split(',')
    console.log('barr', arr)

    const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    var occurence = [...map.values()]

    console.info([...map.values()])


    const data = {
        labels: ['Ayurveda', 'Clinical', 'Covid essentials', 'Health devices', 'Home Care', 'Nutrients', 'Personal Care'],

        datasets: [
            {
                label: '# of Votes',
                data: occurence,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
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

        getProductData();

    }, []);
    return (
        <>
            <Pie data={data} />;
        </>
    );
}

export default PieChart;
