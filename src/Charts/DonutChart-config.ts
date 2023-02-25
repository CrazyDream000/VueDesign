export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','#F23423', '#88D899', '#ABDE4B'],
        data: [40, 20, 80, 10,30,60,70]
      }
    ],
  }
  
  export const options = {
    responsive:true,
    maintainAspectRatio: false,
    plugins:{
      legend:{
        labels:{
          font:{
            size:18
          }
        }
      }
    }
  }
  