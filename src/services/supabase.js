import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mlysfxratxtragsiwsxk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seXNmeHJhdHh0cmFnc2l3c3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNjgxNjMsImV4cCI6MjAzNzk0NDE2M30.F6O7ZZ_zdBCgKM6QViyZZCslPnDbrzNT9viLinIvn2o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
