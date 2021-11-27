import { Button, Input, Form, Card } from "antd";
import { login } from "auth-provider";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (param: {
    username: string;
    password: string;
  }) => {
    // login({ ...param });
    dispatch(login({ ...param }));
  };

  // login
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        margin: "0 auto",
        width: 500,
      }}
    >
      <Card>
        {user?.name ? user?.name : <h2>登陆</h2>}

        {user?.name ? <button onClick={logout}>登出</button> : null}

        <Form onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input type="text" id="username" placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input type="text" id="password" placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
