import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

type TaxPayer = {
  tid: bigint;
  firstName: string;
  lastName: string;
  address: string;
};

const TaxPayerSearch: React.FC = () => {
  const [tid, setTid] = useState<string>('');
  const [searchResult, setSearchResult] = useState<TaxPayer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSearchResult(null);

    try {
      const result = await backend.getTaxPayerByTID(BigInt(tid));
      if (result.length > 0) {
        setSearchResult(result[0]);
      } else {
        setError('No TaxPayer found with the given TID');
      }
    } catch (error) {
      console.error('Error searching for tax payer:', error);
      setError('An error occurred while searching');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '300px' }} className="retro-container">
      <TextField
        label="Search by TID"
        variant="outlined"
        value={tid}
        onChange={(e) => setTid(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        className="retro-input"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={loading}
        fullWidth
        className="retro-button"
      >
        {loading ? <CircularProgress size={24} sx={{ color: '#000000' }} /> : 'Search'}
      </Button>
      {error && (
        <Typography color="error" sx={{ mt: 2, color: '#FF0000' }}>
          {error}
        </Typography>
      )}
      {searchResult && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: '#FFFF00' }}>Search Result:</Typography>
          <Typography sx={{ color: '#33FF33' }}>TID: {searchResult.tid.toString()}</Typography>
          <Typography sx={{ color: '#33FF33' }}>Name: {searchResult.firstName} {searchResult.lastName}</Typography>
          <Typography sx={{ color: '#33FF33' }}>Address: {searchResult.address}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TaxPayerSearch;
