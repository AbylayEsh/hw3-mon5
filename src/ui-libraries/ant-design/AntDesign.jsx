
import { Space, Table, Tag } from 'antd';
import { Button, Form, Input, Select } from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        library: 'Bootstrap',
        pros: 'Легко интегрируется, Широко используется, Быстрая разработка интерфейсов, Отличная документация',
        cons: 'Ограниченная гибкость, Проблемы с кастомизацией, Классические дизайны, Не подходит для сложных интерфейсов',
        tags: ['easy', 'popular', 'quick'],
    },
    {
        key: '2',
        library: 'Material UI',
        pros: 'Современный стиль, Много компонентов, Кастомизация с помощью темы, Хорошая документация',
        cons: 'Может быть тяжеловесным, Большой размер, Не всегда подходит для всех проектов, Потребность в добавлении стилей для индивидуальности',
        tags: ['modern', 'components'],
    },
    {
        key: '3',
        library: 'Ant Design',
        pros: 'Полный набор компонентов, Хорошая документация, Легкость в создании сложных интерфейсов, Современный и стильный дизайн',
        cons: 'Тяжелый для старых браузеров, Сложный для новичков, Проблемы с кастомизацией, Большой размер библиотеки',
        tags: ['complete', 'stylish'],
    },
];

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const AntDesign = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' });
                break;
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' });
                break;
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
        }
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
    };

    return (
        <div>
            <Table dataSource={data}>
                <ColumnGroup title="Library">
                    <Column title="Library" dataIndex="library" key="library" />
                </ColumnGroup>
                <Column title="Плюсы" dataIndex="pros" key="pros" />
                <Column title="Минусы" dataIndex="cons" key="cons" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                        <>
                            {tags && tags.length > 0 ? (
                                tags.map((tag) => {
                                    let color = tag.length > 5 ? 'geekblue' : 'green';
                                    if (tag === 'loser') {
                                        color = 'volcano';
                                    }
                                    return (
                                        <Tag color={color} key={tag}>
                                            {tag.toUpperCase()}
                                        </Tag>
                                    );
                                })
                            ) : (
                                <span>No tags available</span>
                            )}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a>Invite {record.library}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>

            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                            Fill form
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AntDesign;
