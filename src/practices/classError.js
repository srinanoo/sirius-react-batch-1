import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }

      static getDerivedStateFromError(error) {
        console.log(error.message, "ERRR");
        return { error: true, errorInfo: error.toString() };
        // return { error: true, errorMessage: error.toString() };
        // return { error };
      };

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     this.setState({ hasError: true, errorMessage: error.message})
    //     console.log(error, errorInfo);
    // }

    render() {
        if (this.state.error) {
            // Error path
            return (
              <div>
                <h2>Oops! Something went wrong.</h2>
                {this.state.errorInfo}

                  {/* {this.state.error && this.state.error.toString()} */}
                  {/* {this.state.errorInfo.componentStack} */}
              </div>
            );
          }
          // Normally, just render children
          return this.props.children;
    }
}

export default ErrorBoundary;