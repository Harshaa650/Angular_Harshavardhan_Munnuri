# Angular User Management Application

A modern, responsive Angular application with user authentication, dashboard, and real-time search functionality.

## 📋 Overview

This is a single-page application (SPA) built with Angular that demonstrates:
- **Reactive Forms** with validation
- **HTTP Client** for API integration
- **RxJS Observables** with caching and debouncing
- **Angular Router** for navigation
- **Component-based architecture**

## ✨ Features

### 1. **Login Page** 
- Reactive form with validation
- Fields: Name, Email, Password
- Email format validation
- Required field validation
- Disabled submit button when invalid
- Automatic navigation to Dashboard on success

### 2. **Dashboard Page**
- Fetches user data from public API
- Displays users in a table format
- Table columns: Name, Email, Phone, City
- Loading indicator during data fetch
- Error handling with retry button
- Fast performance with API caching

### 3. **Search & Filter**
- Real-time search functionality
- Filter by Username or ID
- Debounced search (300ms) for performance
- Case-insensitive filtering
- "Searching..." indicator

### 4. **Navigation**
- Logout functionality
- Route protection flow
- Clean URL structure

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 18+ | Frontend framework |
| TypeScript | Latest | Type-safe programming |
| RxJS | Latest | Reactive programming |
| HttpClient | Built-in | HTTP requests |
| Angular Forms | Built-in | Form handling |
| Angular Router | Built-in | Navigation |

## 📂 Project Structure

```
angular-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts      (Login logic)
│   │   │   │   ├── login.component.html    (Login UI)
│   │   │   │   └── login.component.css     (Login styles)
│   │   │   └── dashboard/
│   │   │       ├── dashboard.component.ts  (Dashboard logic)
│   │   │       ├── dashboard.component.html (Dashboard UI)
│   │   │       └── dashboard.component.css (Dashboard styles)
│   │   ├── services/
│   │   │   └── user.service.ts            (API service)
│   │   ├── app.ts                         (Root component)
│   │   ├── app.routes.ts                  (Route config)
│   │   ├── app.config.ts                  (App config)
│   │   └── app.html                       (Root template)
│   ├── main.ts                            (Entry point)
│   ├── index.html                         (HTML template)
│   └── styles.css                         (Global styles)
├── dist/                                  (Build output)
├── package.json                           (Dependencies)
├── angular.json                           (CLI config)
└── tsconfig.json                          (TS config)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Angular CLI (optional)

### Installation

1. **Navigate to project directory:**
```bash
cd angular-app
```

2. **Install dependencies:**
```bash
npm install
```

### Running the Application

**Development Server:**
```bash
npm start
```

Or with Angular CLI:
```bash
ng serve
```

The application will be available at **http://localhost:4200**

**Production Build:**
```bash
ng build --configuration production
```

Output: `dist/angular-app/`

## 📖 Usage Guide

### Login Process
1. Navigate to http://localhost:4200
2. You'll be redirected to login page automatically
3. Fill in the form:
   - **Name**: Any text (e.g., "John Doe")
   - **Email**: Valid email (e.g., "john@example.com")
   - **Password**: Any password (e.g., "password123")
4. Click **Login** button
5. Form validates and navigates to Dashboard

### Dashboard
1. Users are fetched from API on page load
2. A table displays all users with:
   - Name
   - Email
   - Phone
   - City

### Search Feature
1. Type in the search box to filter users
2. Search by:
   - **Username**: Type user's name
   - **ID**: Type numeric ID
3. Results update in real-time
4. Clear search box to see all users again

### Logout
1. Click **Logout** button (top right)
2. Returns to Login page
3. Previous data is cached for fast reload

## 🔌 API Integration

### Data Source
- **Base URL**: https://jsonplaceholder.typicode.com
- **Endpoint**: `/users`
- **Method**: GET
- **Returns**: Array of 10 mock users

### Response Format
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "address": {
      "city": "Gwenborough"
    }
  }
]
```

