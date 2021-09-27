import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row, Table, Tag, Menu, Dropdown } from 'antd';
import * as S from './styles';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export function DashboardPage() {
  return (
    <S.Container>
      <Row>
        <Col span={24}>
          <PageHeader
            title="Title"
            className="pl-0 pr-0"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
              <S.ActionButton key="3">+ Cadastrar</S.ActionButton>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
              <Dropdown key="more" overlay={menu}>
                <Button>
                  <EllipsisOutlined
                    style={{
                      fontSize: 20,
                      verticalAlign: 'top',
                    }}
                  />
                </Button>
              </Dropdown>,
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </S.Container>
  );
}
