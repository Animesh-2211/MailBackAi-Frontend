import { useState } from 'react';
import axios from 'axios';
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useToast } from "@/hooks/use-toast";

const EmailComposer = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!emailContent) {
      toast({
        title: "Error",
        description: "Please enter email content",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // This URL should be replaced with your actual backend endpoint
      const response = await axios.post("/api/email/generate", {
        emailContent,
        tone
      });
      
      setGeneratedReply(response.data);
      toast({
        title: "Success",
        description: "Reply generated successfully",
      });
    } catch (error) {
      console.error('Error generating reply:', error);
      toast({
        title: "Error",
        description: "Failed to generate email reply. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReply);
    toast({
      title: "Copied",
      description: "Reply copied to clipboard",
    });
  };

  return (
    <Container className="py-8 glass-card my-8 rounded-lg">
      <Typography variant="h3" component="h2" className="mb-6 text-center">
        Email Reply Generator
      </Typography>

      <Box className="space-y-6">
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="bg-white/50"
        />

        <FormControl fullWidth>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            className="bg-white/50"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
          className="button-gradient"
        >
          {loading ? <CircularProgress size={24} /> : "Generate Reply"}
        </Button>
      </Box>

      {generatedReply && (
        <Box className="mt-8 space-y-4">
          <Typography variant="h6" gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedReply}
            InputProps={{ readOnly: true }}
            className="bg-white/50"
          />
          
          <Button
            variant="outlined"
            onClick={handleCopy}
            className="mt-4"
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default EmailComposer;