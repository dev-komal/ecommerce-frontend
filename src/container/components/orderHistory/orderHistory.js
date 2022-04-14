import React, { useState } from 'react';
import { Modal, Button, Table } from 'antd';


const MainOrderHistory = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function printReceipt() {
        const doc = document.getElementById('printbtn');
        doc.print();
    }
    const columns = [
        {
            title: 'Product',
            dataIndex: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'age',
        },
        {
            title: 'Description',
            dataIndex: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },

    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            price: '1200',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            price: '1200',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            price: '1200',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            price: '1200',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            price: '1200',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            price: '1200',
        },
    ];

    return (<>
        <div>
            <Button type="primary" size={'medium'} color="red" onClick={showModal}>
                My Order
            </Button>
            <Modal width="60%" title="Your order history" onOk={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Button type="primary" id="printbtn" onClick={printReceipt} style={{ float: "right" }}>Print</Button>
                <Table pagination={false} columns={columns} dataSource={data} scroll={{ y: 250, x: 300 }} />

            </Modal>
        </div>


    </>)
}


export default MainOrderHistory;