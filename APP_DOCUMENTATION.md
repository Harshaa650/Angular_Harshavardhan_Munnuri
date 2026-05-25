# Angular User Management Application

This is a simple Angular application with the following features:

## Features

### 1. **Login Page** (`/login`)
- Reactive form with Name, Email, and Password fields
- Form validation
- On successful submission, navigates to the Dashboard page

### 2. **Dashboard Page** (`/dashboard`)
- Fetches users from the public API: https://jsonplaceholder.typicode.com/users
- Displays users in a table with columns: Name, Email, Phone, City
- Data fetched using Angular HTTP Client with Observables
- Logout functionality to return to Login page

### 3. **Search Feature**
- Search input to filter users
- Filter by:
  - Username (Name)
  - ID (numeric ID)
- Real-time filtering as you type

### 4. **Routing**
- `/login` → Login page (default route redirects here)
- `/dashboard` → Dashboard page

## Project Structure

```
src/app/
├── components/
│   ├── login/
│   │   ├── login.component.ts
│   │   ├── login.component.html
│   │   └── login.component.css
│   └── dashboard/
│       ├── dashboard.component.ts
│       ├── dashboard.component.html
│       └── dashboard.component.css
├── services/
│   └── user.service.ts
├── app.ts (main component)
├── app.routes.ts (routing configuration)
├── app.config.ts (app configuration)
└── app.html (root template)
```

## Technologies Used
- **Angular 18+** (latest)
- **Reactive Forms** for login form
- **HttpClient** for API calls
- **RxJS Observables** for async data handling
- **Angular Router** for navigation
- **CSS** for minimal styling

## Getting Started

### Prerequisites
- Node.js and npm installed
- Angular CLI installed globally: `npm install -g @angular/cli`

### Installation

1. Navigate to the project directory:
```bash
cd angular-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Running the Application

#### Development Server
```bash
ng serve
```
or
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

#### Production Build
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. **Start the application** using `ng serve`
2. **Navigate to Login Page** - you'll be redirected here automatically
3. **Fill the Login Form**:
   - Name: Any text (e.g., "John Doe")
   - Email: Valid email format (e.g., "john@example.com")
   - Password: Any password
4. **Click Login** - you'll be redirected to the Dashboard
5. **View Users** - a table of users from the API will load
6. **Search Users**:
   - Type in the search box to filter by username or ID
   - Results update in real-time
7. **Logout** - click the Logout button to return to the Login page

## Styling

The application uses minimal inline CSS for a clean, simple interface:
- Login form is centered with a simple card design
- Dashboard table is responsive with basic styling
- All styling is inline HTML for simplicity

## Notes

- Form validation is implemented using Angular Reactive Forms
- The application uses standalone components (Angular 14+)
- API data is fetched without any authentication
- No backend is required - uses public JSON Placeholder API
- The application handles loading and error states

## Future Enhancements

- Add authentication with real backend
- Add more user details and pagination
- Implement user edit/delete functionality
- Add sorting to table columns
- Implement persistent login using localStorage
- Add styling with Bootstrap or Tailwind CSS
