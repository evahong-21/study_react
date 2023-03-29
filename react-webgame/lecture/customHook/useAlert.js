import React, { useState } from "react";
import Alert from './Alert';


const useAlert = () => {
    const [alert, setAlert] = useState({isShow: false, contents: ''});

    const handleAlert = (contents) => {
        setAlert({isShow: true, contents: contents});
        setTimeout(() => {
            setAlert({...alert, isShow: false});
        }, 1200);
    }

    const renderAlert = () => {
        const {isShow, contents} = alert;
        return <Alert isShow={isShow} contents={contents} />;
    }

    return [handleAlert, renderAlert];
}

export default useAlert;