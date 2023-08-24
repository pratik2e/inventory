import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebasec";


export default function BillingTable() {
  const [billData, setbillData] = useState([]);

  useEffect(() => {
    const billingCollectionRef = collection(db, "bills");

    const unsubscribe = onSnapshot(billingCollectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setbillData(fetchedData);
    });

    return () => {
      // Unsubscribe the listener when the component unmount
      unsubscribe();
    };
  }, []);
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Bill No.</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell>Party Name</Table.HeadCell>
        <Table.HeadCell>Goods</Table.HeadCell>
        <Table.HeadCell>QTY</Table.HeadCell>
        <Table.HeadCell>Unit</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>SGST</Table.HeadCell>
        <Table.HeadCell>CGST</Table.HeadCell>
        <Table.HeadCell>IGST</Table.HeadCell>
        <Table.HeadCell>Round Off</Table.HeadCell>
        <Table.HeadCell>Grand Total</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {billData.map((item, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="font-medium text-gray-900 dark:text-white">
              {item.billNo}
            </Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.partyName}</Table.Cell>
            <Table.Cell>{item.goods}</Table.Cell>
            <Table.Cell>{item.qty}</Table.Cell>
            <Table.Cell>{item.unit}</Table.Cell>
            <Table.Cell>{item.price}</Table.Cell>
            <Table.Cell>{item.sgst}</Table.Cell>
            <Table.Cell>{item.cgst}</Table.Cell>
            <Table.Cell>{item.igst}</Table.Cell>
            <Table.Cell>{item.roundOff}</Table.Cell>
            <Table.Cell>{item.grandTotal}</Table.Cell>
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
