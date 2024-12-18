// MainLayout.jsx
import { Outlet } from "react-router-dom";
import LeftSidebar from "@/components/Sidebar";
import { ThemeProvider } from "./context/ThemeProvider";
import AuthProvider from "./context/AuthProvider";
import SocketProvider from "./context/SocketProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const MainLayout = () => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <AuthProvider>
        <SocketProvider>
          <QueryClientProvider client={queryClient}>
            <div className="dark:bg-dark-primary bg-light-primary flex font-sans">
              <LeftSidebar /> {/* Sidebar visible across all pages */}
              <div style={{ flex: 1 }}>
                <Outlet /> {/* Where nested routes will render */}
              </div>
            </div>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
