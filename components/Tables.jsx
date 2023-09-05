import React from 'react'
import { Table, Checkbox } from 'flowbite-react';

const Tables = ({headers, content, actions}) => {

    const TableTheme = {
        "root": {
          "base": "w-full text-left text-gray-500 dark:text-gray-200",
          "shadow": "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
          "wrapper": "relative"
        },
        "body": {
          "base": "group/body",
          "cell": {
            "base": "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
          }
        },
        "head": {
          "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
          "cell": {
            "base": "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-100 dark:bg-gray-100 px-6 py-3"
          }
        },
        "row": {
          "base": "group/row",
          "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
          "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        }
      }

    return (
        <div>
            <Table striped hoverable className='table-auto' theme={TableTheme}>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        <Checkbox />
                    </Table.HeadCell>
                    {
                        headers.map((x, index) => (
                            <Table.HeadCell key={index}>
                                {x}
                            </Table.HeadCell>
                        ))
                    }
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        content.map((x, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {x.household_id}
                                </Table.Cell>
                                <Table.Cell>
                                    {x.household_head}
                                </Table.Cell>
                                <Table.Cell>
                                    {x.member_count}
                                </Table.Cell>
                                <Table.Cell>
                                    {x.actions}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
       
    )
}

export default Tables