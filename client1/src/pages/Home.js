import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getData, deleteData } from "../api/dataSource";
import { useLanguages } from "../App";



export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useSearchParams();
  const page = search.get("page");

  const { state, setState } = useLanguages();

  const getAllData = useCallback(async () => {
    const result = await getData(page ? page : "1");
    setData(result);
  }, [page]);

  const handleDelete = async (id) => {
    const result = await deleteData(id);
    console.log(result);
    getAllData();
  };

  const handleEdit = (item) => {
    setState({ ...state, language: item, edit: true });
  };

  const handleAdd = () => {
    setState({ ...state, edit: false, language: {} });
  };

  const handleNext = () => {
    setSearch({ page: "2" });
  };

  const handlePrevious = () => {
    setSearch({ page: "1" });
  };

  useEffect(() => {
    getAllData();
  }, [search, getAllData]);

  return (
    <div className="container my-4">
      <Link to="/create">
        <button className="btn btn-success" onClick={handleAdd}>
          Add language
        </button>
      </Link>
      <table className="table table-bordered table-striped my-2 table-hover">
        <TableHead />
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-outline-secondary m-2"
          onClick={handlePrevious}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={page >= 2}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const TableHead = () => {
  return (
    <thead>
      <tr className="text-center">
        <th>Name</th>
        <th>Release year</th>
        <th>Githut</th>
        <th>Pypl</th>
        <th>Tiobe</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};
const TableRow = ({ item, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.release_year}</td>
      <td>{item.githut_rank}</td>
      <td>{item.pypl_rank}</td>
      <td>{item.tiobe_rank}</td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
        <Link to={`/create/${item.id}`}>
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={() => onEdit(item)}
          >
            Edit
          </button>
        </Link>
      </td>
    </tr>
  );
};
