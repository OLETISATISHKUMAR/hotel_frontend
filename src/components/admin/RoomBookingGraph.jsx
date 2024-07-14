import ReactApexChart from 'react-apexcharts';

const RoomBookingGraph = () => {
  const state = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
        height: 350,
      },
      labels: ['Single', 'Double', 'Deluxe'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
      title: {
        text: 'Room Booking Distribution',
        align: 'center',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333'
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(1) + "%";
        },
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="rounded-md border w-[550px] border-gray-200 bg-white px-6 py-5">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={450}
      />
    </div>
  );
};



export default RoomBookingGraph;
