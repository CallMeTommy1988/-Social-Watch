import { Steps } from 'antd'
const { Step } = Steps;

const RegisterStep = function (props: { current: number }) {
    return (
        <Steps current={props.current}>
            <Step title="开始注册" />
            <Step title="注册成功" />
            <Step title="邮件验证" />
        </Steps>
    )
}

export default RegisterStep;