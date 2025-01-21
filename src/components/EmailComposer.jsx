import { useToast } from "@/hooks/use-toast";
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

// Change to named export
export const EmailComposer = () => {
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
      const response = await axios.post("https://smart-ai-mail-assistant.onrender.com/api/email/generate", {
         content:emailContent,
        tone
      });
      // console.log("Response from server:", response.data);
      // console.log(emailContent);
      
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
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
    <Container className="py-8 glass-card  my-8 rounded-lg">
     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Email Reply Generator
      </h2>

      <Box className="space-y-9 rounded-lg">
        <TextField
          fullWidth
          multiline
          rows={10}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="bg-white/50 glass-card "
          
        />

        <FormControl fullWidth>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            className="bg-white/50 glass-card"
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
          className="button-gradient rounded-lg"
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
            // InputProps={{ readOnly: true }}
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