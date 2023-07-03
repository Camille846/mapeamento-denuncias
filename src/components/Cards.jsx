import data from '../dados.json'
import { Chart as ChartJS, CategoryScale, Tooltip, Legend, LinearScale,BarElement,Title } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { useForm } from "react-hook-form";
import {useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const Cards = () => {
   const [chartData, setCharData] = useState({})
  const dados =  data.data
  
const labels = ['mulher','crianca','idosos','deficientes','presos','lgbt','morador_de_rua']
/*const chartData = {
  labels,
  datasets: [
    {
      label: 'Violações', 
      data: labels.map(label => {
        const data = dados.find(data => data === label)
        //console.log(data)
        return data.cases
      }),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Denúncias', 
      data: labels.map(label => {
        const data = dados.find(data => data.uf === label)
        //console.log(data)
        return data.complaints

      }),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  ],
};*/


 const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Mapeamento de Violações dos Direitos Humanos',
    },
  },
};

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => { 
    console.log(data)
    setCharData({
    labels,
    datasets: [
      {
        label: 'Violações', 
        data: labels.map(label => {
          const data2 = dados.find(dado => dado.uf == data.uf)
   
          const data3 = data2.groups.find(dado => dado.title === label )
          return data3.cases
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Denúncias', 
        data:labels.map(label => {
          const data2 = dados.find(dado => dado.uf == data.uf)
   
          const data3 = data2.groups.find(dado => dado.title === label )
          return data3.complaints
        }),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    ],
})
  }

 

  return (
    <div>
      <div className='flex-col items-center px-12 text-center mt-16 justify-center'>
          <h1 className="font-bold">Mapeamento de violações dos Direitos Humanos</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("uf")}>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="MG">MG</option>
              <option value="ES">ES</option>
            </select>
            <input type="submit" value='Pesquisar'/>
          </form>
          <div className='w-[100%] items-center flex justify-center'>
          <div className='w-2/4 h-96'>
            {Object.keys(chartData).length && (
            <Bar
              options={options}
              data={chartData}
            />
            ) 
          }
          </div>
          
          </div>
      </div>
    </div>
  )
}

