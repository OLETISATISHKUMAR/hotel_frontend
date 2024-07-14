import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesRevenueGraph = () => {
  const [filter, setFilter] = useState('Week 1');
  const [weeklySales, setWeeklySales] = useState(0);
  const [monthlySales, setMonthlySales] = useState(0);
  const [yearlySales, setYearlySales] = useState(0);

  const monthlyData = {
    'Week 1': [100, 200, 150, 300, 250, 400, 350],
    'Week 2': [150, 250, 200, 350, 300, 450, 400],
    'Week 3': [200, 300, 250, 400, 350, 500, 450],
    'Week 4': [250, 350, 300, 450, 400, 550, 500],
  };

  useEffect(() => {
    // Calculate weekly sales
    const sales = monthlyData[filter].reduce((acc, curr) => acc + curr, 0);
    setWeeklySales(sales);

    // Calculate monthly sales
    const totalMonthlySales = Object.values(monthlyData).flat().reduce((acc, curr) => acc + curr, 0);
    setMonthlySales(totalMonthlySales);

    // Calculate yearly sales assuming 12 months
    const totalYearlySales = totalMonthlySales * 12;
    setYearlySales(totalYearlySales);
  }, [filter]);

  const state = {
    series: [{ name: 'Revenue', data: monthlyData[filter] }],
    options: {
      chart: { type: 'bar', height: 350 },
      plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ['transparent'] },
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yaxis: { title: { text: 'Sales' } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val) => val } },
    },
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="col-span-12 w-[550px] md:col-span-1 lg:col-span-1">
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sales Revenue</h2>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none"
          >
            {Object.keys(monthlyData).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h3 className="text-md font-semibold">Weekly Sales: {weeklySales}</h3>
          </div>
          <div className="mb-2">
            <h3 className="text-md font-semibold">Monthly Sales: {monthlySales}</h3>
          </div>
          <div>
            <h3 className="text-md font-semibold">Yearly Sales: {yearlySales}</h3>
          </div>
        </div>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default SalesRevenueGraph;
