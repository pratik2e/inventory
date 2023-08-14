import React, { useState } from "react";
import { Table} from "flowbite-react";

export default function InventoryTable() {
  const [inventoryData, setInventoryData] = useState([
    {
      itemName: "Apple MacBook Pro 17",
      partNo: "Silver",
      rackNo: "Laptop",
      qty: "$2999",
      issueQty: "$2999",
      netQty: "$2999",
      remark: "$2999",
    },
    // Add more data items as needed
  ]);

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Item name</Table.HeadCell>
        <Table.HeadCell>Part No.</Table.HeadCell>
        <Table.HeadCell>Rack No.</Table.HeadCell>
        <Table.HeadCell>QTY</Table.HeadCell>
        <Table.HeadCell>Issue QTY</Table.HeadCell>
        <Table.HeadCell>Net QTY</Table.HeadCell>
        <Table.HeadCell>Remark</Table.HeadCell>
        <Table.HeadCell>options</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {inventoryData.map((item, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.itemName}
            </Table.Cell>
            <Table.Cell>{item.partNo}</Table.Cell>
            <Table.Cell>{item.rackNo}</Table.Cell>
            <Table.Cell>{item.qty}</Table.Cell>
            <Table.Cell>{item.issueQty}</Table.Cell>
            <Table.Cell>{item.netQty}</Table.Cell>
            <Table.Cell>{item.remark}</Table.Cell>
            <Table.Cell>Options</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
