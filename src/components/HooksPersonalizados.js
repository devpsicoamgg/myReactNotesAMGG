import React from "react";
import { useFetch } from "../hooks/useFetch.js";

export default function HooksPersonalizados() {
  let url = "https://rickandmortyapi.com/api/character/?page=1";

  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2> HOOKS PERSONALIZADOS </h2>
      <ol>
        <li>{JSON.stringify(isPending)}</li>
        <li>
          <mark>{JSON.stringify(error)}</mark>
        </li>
        <li>
          <code style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data)}</code>
        </li>
      </ol>
    </>
  );
}
