import "../styles/Filters.css";
import { filters } from "./Main";

interface IProps {
  filter: number;
  setFilter: (filter: number) => void;
}

const Filters = (props: IProps) => {
  const { filter, setFilter } = props;

  return (
    <div>
      <div
        className={filter === filters.All ? "filter filtered" : "filter"}
        onClick={() => setFilter(filters.All)}
      >
        All
      </div>
      <div
        className={filter === filters.Active ? "filter filtered" : "filter"}
        onClick={() => setFilter(filters.Active)}
      >
        Active
      </div>
      <div
        className={filter === filters.Completed ? "filter filtered" : "filter"}
        onClick={() => setFilter(filters.Completed)}
      >
        Completed
      </div>
    </div>
  );
};

export default Filters;
