import { useQuery } from "@tanstack/react-query";
import { testAPI } from "../api/adminAPI";

// Hook to test server health
export const useHealthCheck = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => testAPI.healthCheck().then(res => res.data),
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};

// Hook to test database connection
export const useDatabaseTest = () => {
  return useQuery({
    queryKey: ['database-test'],
    queryFn: () => testAPI.testDatabase().then(res => res.data),
  });
};

// Hook to get database info
export const useDatabaseInfo = () => {
  return useQuery({
    queryKey: ['database-info'],
    queryFn: () => testAPI.getDatabaseInfo().then(res => res.data),
    enabled: false, // Only run when manually triggered
  });
};


