import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcowovinnyeyjwwuehca.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjb3dvdmlubnlleWp3d3VlaGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5MTc0MTksImV4cCI6MjEwNjQ5MzQxOX0.2qQItfkhQ7vKl03IXmu1xsQsAQYRXHCUCmE3B9EFjnw'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
