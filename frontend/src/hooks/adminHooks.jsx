import { useQuery, useMutation } from "@tanstack/react-query";
import { adminAuthAPI } from "../api/adminAPI";
import { useNavigate } from "react-router-dom";

// Hook for sending OTP to admin email
export const useAdminLogin = () => {
    return useMutation({
        mutationFn: (email) => adminAuthAPI.login(email),
        onSuccess: (data) => {
            console.log('OTP sent successfully');
        },
        onError: (error) => {
            console.error('Failed to send OTP:', error.response?.data?.message);
        }
    });
};

// Hook for verifying OTP and logging in
export const useAdminOTPVerify = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({ email, otp }) => adminAuthAPI.verifyOTP(email, otp),
        onSuccess: (data) => {
            navigate('/admin/dashboard');
        },
        onError: (error) => {
            console.error('OTP verification failed:', error.response?.data?.message);
        }
    });
};

// Hook for admin logout
export const useAdminLogout = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => adminAuthAPI.logout(),
        onSuccess: (data) => {
            console.log('Logged out successfully');
            navigate('/admin/login');
        },
        onError: (error) => {
            console.error('Logout failed:', error.response?.data?.message);
            // Even if logout fails, redirect to login
            navigate('/admin/login');
        }
    });
};