### Caching Strategy
- API is called only once
- Results are cached with `shareReplay(1)`
- Subsequent dashboard visits use cached data
- **Retry** button clears cache and fetches fresh data

## ⚡ Performance Optimizations

1. **API Caching** - Results cached to avoid repeated requests
2. **Search Debouncing** - 300ms delay prevents excessive filtering
3. **Lazy Rendering** - Only filtered users rendered in table
4. **Memory Management** - Proper cleanup with `OnDestroy`
5. **Standalone Components** - Reduced bundle size

## 🎨 Styling

- **Minimal inline CSS** for simplicity
- **Responsive design** - works on desktop and mobile
- **Clean UI** - focuses on functionality
- No external CSS frameworks (Bootstrap, Tailwind)

### Color Scheme
- Primary: `#007bff` (Blue buttons)
- Danger: `#dc3545` (Red logout button)
- Background: White with light gray accents
- Text: Dark gray for readability

## 🔍 Component Details

### Login Component
```typescript
// Handles form creation and validation
// Navigates to dashboard on success
FormBuilder → Create form
Validators → Email & required validation
Router → Navigate to /dashboard
```

### Dashboard Component
```typescript
// Fetches users and manages search
// Implements caching and debouncing
UserService → API calls
RxJS Subjects → Debounce search
shareReplay → Cache results
```

### User Service
```typescript
// Single API call with caching
// Handles data transformation
// Error handling and retry logic
HttpClient → GET request
Observable → Async data flow
```

## 🐛 Troubleshooting

### Issue: Port 4200 already in use
```bash
ng serve --port 4300
```

### Issue: Dependencies not installed
```bash
npm install
```

### Issue: API not responding
- Check internet connection
- Try **Retry** button in dashboard
- Check if https://jsonplaceholder.typicode.com is accessible

### Issue: Build errors
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
ng serve
```

### Issue: Module not found errors
```bash
# Ensure you're in the correct directory
cd angular-app
npm install
ng serve
```

## 📊 Application Flow

```
User Opens App
    ↓
Redirected to /login
    ↓
User fills form → Click Login
    ↓
Form validates
    ↓
Navigate to /dashboard
    ↓
Fetch users from API (cached)
    ↓
Display table
    ↓
User searches → Filter results instantly
    ↓
User clicks Logout
    ↓
Return to /login
```

## 🔒 Security Notes

- This is a **demo application** without real authentication
- Password is validated on client-side only
- No actual user data is stored
- Uses public API with no sensitive data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/angular-app folder
```

### Netlify
```bash
ng build --configuration production
# Drag & drop dist/angular-app to Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
ng build --configuration production
firebase deploy
```

## 📚 Documentation Files

- **README.md** - This file
- **BUILD_SUMMARY.md** - Build information
- **APP_DOCUMENTATION.md** - Detailed documentation
- **QUICKSTART.md** - Quick start guide

## ✅ Testing

### Manual Testing Checklist

- [ ] Login form validates correctly
- [ ] Valid form submission navigates to dashboard
- [ ] Dashboard loads users from API
- [ ] Search filters by username
- [ ] Search filters by ID
- [ ] Clear search shows all users
- [ ] Logout returns to login page
- [ ] Page reloads use cached data

## 🎓 Learning Resources

- [Angular Official Docs](https://angular.dev)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Angular Router Guide](https://angular.dev/guide/routing)

## 📝 Future Enhancements

- [ ] User authentication with backend
- [ ] User edit/update functionality
- [ ] User delete functionality
- [ ] Pagination for large datasets
- [ ] Sorting by column headers
- [ ] Export to CSV/PDF
- [ ] Dark mode toggle
- [ ] Unit and E2E tests
- [ ] Responsive mobile UI
- [ ] localStorage for session persistence

## 📧 Support

For issues or questions:
1. Check troubleshooting section
2. Review console errors (F12)
3. Check component logic in src/app/
4. Verify API endpoint accessibility
