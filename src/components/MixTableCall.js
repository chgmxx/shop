import React from 'react';
import { Table,Button,Form,Input,Modal,Row,Col } from 'antd'
const FormItem = Form.Item;
const columns = [{
    title: '排队号',
    dataIndex: 'queueId',
    width: '13%'
},{
    title: '卓类型',
    dataIndex: 'tableType',
    width: '13%'
},{
    title: '用餐人数',
    dataIndex: 'eatNumber',
    width: '15%'
}, {
    title: '是否选座',
    dataIndex: 'seatFlag',
    width: '15%'
},{
    title: '排队时间',
    dataIndex: 'queueStartTime',
    width: '15%'
},{
    title: '客户姓名',
    dataIndex: 'customerName',
    width: '15%'
}, {
    title: "联系方式",
    dataIndex: 'customerTel',
    width: '20%'
}];
const dataSource = [{
    key:'0',
    queueId:'C101',
    tableType:'大桌',
    eatNumber:'8',
    seatFlag:'否',
    queueStartTime:'11111',
    customerName:'***',
    customerTel:'11111'
},{
    key:'1',
    queueId:'CA01',
    tableType:'小桌',
    eatNumber:'2',
    seatFlag:'否',
    queueStartTime:'22222',
    customerName:'***',
    customerTel:'22222'
},{
    key:'2',
    queueId:'B101',
    tableType:'中桌',
    eatNumber:'6',
    seatFlag:'否',
    queueStartTime:'33333',
    customerName:'***',
    customerTel:'33333'
},{
    key:'3',
    queueId:'C201',
    tableType:'大桌',
    eatNumber:'18',
    seatFlag:'否',
    queueStartTime:'4444',
    customerName:'***',
    customerTel:'44444'
},{
    key:'4',
    queueId:'A201',
    tableType:'小桌',
    eatNumber:'8',
    seatFlag:'否',
    queueStartTime:'5555',
    customerName:'***',
    customerTel:'5555'
},{
    key:'5',
    queueId:'C101',
    tableType:'大桌',
    eatNumber:'8',
    seatFlag:'否',
    queueStartTime:'11111',
    customerName:'***',
    customerTel:'12334'
},{
    key:'6',
    queueId:'C101',
    tableType:'大桌',
    eatNumber:'8',
    seatFlag:'否',
    queueStartTime:'11111',
    customerName:'***',
    customerTel:'12334'
},{
    key:'7',
    queueId:'C101',
    tableType:'大桌',
    eatNumber:'8',
    seatFlag:'否',
    queueStartTime:'11111',
    customerName:'***',
    customerTel:'12334'
}]


//叫号清桌页面  手动拼桌叫号
export default class ShowTableQueue extends React.Component {
    state = {
        visible: false,
        queueId:[],
        queueInfo:{
            queueInfos:"",
            tables:""
        }
    };

    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };


    onChangeTables = (e) => {
        this.setState({
            queueInfo:{
                tables:e.target.value
            }
       })
    }


    onChangeQueueInfos = (e) => {
        this.setState({
            queueInfo:{
                queueInfos:e.target.value
            }
        })
    }


    submitQueue(){
        console.log("hhh")
    }


    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                let queue ="";
                selectedRows.map((k,index)=>{
                    queue  = queue + k.queueId +',';
                    console.log(queue);
                })
                this.setState({
                    queueInfo:{

                        queueInfos:queue
                    }
                })
            }
        };

        return (
            <div>
                <Button type='primary' onClick={this.showModal}>
                    <span style={{color:"white"}}>手动叫号拼桌</span>
                </Button>
                <Modal
                    visible={this.state.visible}
                    title="手动叫号拼桌"
                    okText="确定"
                    footer={null}
                    width='550px'
                >
                    <Row style={{paddingBottom:'10px'}}>
                        <Col span={4} style={{paddingTop:"5px"}}>
                            请输入空桌号:
                        </Col>
                        <Col span={5}>
                            <Input placeholder="请输入空桌编号" value={this.state.queueInfo.tables}   onChange={this.onChangeTables}/>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5} style={{paddingTop:"5px"}}>
                            请勾选客户排号:
                        </Col>
                        <Col span={5}>
                            <Input placeholder="请勾选客户排号" value={this.state.queueInfo.queueInfos} onChange={this.onChangeQueueInfos}/>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={2}>
                            <Button onClick={this.submitQueue.bind(this)}>呼叫</Button>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Table columns={columns} rowSelection={rowSelection} dataSource={dataSource}/>
                </Modal>

                {/*<CreateForm*/}
                    {/*ref={this.saveFormRef}*/}
                    {/*visible={this.state.visible}*/}
                    {/*onCancel={this.handleCancel}*/}
                    {/*onCreate={this.handleCreate}*/}
                    {/*queueId={this.state.queueId}*/}
                {/*/>*/}
            </div>
        );
    }
}
