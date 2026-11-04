import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function initializeSupabase() {
  if (!supabase) {
    window.applySupabaseSession?.(null);
    return;
  }

  const { data, error } = await supabase.auth.getSession();
  if (error) console.error('Não foi possível recuperar a sessão:', error.message);
  window.applySupabaseSession?.(data?.session ?? null);

  supabase.auth.onAuthStateChange((event, session) => {
    window.applySupabaseSession?.(session);
    if (event === 'PASSWORD_RECOVERY') window.navigateTo?.('redefinir-senha');
    if (event === 'SIGNED_OUT') window.navigateTo?.('home');
  });
}
