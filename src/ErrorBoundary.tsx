import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };
  /**
   * The getDerivedStateFromError() method is invoked if some error occurs during the rendering phase.
   *  It is called during the render phase, so side-effects are not permitted in this method. For side-effects, we use componentDidCatch() instead.
   *
   */
  static getDerivedStateFromError(): {hasError: boolean, redirect: boolean} {
    // Changing the state hasError to true if some error occurs.
    return {
      hasError: true,
      redirect: false,
    };
  }
  // componentDidCatch is also involked during rendering phase.
  // unlike getDerivedStateFromError() side-effects are allowed in this method.
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundery caught an error.", error, info);
  }
  componentDidUpdate(): void {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true,
        });
      }, 5000);
    }
  }
  render(): ReactNode {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}
