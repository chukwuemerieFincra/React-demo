import "./DataTable.css";
import { FiMoreHorizontal } from "react-icons/fi";

const DataTable = ({
  columns,
  data,
  getRowId,
  selectable = true,
  showActions = true,
  onRowAction,
  onRowClick,
}) => {
  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {selectable && (
              <th className="data-table-checkbox-col">
                <input type="checkbox" />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} style={col.width ? { width: col.width } : undefined}>
                {col.label}
              </th>
            ))}
            {showActions && <th className="data-table-action-col"></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            const rowId = getRowId ? getRowId(row) : i;
            const clickable = typeof onRowClick === "function";
            return (
              <tr
                key={rowId}
                className={clickable ? "data-table-row-clickable" : ""}
                onClick={clickable ? () => onRowClick(row) : undefined}
              >
                {selectable && (
                  <td
                    className="data-table-checkbox-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input type="checkbox" />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                {showActions && (
                  <td
                    className="data-table-action-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      className="data-table-action-btn"
                      onClick={() => onRowAction && onRowAction(row)}
                      aria-label="Row actions"
                    >
                      <FiMoreHorizontal />
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
