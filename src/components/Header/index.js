import { Button } from "antd";
import styles from "./header.module.css";
import classNames from "classnames";

export const Header = ({ onSelect, onRoad = 0, completed = 0, onHold = 0 }) => {
  return (
    <div className={styles.header}>
      <div
        className={classNames({
          [styles.button]: true,
          [styles.buttonOnRoad]: true,
        })}
        onClick={() => onSelect("On Road")}
      >
        {onRoad} On Road
      </div>
      <div
        className={classNames({
          [styles.button]: true,
          [styles.buttonCompleted]: true,
        })}
        onClick={() => onSelect("Completed")}
      >
        {completed} Completed
      </div>
      <div
        className={classNames({
          [styles.button]: true,
          [styles.buttonOnHold]: true,
        })}
        onClick={() => onSelect("On Hold")}
      >
        {onHold} On Hold
      </div>
    </div>
  );
};
