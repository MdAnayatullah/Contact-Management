import React, { Suspense } from "react";
import Loader from "../Component/Loading/Loader";

const LineGraph = React.lazy(() => import("../Component/ChartComponet/LineGraph"));
const CountryGraph = React.lazy(() => import("../Component/ChartComponet/CountryGraph"));

const ChartAndMap = () => {
  return (
    <>
      <Suspense fallback={ <Loader />}>
        <LineGraph />
      </Suspense>

      <br />

      <Suspense fallback={ <Loader />}>
        <CountryGraph />
      </Suspense>
    </>
  );
};

export default ChartAndMap;
