import React, { Component } from "react";

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false 
});

class AuthProvider extends Component {
  state = { isAuthorized: false }; 

  authorize = () => {
      this.setState({ isAuthorized: true });
  }
  noAuthorize = () => {
      this.setState({ isAuthorized: false });
  }
 
  render() {
    const { isAuthorized } = this.state;
    return (
      <Provider
        value={{
          isAuthorized,
          authorize: this.authorize,
          noAuthorize: this.noAuthorize
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { AuthProvider }

export function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthConsumer>
          {contextProps => <WrappedComponent {...contextProps} {...rest} />}
        </AuthConsumer>
      );
    }
  };
}