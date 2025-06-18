"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Sidebar from "./ui/sidebar";
import Insideheader from "./ui/insideheader";

export default function ClientLayoutWrapper({ children }) {
    const [hasToken, setHasToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    // Function to check token validity
    const checkTokenValidity = () => {
        try {
            const storedToken = sessionStorage.getItem("chessToken");
            if (!storedToken) return false;

            const parsedToken = JSON.parse(storedToken);
            const token = parsedToken?.token;

            // Add any additional token validation logic here if needed
            // For example: check expiration, format, etc.
            return !!token;
        } catch (error) {
            console.error("Error parsing token:", error);
            // Clear invalid token
            sessionStorage.removeItem("chessToken");
            return false;
        }
    };

    useEffect(() => {
        const validateToken = () => {
            const tokenExists = checkTokenValidity();
            setHasToken(tokenExists);
            setIsLoading(false);
        };

        validateToken();

        // Listen for storage changes (for logout in other tabs)
        const handleStorageChange = (e) => {
            if (e.key === "chessToken") {
                validateToken();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        // Also check periodically in case token changes
        const interval = setInterval(validateToken, 1000);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    // Authenticated layout
    if (hasToken) {
        return (
            <main className="min-h-screen">
                <div className="flex gap-10 bg-[#F3F3F3] p-5 min-h-screen">
                    <div className="sidebar_area w-2/12 flex-shrink-0">
                        <Sidebar />
                    </div>
                    <div className="content_area w-10/12 flex-grow">
                        <Insideheader />
                        <div className="content-wrapper">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // Public layout (not authenticated)
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </main>
    );
}