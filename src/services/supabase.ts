import { createClient } from '@supabase/supabase-js'


<<<<<<< HEAD
const supabase_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const supabase_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabase_PROJECT_URL, supabase_ANON_KEY);
=======
const supabase_url = 'https://abradshnhhqvpshnntci.supabase.co';
const supabase_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicmFkc2huaGhxdnBzaG5udGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzI2NTYsImV4cCI6MjA3NTE0ODY1Nn0.8pYZHlGO2h5ThdoR6cr3OlhyA9aJpjDomN_BGAHiSUo';

export const supabase = createClient(supabase_url, supabase_anon_key);
>>>>>>> 6420bdb282800a8a0ea05b9f0c904da2b508009d
