import React from "react";
import { Link } from "react-router-dom";
import { useGetSingleQuery } from "../../features/apiSlice";
import QuickCard from "../Card/QuickCard";

function Query({ type, id }) {
  const { data, isLoading } = useGetSingleQuery({ type: type, id: id });
  return (
    <>
      {!isLoading && (
        <Link to={`${type}/details/${data?.id}`}>
          <QuickCard data={data}/>
        </Link>
      )}
    </>
  );
}

export default Query;
