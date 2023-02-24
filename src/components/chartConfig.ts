export const data = {
  labels: ['                       January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data 1',
      backgroundColor: '#2679f264',
      data: [10, 20, 21, 24, 28, 70, 82],
      fill: true // tried all possible values for this
    },
    {
      label: 'Data 2',
      backgroundColor: '#3d793f64',
      data: [14, 26, 28, 32, 39, 73, 94],
      fill: true // tried all possible values for this
    },
    {
      label: 'Data 3',
      backgroundColor: '#f8797964',
      data: [13, 23, 26, 45, 58, 80, 81],
      fill: true // tried all possible values for this
    },
  ]
}

export const options = {
  responsive: true,
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
