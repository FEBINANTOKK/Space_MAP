import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

function Details() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchData(`posts/${id}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading details.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 mb-6">{data.body}</p>
      <p className="text-sm text-gray-500">Post ID: {data.id}</p>
    </div>
  );
}

export default Details;
