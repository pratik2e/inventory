import { Table } from "flowbite-react";
import React, { useState } from "react";
import { Badge } from "flowbite-react";

export default function Kantatable() {
  const mockData = [
    {
      entryTime: "09:00 AM",
      exitTime: "05:00 PM",
      entryTimeweight: "320kg",
      exitTimeweight: "100kg",
      sampleTaken: true,
      source: "Supplier",
      category: "6-75mm (Lumps)",
      remarks: "Good quality",
      status: "completed",
      purity: "95%",
      crossVerification: "Yes",
      labName: "Lab A",
      labAddress: "123 Lab St",
      report: "Sample Report",
      dispatchDate: "2023-08-15",
      reciertyDate: "2023-08-14",
    },
    // Add more mock data items as needed
  ];
  return (
    <div>
      <Table hoverable className="overflow-x-auto">
        <Table.Head>
          <Table.HeadCell>Entry Time</Table.HeadCell>
          <Table.HeadCell>Exit Time</Table.HeadCell>
          <Table.HeadCell>Entry time weight</Table.HeadCell>
          <Table.HeadCell>Exit time weight</Table.HeadCell>
          <Table.HeadCell>Sample Taken</Table.HeadCell>
          <Table.HeadCell>Source</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Remarks</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Purity</Table.HeadCell>
          <Table.HeadCell>Cross Verification</Table.HeadCell>
          <Table.HeadCell>Lab Name</Table.HeadCell>
          <Table.HeadCell>Lab Address</Table.HeadCell>
          <Table.HeadCell>Report</Table.HeadCell>
          <Table.HeadCell>Dispatch Date</Table.HeadCell>
          <Table.HeadCell>Recierty Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {mockData.map((data, index) => (
            <React.Fragment key={index}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{data.entryTime}</Table.Cell>
                <Table.Cell>{data.entryTimeweight}</Table.Cell>
                <Table.Cell>{data.exitTimeweight}</Table.Cell>
                <Table.Cell>{data.exitTime}</Table.Cell>
                <Table.Cell>{data.sampleTaken ? "Yes" : "No"}</Table.Cell>
                <Table.Cell>{data.source}</Table.Cell>
                <Table.Cell>{data.category}</Table.Cell>
                <Table.Cell>{data.remarks}</Table.Cell>
                <Table.Cell>
                  {data.status === "Pending" && (
                    <Badge variant="info">Pending</Badge>
                  )}
                  {data.status === "In Progress" && (
                    <Badge variant="warning">In Progress</Badge>
                  )}
                  {data.status === "completed" && (
                    <Badge variant="success">completed</Badge>
                  )}
                </Table.Cell>
                <Table.Cell>{data.purity}</Table.Cell>
                <Table.Cell>{data.crossVerification}</Table.Cell>
                <Table.Cell>{data.labName}</Table.Cell>
                <Table.Cell>{data.labAddress}</Table.Cell>
                <Table.Cell>{data.report}</Table.Cell>
                <Table.Cell>{data.dispatchDate}</Table.Cell>
                <Table.Cell>{data.reciertyDate}</Table.Cell>
              </Table.Row>
              {data.crossVerification === "Yes" && (
                <Table.Row
                  key={`${index}-extra`}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                ></Table.Row>
              )}
            </React.Fragment>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function ToggleSwitch({ checked }) {
  const [isChecked, setIsChecked] = useState("");

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`w-11 h-6 ${
          isChecked ? "bg-blue-600" : "bg-gray-200"
        } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  );
}
