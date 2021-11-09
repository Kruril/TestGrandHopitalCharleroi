import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {Title} from "../utils/Title";


export function GraphView(props) {
    let datasets = []
    for (const subCategory in props.elements.values) {
        datasets.push(
            {
                label: Title[subCategory],
                data: props.elements.values[subCategory],
                backgroundColor: [
                    'rgba(255,0,0,0.6)',
                    'rgba(246,146,3,0.6)',
                    'rgba(29,41,176,0.6)',
                    'rgba(27,197,20,0.6)',
                ],
                borderWidth: 1,
            }
        )
    }
    const data = {
        labels: props.names,
        datasets: datasets
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: props.elements.title,
                font: {
                    size: 24
                }
            },
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text:"Patient(s)",
                    align: "end"
                }
            },
            y: {
                title: {
                    display: true,
                    text: props.unit,
                    align: "end",
                }
            }
        }
    }


    return (
        <div>
            <Bar data={data} options={options} type={'bar'}/>
        </div>
    )
}