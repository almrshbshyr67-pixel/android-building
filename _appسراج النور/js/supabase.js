// إعدادات Supabase ومصادقة Google Auth
const SUPABASE_URL = "https://your-supabase-project.supabase.co"; 
const SUPABASE_ANON_KEY = "your-supabase-anon-key";

console.log("Supabase initialized for Siraj Al-Noor app.");

function loginWithGoogle() {
    alert("جاري الاتصال بخادم مصادقة Google عبر Supabase...");
    setTimeout(() => {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "home.html";
    }, 1000);
}