import * as React from "react";
import { Switch, Route } from "react-router-dom";

export default function Routes() {

    return (
        <React.Suspense
            fallback={<div>正在加载...</div>}
        >
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </React.Suspense>
    );

}