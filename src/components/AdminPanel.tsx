import React, { useState } from 'react';
import { Settings, RefreshCw, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { useGoogleSheets } from '../hooks/useGoogleSheets';

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customSheetId, setCustomSheetId] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { data, loading, error, refetch, loadCustomSheet } = useGoogleSheets();

  const handleRefresh = async () => {
    setMessage(null);
    try {
      await refetch();
      setMessage({ type: 'success', text: 'Data refreshed successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to refresh data' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleLoadCustomSheet = async () => {
    if (!customSheetId.trim()) {
      setMessage({ type: 'error', text: 'Please enter a valid Google Sheet ID' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setMessage(null);
    try {
      await loadCustomSheet(customSheetId.trim());
      setMessage({ type: 'success', text: 'Custom sheet loaded successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to load custom sheet' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const sampleSheetUrl = 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0';

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors z-40"
        title="Admin Panel"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-96 z-40">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Admin Panel</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span className="text-sm">{message.text}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Google Sheet ID
          </label>
          <input
            type="text"
            value={customSheetId}
            onChange={(e) => setCustomSheetId(e.target.value)}
            placeholder="Enter Google Sheet ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Extract the ID from your Google Sheets URL
          </p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleLoadCustomSheet}
            disabled={loading}
            className="flex-1 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium disabled:opacity-50"
          >
            Load Sheet
          </button>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Sheet Structure Required:</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <div><strong>Services:</strong> Icon, Title, Description, Features</div>
            <div><strong>Gallery:</strong> Image URL, Alt Text, Category</div>
            <div><strong>Testimonials:</strong> Name, Image URL, Text, Rating, Wedding</div>
            <div><strong>Packages:</strong> Name, Icon, Price, Description, Features, Popular, Color</div>
          </div>
        </div>

        <a
          href={sampleSheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Sample Sheet</span>
        </a>

        {data && (
          <div className="border-t pt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Current Data:</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div>Services: {data.services.length}</div>
              <div>Gallery: {data.gallery.length}</div>
              <div>Testimonials: {data.testimonials.length}</div>
              <div>Packages: {data.packages.length}</div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-xs text-red-600 bg-red-50 p-2 rounded">
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;