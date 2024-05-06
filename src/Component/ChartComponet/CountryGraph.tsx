import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import Loader from "../Loading/Loader";
import { Icon } from "leaflet";
const baseUrl = "https://disease.sh/v3/covid-19/countries";

const customICon = new Icon({
  iconUrl: require("./marker-icon.png"),
});

const CountryGraph: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(baseUrl).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="text-center my-3 capitalize font-semibold text-[1.2rem] text-orange-500">
        Covid-19 worldwide Data
      </h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((country: any) => (
          <Marker
            key={country.country}
            icon={customICon}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2 className="text-orange-400 font-semibold">
                  Country: {country.country}
                </h2>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default CountryGraph;
