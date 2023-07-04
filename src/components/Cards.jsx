import Json from '../dados.json'
import { Chart as ChartJS, CategoryScale, Tooltip, Legend, LinearScale,BarElement,Title,ArcElement } from "chart.js";
import { Bar, Doughnut } from 'react-chartjs-2';
import { useForm } from "react-hook-form";
import {useState,useEffect } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,

);


export const Cards = () => {
  const [chartData, setCharData] = useState({})
  const dados =  Json.data

  
  const labels = ['Mulheres','Crianças e Adolescentes','Pessoas Idosas','Pessoas com deficiência','Pessoas em restrição de Liberdade','População LGBTQIA+','Pessoas em Situação de Rua']



 const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Mapeamento de Violações dos Direitos Humanos por Grupo Vulnerável',
    },
  },
};

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (data={uf:'SP'}) => { 
    const newChartData = {
      labels,
      datasets: [
        {
          label: 'Violações', 
          data: labels.map(label => {
            const ufData = dados.find(dado => dado.uf == data.uf)
    
            const ufGroupsData = ufData.groups.find(dado => dado.title === label )
            
            return ufGroupsData.cases
          }),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Denúncias', 
          data:labels.map(label => {
            const ufData = dados.find(dado => dado.uf == data.uf)
    
            const ufGroupsData = ufData.groups.find(dado => dado.title === label )
            
            return ufGroupsData.complaints
          }),
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      ],
  } 
    setCharData(newChartData)
  }
  useEffect(()=>{
    onSubmit()
    
  },[])
  
  const doughnuts = Json.type.map((data)=> data)

  const doughnutLabels = doughnuts.map(doughnuts => doughnuts.name)

    const doughnutData = {
      labels:doughnutLabels,
      datasets: [
        {
          label: '# of Votes',
          data: doughnuts.map(doughnutLabel => doughnutLabel.value),
          backgroundColor: [
            '#9b5de5',
            '#f15bb5',
            '#fee440',
            '#00bbf9',
            '#00f5d4',
            '#ec382c',
            '#'
          ],
         
        },
      ],
    };


  return (
    <div>
      <div className='flex-col items-center px-12 text-center mt-16 justify-center mb-10'>
        <h1 className="font-bold mb-1 text-2xl text-gray-900">Promovendo os Direitos Humanos</h1>
        <h2 className='text-lg mb-5 font-semibold text-gray-700'>Mapeamento de Casos e Denúncias dos Direitos Humanos</h2>
        <p className='text-gray-500 text-justify px-12'>
          Segundo a  Declaração Universal dos Direitos Humanos, adotada e proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro 1948, todo ser humano nasce livre e tem direito à vida, à liberdade e à segurança pessoal.
          Os direitos humanos são universais e inalienáveis, e são a base de uma sociedade justa e inclusiva. Reconhecemos que certos grupos enfrentam desafios e barreiras adicionais, que os colocam em uma posição de vulnerabilidade. Portanto, <span className='font-bold'>nossa missão</span> é dar voz e apoio a essas comunidades, visando a superação das desigualdades e a garantia de oportunidades iguais para todos.
        </p>
        <p className='text-gray-500 text-justify px-12 mt-4 mb-6'>
        Baseado nos dados fornecidos pelo  <span className='font-bold'> Ministério dos Direitos Humanos e da Cidadania</span> referentes ao primeiro semestre de 2023, criamos um mapeamento para que possamos enxergar, a partir de uma análise quantitativa, o reflexo das violações de direitos humanos enfrentadas pelos grupos vulneráveis na Região Sudeste.
        </p>
        <div className='flex justify-end px-12'>
          <form onSubmit={handleSubmit(onSubmit)} className='mb-6 flex justify-between gap-x-6'>
            <select {...register("uf")} className='rounded-md border-stone-700 border-b-4 bg-white px-3 py-2 text-center text-stone-900 flex items-center justify-center cursor-pointe'>
              <option value="SP" >SP</option>
              <option value="RJ" >RJ</option>
              <option value="MG">MG</option>
              <option value="ES">ES</option>
            </select>
            <input type="submit" value='Pesquisar' className='rounded-full bg-pink-400 px-5 py-2 cursor-pointer text-white font-bold'/>
          </form>
        </div>
        <div className='w-[100%] items-center flex justify-center mb-5 shadow-xl'>
          <div className='w-2/4 h-96 text-sm'>
            {Object.keys(chartData).length && (
            <Bar
              className='text-sm'
              options={options}
              data={chartData}
            />
            ) 
          }
          </div> 
        </div>
        <span className='text-xs font-bold'>Fonte: <a href='https://www.gov.br/mdh/pt-br/ondh/painel-de-dados/primeiro-semestre-de-2023' target='_blank' className='font-semibold'>Ministério dos Direitos Humanos e da Cidadania</a></span>
        <p className='text-gray-500 text-justify px-12 mt-10'>
        Ao analisar esses números, fica evidente a urgência de ações efetivas para combater essas violações de direitos. É fundamental que as autoridades governamentais, organizações não governamentais e a sociedade como um todo se unam para promover a conscientização, a educação e o fortalecimento dos grupos vulneráveis. Além disso, é necessário que políticas públicas mais robustas sejam implementadas para garantir a proteção e a inclusão dessas comunidades.
        </p>
        <p className='text-gray-500 text-justify px-12 mt-4 mb-6'>
        Este mapeamento de casos e denúncias serve como um ponto de partida para ações concretas. Ao trazer à tona essas estatísticas, esperamos incentivar a sociedade a refletir sobre a importância de se construir uma cultura de respeito, igualdade e justiça para todos. A denúncia e o registro desses casos são passos cruciais para a documentação das violações e para a busca por soluções efetivas.
        </p>
        <div className='flex flex-row gap-12 items-center justify-between px-12 py-7 mt-5 bg-zinc-100 rounded-3xl'>
          <div className="text-content">
            <h2 className='text-start font-bold'>Análise da Espécie de Violação</h2>
            <p className='text-gray-500 text-justify mt-10'>
          Ao analisar esses números, fica evidente a urgência de ações efetivas para combater essas violações de direitos. É fundamental que as autoridades governamentais, organizações não governamentais e a sociedade como um todo se unam para promover a conscientização, a educação e o fortalecimento dos grupos vulneráveis. Além disso, é necessário que políticas públicas mais robustas sejam implementadas para garantir a proteção e a inclusão dessas comunidades.
          </p>
          </div>
          <div className="doghnut-content">
             <Doughnut data={doughnutData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

