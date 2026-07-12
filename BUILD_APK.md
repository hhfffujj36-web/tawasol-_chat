# 📱 بناء APK بدون كمبيوتر (GitHub Actions)

طريقة مجانية 100%، ما تحتاجش Android Studio ولا EAS.

## الخطوات (مرة واحدة فقط)

### 1. اربط المشروع بـ GitHub
- في Lovable فوق يمين: **GitHub → Connect to GitHub**
- اختر حسابك → **Create Repository**

### 2. شغّل البناء
- افتح الـ repo على github.com من الهاتف
- **Actions** (فوق) → **Build Android APK** (يسار)
- اضغط **Run workflow** → **Run workflow** (أخضر)
- انتظر ~7 دقايق ⏳

### 3. حمّل الـ APK
- بعد ما ينتهي البناء (علامة ✓ خضراء)
- روح لـ **Releases** (يمين الصفحة الرئيسية للـ repo)
- شوف آخر release → اضغط `app-debug.apk` → يتحمل مباشرة على الهاتف 📥

### 4. ثبّت
- افتح ملف APK من الهاتف
- إذا طلب: **"السماح بالتثبيت من هذا المصدر"** → موافق
- ✓ التطبيق مثبّت

## كل ما تعدّل الكود
Lovable يعمل push تلقائي → GitHub Actions يبني APK جديد → تلقاه في Releases 🚀

---

**ملاحظة:** EAS Build مخصص لـ Expo/React Native فقط، ما يشتغلش مع Capacitor/Vite. GitHub Actions هي الأنسب.
