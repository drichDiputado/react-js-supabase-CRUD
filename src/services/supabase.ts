import { createClient } from '@supabase/supabase-js'


const supabase_url = 'https://abradshnhhqvpshnntci.supabase.co';
const supabase_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicmFkc2huaGhxdnBzaG5udGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzI2NTYsImV4cCI6MjA3NTE0ODY1Nn0.8pYZHlGO2h5ThdoR6cr3OlhyA9aJpjDomN_BGAHiSUo';

export const supabase = createClient(supabase_url, supabase_anon_key);