import React from 'react'
import { Table, DarkThemeToggle } from 'flowbite-react';

const Tables = ({headers, content, actions}) => {
    return (
        <div>
            <Table striped className='table-auto'>
                <Table.Head>
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