import React from 'react';
import { useHealthCheck, useDatabaseTest, useDatabaseInfo } from '../hooks/adminHooks';

const DatabaseTest = () => {
  const { data: healthData, isLoading: healthLoading, error: healthError } = useHealthCheck();
  const { data: dbTestData, isLoading: dbTestLoading, error: dbTestError } = useDatabaseTest();
  const { data: dbInfoData, isLoading: dbInfoLoading, error: dbInfoError, refetch: refetchDbInfo } = useDatabaseInfo();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Database Connection Test</h2>
      
      {/* Health Check */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Server Health Check</h3>
        {healthLoading && <p className="text-blue-600">Loading...</p>}
        {healthError && <p className="text-red-600">Error: {healthError.message}</p>}
        {healthData && (
          <div className="bg-green-50 p-3 rounded">
            <p className="text-green-800">✓ {healthData.message}</p>
            <p className="text-sm text-gray-600">Time: {new Date(healthData.timestamp).toLocaleString()}</p>
            {healthData.database && <p className="text-sm text-gray-600">Database: {healthData.database}</p>}
          </div>
        )}
      </div>

      {/* Database Test */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Database Connection Test</h3>
        {dbTestLoading && <p className="text-blue-600">Loading...</p>}
        {dbTestError && <p className="text-red-600">Error: {dbTestError.message}</p>}
        {dbTestData && (
          <div className="bg-green-50 p-3 rounded">
            <p className="text-green-800">✓ {dbTestData.message}</p>
            <p className="text-sm text-gray-600">Status: {dbTestData.status}</p>
            <p className="text-sm text-gray-600">Database: {dbTestData.database}</p>
            <p className="text-sm text-gray-600">Host: {dbTestData.host}</p>
          </div>
        )}
      </div>

      {/* Database Info */}
      <div className="mb-6 p-4 border rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-700">Database Information</h3>
          <button
            onClick={() => refetchDbInfo()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            disabled={dbInfoLoading}
          >
            {dbInfoLoading ? 'Loading...' : 'Get Info'}
          </button>
        </div>
        
        {dbInfoError && <p className="text-red-600">Error: {dbInfoError.message}</p>}
        {dbInfoData && (
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-blue-800">✓ {dbInfoData.message}</p>
            <p className="text-sm text-gray-600">Collections: {dbInfoData.collections?.length || 0}</p>
            {dbInfoData.collections && dbInfoData.collections.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700">Available Collections:</p>
                <ul className="text-sm text-gray-600 ml-4">
                  {dbInfoData.collections.map((collection, index) => (
                    <li key={index}>• {collection.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseTest;