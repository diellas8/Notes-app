import { Input } from "antd";
import styles from "./table.module.css";
import { CreateButton } from "../Buttons";
import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { useState } from "react";

export const Table = ({ rows = [], onCreate, onClickTitle }) => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.table}>
      <div>
        <p>Title</p>
      </div>
      <div>
        <div className={styles.tableInput}>
          <Input
            className={styles.input}
            prefix={<SearchOutlined />}
            placeholder="Search a driver"
            onChange={(e) => setSearch(e.target.value)}
          />
          <CreateButton onClick={onCreate} type="create" label="Create" />
        </div>
        <div className={styles.row}>
          <p style={{ minWidth: "300px", textAlign: "center", color: "black" }}>
            Jobsite Name
          </p>
          <p style={{ minWidth: "129px", textAlign: "center", color: "black" }}>
            Status
          </p>
        </div>
      </div>
      {rows
        .filter((row) => row.name.startsWith(search))
        .map((row, index) => {
          return (
            <div key={index} className={styles.row}>
              <p
                style={{ minWidth: "300px", textAlign: "center" }}
                onClick={() => onClickTitle(row)}
              >
                {row.name}
              </p>
              <div
                className={classNames({
                  [styles.rowStatusCompleted]: row.status === "Completed",
                  [styles.rowStatusInProgress]: row.status === "In Progress",
                  [styles.rowStatusOnHold]: row.status === "On Hold",
                  [styles.rowStatusOnRoad]: row.status === "On Road",
                })}
              >
                {row.status}
              </div>
            </div>
          );
        })}
    </div>
  );
};
