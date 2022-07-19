import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Button,
  Descriptions,
  PageHeader,
  Image,
  Avatar,
  Tooltip,
  Modal,
  Input,
} from "antd";
import { getProject } from "../../services/api/ProjectService";
import { ProjectInterface } from "../../interfaces/project";
import { getImgName, getImgProject } from "../../shared/img/getName";
import { User } from "../../interfaces/user";
import { InboxOutlined } from "@ant-design/icons";
import { getUsers } from "../../services/api/UserService";
import { Form, Select, Upload } from "antd";
import { IData } from "../../interfaces";
import { createTask } from "../../services/api/TaskService";
const { Option } = Select;
const ShowProject = () => {
  const [formData, setFormData] = useState<IData>({
    name: "",
    description: "",
  });
  const [project, setProjects] = useState<ProjectInterface>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const { name, description }: { name: string; description: string } = formData;
  const  [ users, setUsers] = useState<User[]>([])
  const [selectedOption, setSelectedOption] = useState<String[]>([]);
  const [file, setFile] = useState<File>();
  const handleChangeContent = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  useEffect(() => {
    if (id) {
      getProject(id).then((res) => setProjects(res.project));
      getUsers().then((res) => {
        setUsers(res)
      });
    }
  }, [id]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleChange = (value: any) => {
    setSelectedOption(value);
  };
  const normFile = (e: any) => {
    setFile(e.file?.originFileObj)
  };
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name && selectedOption) {
      const data = new FormData();
      if (file) {
        data.append("img", file);
        console.log(file)
      }
      data.append("projectId",id as string)
      data.append("taskName", formData.name);
      data.append("description", formData.description);
      data.append(
        "users",
        JSON.stringify(selectedOption)
      );

      const res = await createTask(data);
    }
  };
  return (
    <div className="site-page-header-ghost-wrapper w-[60%] m-auto">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={project?.product_name}
        // subTitle="This is a subtitle"
        extra={[
          <Button key="1">Edit</Button>,
          <Button key="2">Add Member</Button>,
          <Button key="3" type="primary" onClick={showModal}>
            Create Issue
          </Button>,
        ]}
      >
        {project?.images ? (
          <Image
            src=''
            width={200}
            height={200}
          />
        ) : null}

        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Desciption">
            {project?.description}
          </Descriptions.Item>

          <Descriptions.Item label="Creation Time">
            {project?.createdAt}
          </Descriptions.Item>
         
         
        </Descriptions>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form name="validate_other" onSubmitCapture={handleSubmit}>
            <Form.Item label="Name task">
              <Input
                placeholder="name"
                name="name"
                onChange={handleChangeContent}
                value={name}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder="text"
                name="description"
                onChange={handleChangeContent}
                value={description}
              />
            </Form.Item>
            <Form.Item>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                onChange={handleChange}
              >
                {users.map((user:User)=>(<Option key={user.id}>{user.name}

                </Option>))}
              </Select>
            </Form.Item>
            <Form.Item label="Dragger">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </PageHeader>
    </div>
  );
};

export default ShowProject;
