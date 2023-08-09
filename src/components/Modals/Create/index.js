import { Modal, Input, Select } from "antd";
import { useState } from "react";
import { CreateButton } from "../../Buttons";
import styles from "./create.module.css";

export const CreateModal = ({ onCreate, onCancel, open }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState("");

  const handleCreate = () => {
    onCreate({ name, category, status });
    setName("");
    setCategory([]);
    setStatus("");
  };

  const handleCancel = () => {
    setName("");
    setCategory([]);
    setStatus("");
    onCancel();
  };

  return (
    <Modal
      title="Title"
      open={open}
      onCancel={handleCancel}
      footer={
        <div className={styles.footer}>
          <CreateButton
            onClick={handleCancel}
            type="cancel"
            label="Cancel Changes"
          />
          <CreateButton
            onClick={handleCreate}
            type="check"
            label="Save Changes"
          />
        </div>
      }
    >
      <p>Name</p>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <div className={styles.dropdowns}>
        <div className={styles.dropdownCategory}>
          <p>Category Included</p>
          <Select
            style={{ width: "97%" }}
            placeholder="Select"
            mode="multiple"
            value={category}
            onSelect={(value) => setCategory((prev) => [...prev, value])}
          >
            <Select.Option value="Sidewalk Shed" label="Sidewalk Shed">
              Sidewalk Shed
            </Select.Option>
            <Select.Option value="Scaffold" label="Scaffold">
              Scaffold
            </Select.Option>
            <Select.Option value="Shoring" label="Shoring">
              Shoring
            </Select.Option>
          </Select>
        </div>
        <div>
          <p>Status</p>
          <Select
            style={{ width: "200px" }}
            placeholder="Select one"
            value={status}
            options={[
              { value: "On Road", label: "On Road" },
              { value: "Completed", label: "Completed" },
              { value: "On Hold", label: "On Hold" },
              { value: "In Progress", label: "In Progress" },
            ]}
            onSelect={(value) => setStatus(value)}
          />
        </div>
      </div>
    </Modal>
  );
};
