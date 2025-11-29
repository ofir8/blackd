# הוראות להפעלת GitHub Pages

## הבעיה: 404 Error

אם אתה מקבל 404, זה אומר ש-GitHub Pages לא מופעל ב-repository.

## פתרון - שלבים:

### 1. הפעל GitHub Pages ב-Repository Settings

1. היכנס ל: https://github.com/ofir8/BlackDaimond
2. לחץ על **Settings** (הגדרות) בראש העמוד
3. בתפריט השמאלי, לחץ על **Pages**
4. תחת **Source**, בחר: **GitHub Actions**
5. לחץ **Save** (שמור)

### 2. הפעל את ה-Workflow ידנית (אם צריך)

1. לחץ על **Actions** בראש העמוד
2. לחץ על **Deploy to GitHub Pages** משמאל
3. לחץ על **Run workflow** → **Run workflow**

### 3. המתן לבנייה

- הבנייה לוקחת 2-3 דקות
- תוכל לראות את הסטטוס תחת **Actions**
- לאחר שהבנייה תסתיים, האתר יהיה זמין ב:
  - **https://ofir8.github.io/BlackDaimond/**

## בדיקה שהכל עובד:

1. ודא שה-workflow רץ תחת **Actions**
2. ודא שהבנייה הצליחה (ירוק ✓)
3. ודא ש-GitHub Pages מופעל תחת **Settings → Pages**

## אם עדיין יש בעיה:

- בדוק את ה-logs תחת **Actions** לראות מה השגיאה
- ודא שה-`base` ב-`vite.config.ts` תואם לשם ה-repository: `/BlackDaimond/`

