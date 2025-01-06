import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '', // Found in sanity.json or Sanity dashboard
    dataset: 'production', // Default dataset
    apiVersion: '2023-01-01', // Use a specific version or current date
    useCdn: true, // Enables faster response, disable for real-time editing
});

export default client;
