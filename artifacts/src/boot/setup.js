import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";
import App from "app";
import getTheme from "ui/components";
import variables from "theme/variables/platform";
export default function (store) {
    return class Setup extends React.Component {
        render() {
            return (React.createElement(StyleProvider, { style: getTheme(variables) },
                React.createElement(Provider, Object.assign({}, store),
                    React.createElement(App, null))));
        }
    };
}
//# sourceMappingURL=setup.js.map