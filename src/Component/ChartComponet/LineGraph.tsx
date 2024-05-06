import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
} from "chart.js";
import Loader from "../Loading/Loader";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale
);

let url = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

const LineGraph = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["cases"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  const chartData = {
    labels: data ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: "Confirmed",
        data: data ? Object.values(data.cases) : [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Deaths",
        data: data ? Object.values(data.deaths) : [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
      },
      {
        label: "Recovered",
        data: data ? Object.values(data.recovered) : [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "COVID-19 Cases - Line Chart",
      },
    },
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="text-center my-5 text-3xl">
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-orange-700 p-4 flex justify-center items-center gap-5"
            role="alert"
          >
            <span className="bg-orange-600 p-3 rounded-full text-white">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </span>
            <div>
              <p>Somethign Went Wrong.</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center my-3 font-semibold text-[1.2rem] text-orange-500">
            Covid-19 Confirmed , Deaths , Recovered Data
          </h2>

          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default LineGraph;
