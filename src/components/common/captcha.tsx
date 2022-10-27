import { useEffect, useState } from "react";
import * as outerService from "api/modules/outer"

const Captcha = function (props: { reflash?: number }) {

    const [captchaContent, setCaptchaContent] = useState("");
    const getCaptcha = () => {
        outerService.captcha().then(res => {
            if (res.code === 200) {
                const svgContent = res.data as string;
                setCaptchaContent(svgContent);
            }
        }, reject => {
            console.error("验证码错误")
            console.error(reject);
        })
    }

    useEffect(() => {
        console.log(`验证码刷新useEffect`)
        getCaptcha();
    }, [props.reflash]);

    return (
        <>
            <section
                onClick={() => { getCaptcha(); }}
                dangerouslySetInnerHTML={{ __html: captchaContent }}>
            </section>
        </>
    );

}

export default Captcha;