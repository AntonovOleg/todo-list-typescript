import "../styles/Filters.css";

interface IProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filters = (props: IProps) => {
  const { filter, setFilter } = props;

  return (
    <div>
      <div
        className={filter === "All" ? "filter filtered" : "filter"}
        onClick={() => setFilter("All")}
      >
        All
      </div>
      <div
        className={filter === "Active" ? "filter filtered" : "filter"}
        onClick={() => setFilter("Active")}
      >
        Active
      </div>
      <div
        className={filter === "Completed" ? "filter filtered" : "filter"}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </div>
    </div>
  );
};

export default Filters;
