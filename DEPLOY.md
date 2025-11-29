# הוראות פריסה ל-GitHub Pages

## שלב 1: יצירת Repository ב-GitHub

1. היכנס ל-GitHub ויצור repository חדש
2. שם ה-repository יכול להיות: `black-diamond-luxury` או כל שם אחר
3. **אל תסמן** "Initialize this repository with a README"

## שלב 2: העלאת הקוד ל-GitHub

פתח Terminal/PowerShell בתיקיית הפרויקט והרץ את הפקודות הבאות:

```bash
# בדוק אם יש כבר git repository
git status

# אם אין, אתחל git repository
git init

# הוסף את כל הקבצים
git add .

# צור commit ראשון
git commit -m "Initial commit - Black Diamond Luxury website"

# הוסף את ה-remote repository (החלף YOUR_USERNAME ו-YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# העלה את הקוד
git branch -M main
git push -u origin main
```

## שלב 3: הגדרת GitHub Pages

1. היכנס ל-repository ב-GitHub
2. לחץ על **Settings** (הגדרות)
3. בתפריט השמאלי, לחץ על **Pages**
4. תחת **Source**, בחר **GitHub Actions**
5. שמור את ההגדרות

## שלב 4: עדכון Base Path (אם צריך)

אם שם ה-repository שלך **לא** `black-diamond-luxury`, עדכן את `vite.config.ts`:

```typescript
base: '/YOUR_REPO_NAME/',
```

## שלב 5: הפעלת GitHub Actions

1. לאחר push, GitHub Actions יתחיל לבנות את האתר אוטומטית
2. תוכל לראות את הסטטוס תחת **Actions** ב-repository
3. לאחר שהבנייה תסתיים, האתר יהיה זמין בכתובת:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## הערות חשובות

- **Base Path**: אם אתה משתמש ב-custom domain, השאר `base: '/'`
- **React Router**: האתר כבר מוגדר לעבוד עם GitHub Pages
- **Build**: כל push ל-main יגרום לבנייה ופריסה אוטומטית

## בדיקת הבנייה המקומית

לפני העלאה, תוכל לבדוק שהבנייה עובדת:

```bash
npm run build
npm run preview
```

## בעיות נפוצות

### 404 על דפים פנימיים
- ודא ש-React Router מוגדר עם `HashRouter` במקום `BrowserRouter` (אם צריך)
- או הגדר 404.html שמפנה ל-index.html

### תמונות לא נטענות
- ודא שכל התמונות נמצאות בתיקיית `src/assets`
- ודא שהנתיבים נכונים

### Base Path שגוי
- עדכן את `base` ב-`vite.config.ts` לשם ה-repository שלך

