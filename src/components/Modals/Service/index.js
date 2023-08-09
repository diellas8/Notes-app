import { Drawer, Table } from "antd";
import styles from "./service.module.css";
import { CreateButton } from "../../Buttons";
import { useState } from "react";
import classNames from "classnames";
import { CheckOutlined } from "@ant-design/icons";

const lorems = [
  {
    nr: 1,
    item: 1,
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 2,
    item: 2,
    quantity: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 3,
    item: 3,
    quantity: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 4,
    item: 4,
    quantity: 40,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const tableColumns = [
  {
    title: "Nr.",
    dataIndex: "nr",
    key: "nr",
  },
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
  },
];

export const ServiceModal = ({ open, onClose, row }) => {
  console.log(row);

  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <Drawer width="100VW" open={open} closable={false}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <p className={styles.categoryTitle}>Selected</p>
          <div style={{ width: "100%", height: "100%" }}>
            {row?.category?.map((category) => {
              return (
                <div
                  className={classNames({
                    [styles.category]: true,
                    [styles.categorySelected]: category === selectedCategory,
                  })}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div></div>
                  {category}
                  {category === selectedCategory ? (
                    <CheckOutlined />
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </div>
          <CreateButton type="back" label="Back" onClick={onClose} />
        </div>

        <div className={styles.items}>
          <p className={styles.categoryTitle}>
            {selectedCategory || "Data Grid"}
          </p>
          <Table columns={tableColumns} dataSource={lorems} />
          {/* {lorems.map((lorem) => {
            return (
              <div className={styles.itemContainer}>
                <p>{lorem.nr}</p>
                <p>{lorem.item}</p>
                <p>{lorem.quantity}</p>
                <p>{lorem.description}</p>
                <p>{lorem.notes}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    </Drawer>
  );
};
