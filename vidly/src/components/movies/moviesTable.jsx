import React, { Component } from "react";
import Like from "../utils/like";
import Table from "./table";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
        ></Like>
      ),
    },
  ];

  constructor() {
    super();
    const user = getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn());
  }
  deleteColumn() {
    return {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    };
  }

  render() {
    const { filtmovies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={filtmovies}
        sortColumn={sortColumn}
        onSort={onSort}
      ></Table>
    );
  }
}

export default MoviesTable;
