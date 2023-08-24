import React, { useState } from 'react'
import { Button, Table } from 'flowbite-react';
export default function Repair  () {
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
    ])
  
    return (
      <div>
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mb-1">
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All products</h1>
        </div>
        <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
          <div className="flex items-center mb-4 sm:mb-0">
            <form className="sm:pr-3" action="#" method="GET">
              <label htmlFor="products-search" className="sr-only">Search</label>
              <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search for products"
                />
              </div>
            </form>
          
          </div>
          <Button> ADD  </Button>
        </div>
      </div>
    </div>
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
      </div>
    )}
