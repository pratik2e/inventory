import React, { useEffect, useState } from "react";
import { Table,Dropdown} from "flowbite-react";
import { collection,onSnapshot } from "firebase/firestore";
import {db} from "../../../firebasec";


export default function InventoryTable() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const inventoryCollectionRef = collection(db, "inventory");
  
    const unsubscribe = onSnapshot(inventoryCollectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setInventoryData(fetchedData);
    });
  
    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []);


 
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
        <Table.HeadCell>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {inventoryData.map((item, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className=" font-medium text-gray-900 dark:text-white">
              {item.itemName}
            </Table.Cell>
            <Table.Cell>{item.partNo}</Table.Cell>
            <Table.Cell>{item.rackNo}</Table.Cell>
            <Table.Cell>{item.qty}</Table.Cell>
            <Table.Cell>{item.issueQty}</Table.Cell>
            <Table.Cell>{item.netQty}</Table.Cell>
            <Table.Cell>{item.remark}</Table.Cell>
            <Table.Cell>
             <Dropdown>
                  <Dropdown.Item >
                    Update
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Delete
                  </Dropdown.Item>
        </Dropdown>
            </Table.Cell>
          </Table.Row>

        ))}
      </Table.Body>

    </Table>
  );
}
