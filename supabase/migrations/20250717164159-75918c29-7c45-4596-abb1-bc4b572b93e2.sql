-- Create waitlist table to store user signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public waitlist)
CREATE POLICY "Allow public waitlist signup" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading of waitlist data
CREATE POLICY "Prevent public access to waitlist data" 
ON public.waitlist 
FOR SELECT 
USING (false);