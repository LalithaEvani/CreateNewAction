import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./AttachFile.scss";
import { Upload, message, Button } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";



export default function AttachFile() {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info:any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  return (

      <Upload {...props}>
    <Button className="attach-file" icon={<PaperClipOutlined />}>
      Attach file
    </Button>
  </Upload>
   
  )
}

