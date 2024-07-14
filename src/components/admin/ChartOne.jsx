import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne = () => {
  const [filter, setFilter] = useState('Month');
  const [state, setState] = useState({
    series: [
      {
        name: 'Income',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: 'Expenses',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const options = {
    legend: {
      show: false,
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Arial, sans-serif',
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: 'smooth',
    },
    grid: {
      borderColor: '#e0e6ed',
      padding: {
        left: 0,
        right: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#3C50E0', '#80CAEE'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: 'circle',
    },
    xaxis: {
      type: 'category',
      categories: [
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        offsetX: -12,
        style: {
          fontSize: '12px',
        },
      },
      title: {
        style: {
          fontSize: '14px',
        },
      },
      min: 0,
      max: 100,
    },
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    switch (newFilter) {
      case 'Month':
        setState({
          series: [
            {
              name: 'Income',
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
            {
              name: 'Expenses',
              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
          ],
        });
        break;
      case 'Year':
        setState({
          series: [
            {
              name: 'Income',
              data: [320, 450, 400, 420, 370, 450, 480],
            },
            {
              name: 'Expenses',
              data: [280, 350, 300, 330, 390, 410, 370],
            },
          ],
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-7.5 xl:col-span-8">
      <h2 className="text-lg font-semibold text-center mb-2">Income vs Expenses</h2>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
            <div>
              <p className="font-semibold text-primary">Total Income</p>
              <p className="text-xs text-gray-500">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
            <div>
              <p className="font-semibold text-secondary">Total Expenses</p>
              <p className="text-xs text-gray-500">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-white p-1.5 shadow-card dark:bg-boxdark dark:text-white dark:shadow-strokedark">
            <select
              className="rounded py-1 px-3 text-xs font-medium bg-white text-black dark:bg-boxdark dark:text-white"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="-ml-5">
        <ReactApexChart options={options} series={state.series} type="area" height={350} />
      </div>
    </div>
  );
};

export default ChartOne;
