import React from 'react';
import { Table,Button} from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
export default function BillingTable() {
  const mockData = [
    {
      billNo: 'B123',
      date: '2023-08-15',
      partyName: 'ABC Corp',
      goods: 'Apple MacBook Pro 17',
      qty: '1',
      unit: 'Laptop',
      price: '$2999',
      sgst: '6070',
      cgst: '12312',
      igst: '2223',
      roundOff: '3000',
      grandTotal: '$2999'
    },
    // Add more mock data items as needed
  ];
  return (
    <Table hoverable className='overflow-x-auto'>
      <Table.Head>
        <Table.HeadCell>
            Bill No.
        </Table.HeadCell>
        <Table.HeadCell>
            Date
        </Table.HeadCell>
        <Table.HeadCell>
            Party Name
        </Table.HeadCell>
        <Table.HeadCell>
            Goods
        </Table.HeadCell>
         <Table.HeadCell>
            QTY
        </Table.HeadCell>
         <Table.HeadCell>
            Unit
        </Table.HeadCell>
         <Table.HeadCell>
            Price
        </Table.HeadCell>
        <Table.HeadCell>
            SGST
        </Table.HeadCell>
        <Table.HeadCell>
            CGST
        </Table.HeadCell>
        <Table.HeadCell>
            IGST
        </Table.HeadCell>
        <Table.HeadCell>
            Round Off
        </Table.HeadCell>
        <Table.HeadCell>
            Grand Total
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {mockData.map((data, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {data.billNo}
            </Table.Cell>
            <Table.Cell>{data.date}</Table.Cell>
            <Table.Cell>{data.partyName}</Table.Cell>
            <Table.Cell>{data.goods}</Table.Cell>
            <Table.Cell>{data.qty}</Table.Cell>
            <Table.Cell>{data.unit}</Table.Cell>
            <Table.Cell>{data.price}</Table.Cell>
            <Table.Cell>{data.sgst}</Table.Cell>
            <Table.Cell>{data.cgst}</Table.Cell>
            <Table.Cell>{data.igst}</Table.Cell>
            <Table.Cell>{data.roundOff}</Table.Cell>
            <Table.Cell>{data.grandTotal}</Table.Cell>
            <Table.Cell>
            <Dropdown>
                <Dropdown.Trigger>
                  <Button icon="more_horizontal" className="text-gray-700 dark:text-white" />
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}


