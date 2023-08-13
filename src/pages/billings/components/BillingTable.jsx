import { Table } from 'flowbite-react';
// Bill No	Date	Party Name	Goods	Qty	Unit	Price	CGST	SGST	IGST	Round Off	Grand Total
export default function BillingTable() {
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
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17
          </Table.Cell>
          <Table.Cell>
            Sliver
          </Table.Cell>
          <Table.Cell>
            Laptop
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
       
      </Table.Body>
    </Table>
  )
}


