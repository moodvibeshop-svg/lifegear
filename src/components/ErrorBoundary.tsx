import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  /** When this changes (e.g. after navigation), error state is reset so the user can recover. */
  locationKey?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.state.hasError && this.props.locationKey !== prevProps.locationKey) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-lg w-full space-y-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-red-200">
              System Interruption
            </h1>
            <p className="text-gray-400">
              Something went wrong. We’ve logged it. You can return to the dashboard and try again.
            </p>
            <div>
              <Link
                to="/app"
                className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Return to Lifegear OS
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
