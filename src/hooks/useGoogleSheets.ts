import { useState, useEffect } from 'react';
import { GoogleSheetsData, fetchGoogleSheetsData } from '../utils/googleSheets';

export const useGoogleSheets = (sheetId?: string) => {
  const [data, setData] = useState<GoogleSheetsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (customSheetId?: string) => {
    try {
      setLoading(true);
      setError(null);
      const sheetsData = await fetchGoogleSheetsData(customSheetId || sheetId);
      setData(sheetsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
      console.error('Error loading Google Sheets data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [sheetId]);

  return {
    data,
    loading,
    error,
    refetch: () => loadData(),
    loadCustomSheet: (customSheetId: string) => loadData(customSheetId)
  };
};