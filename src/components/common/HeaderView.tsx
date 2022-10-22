import { IHeader } from "@/api/interface/menu";
import { Divider } from 'antd';

const HeaderView = (props: IHeader) => {

    const cName = `header header_${props.mode}`;

    return (
        <>
            <header className={cName}>
                <h1>Subject Watch</h1>
                <Divider className="dividers" />
            </header>
        </>
    )

}

export default HeaderView;