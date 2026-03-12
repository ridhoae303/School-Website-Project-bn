# SMK Patriot 1 Website - System Architecture & Database Design

## Overview
This is a complete rebuild of the SMK Patriot 1 website with a modern, scalable backend architecture. The new system uses a layered approach based on the OSI model principles to separate concerns and maintain clean code organization.

## Architecture Layers (Based on OSI Model Principles)

### Layer 1: Physical/Transport Layer (Network Communication)
**What happens:** HTTP/HTTPS requests between client (browser) and server
- Browser sends requests to: `https://smkpatriot1bekasi.my.id/api/*`
- Server responds with JSON data
- Connection is secure (HTTPS/TLS encryption)
- Technology: Next.js API Routes (`/app/api/route.ts`)

### Layer 2: Session Layer (Authentication & State Management)
**What happens:** User login, session management, permission verification
- User credentials verified against database
- Session tokens created and stored
- Each request validates user identity before processing
- Technology: Session management with secure cookies

### Layer 3: Presentation Layer (Data Formatting)
**What happens:** Data is formatted/serialized for transmission
- Database responses converted to JSON
- Form data from client converted to database format
- Validation rules ensure data integrity before storage
- Technology: TypeScript interfaces, data validation schemas

### Layer 4: Application Layer (Business Logic)
**What happens:** Core application logic and rules
- Login verification logic
- Form submission processing
- Authorization checks (who can access what)
- File upload handling
- Technology: Next.js API route handlers

### Layer 5: Database Layer (Data Storage)
**What happens:** Persistent data storage
- User credentials stored securely (hashed passwords)
- Student registration forms stored
- Downloaded forms tracked
- All data encrypted at rest
- Technology: PostgreSQL database (Neon or similar)

---

## Current System Request Flow

### Example: Student Registration Submission

```
1. Browser (Client)
   └─> User fills registration form
   └─> Clicks "Submit" button

2. Transport Layer (HTTP Request)
   └─> POST /api/registration
   └─> Includes: form data, student info, file uploads

3. Session Layer
   └─> Server receives request
   └─> Checks user authentication
   └─> Verifies user has permission to submit

4. Presentation Layer
   └─> Validates form data format
   └─> Checks required fields
   └─> Ensures data types are correct

5. Application Layer
   └─> Business logic processes registration
   └─> Generates registration number
   └─> Creates submission record
   └─> Sends confirmation email

6. Database Layer
   └─> Stores registration in `registrations` table
   └─> Stores student info in `students` table
   └─> Records submission timestamp
   └─> Updates registration status

7. Response Back (Layers 5→1)
   └─> Database returns success/error
   └─> Business logic generates response
   └─> Formatted JSON sent to client
   └─> Browser receives confirmation
```

---

## Comparison: Old vs New System

### Old System (Reference Context Only)
- **Server Path:** `/home/smkb5993/public_html/application/`
- **Database:** Likely MySQL on shared hosting
- **Structure:** Monolithic (all code in one place)
- **Status:** No longer accessible, used only for understanding requirements

### New System (Current Build)
- **Server:** Vercel (serverless)
- **Database:** PostgreSQL (Neon - serverless)
- **Structure:** Modular, API-based
- **Security:** Built-in encryption, automatic backups
- **Scalability:** Auto-scales with traffic
- **Cost:** Pay-per-use (cost-efficient)

---

## API Endpoints & Database Operations

### Authentication Endpoints
```
POST /api/auth/login
  Input: { username, password }
  Process: Verify credentials in users table
  Output: { sessionToken, user }

POST /api/auth/logout
  Process: Invalidate session
  Output: { success }
```

### Registration Endpoints
```
POST /api/registration/submit
  Input: Form data from registration page
  Database Write: INSERT INTO registrations
  Output: { registrationNumber, status }

GET /api/registration/status/:registrationId
  Database Read: SELECT * FROM registrations
  Output: { status, documents, verification }
```

### File Management Endpoints
```
GET /api/forms/download
  Process: Stream PDF file from storage
  Output: File (Formulir-SPMB-2024.pdf)

POST /api/upload/document
  Process: Store file in secure storage
  Database Write: INSERT INTO documents
  Output: { fileId, downloadLink }
```

---

## Database Tables (Design)

### users (Teacher/Admin logins)
```
id (UUID)
username (string) - unique
password (string) - hashed with bcrypt
role (enum) - 'admin', 'teacher', 'staff'
created_at (timestamp)
```

### students (Student registrations)
```
id (UUID)
nisn (string)
nik (string)
full_name (string)
gender (enum)
birth_date (date)
religion (string)
address (text)
phone (string)
email (string)
registration_id (FK to registrations)
created_at (timestamp)
```

### registrations (Submission records)
```
id (UUID)
registration_number (string) - unique
student_id (FK)
major (enum) - 'TKJ', 'TKR', 'TP', 'TITL'
status (enum) - 'submitted', 'verified', 'approved', 'rejected'
submitted_at (timestamp)
verified_at (timestamp)
created_at (timestamp)
```

### documents (Uploaded files)
```
id (UUID)
registration_id (FK)
file_name (string)
file_path (string)
file_type (enum) - 'birth_cert', 'report_card', 'photo'
uploaded_at (timestamp)
```

---

## Security Implementation (7 OSI Layers)

### Layer 1-2: Transport Security
- HTTPS/TLS encryption for all data in transit
- No unencrypted HTTP connections allowed

### Layer 3: Network Security
- Database firewall rules (only app server can access DB)
- IP whitelisting for admin access

### Layer 4: Application Security
- Input validation on all forms
- SQL injection prevention (parameterized queries)
- XSS protection (React auto-escaping)
- CSRF tokens on forms

### Layer 5: Authentication & Authorization
- Passwords hashed with bcrypt (never stored in plain text)
- Role-based access control (RBAC)
- Session expiration (auto-logout after inactivity)

### Layer 6: Data Presentation
- Sensitive data masked in UI (partial phone numbers, etc.)
- Audit logs for all sensitive operations

### Layer 7: Database Security
- Data encrypted at rest
- Regular automated backups
- Least privilege principle (app has minimal DB permissions)
- Row-level security for multi-tenant data

---

## Migration Path from Old System

The old system data was stored on `/home/smkb5993/public_html/` server, but:
- We do NOT have access to that server
- We are NOT migrating old data
- This is a complete, clean rebuild

**New data starts fresh:**
- Student registrations go to new PostgreSQL database
- Forms are stored in new file storage system
- No legacy data carries over
- Clean audit trail from day one

---

## How to Add New Features

### Example: Adding a "Download Receipt" Feature

1. **Layer 7 (Database):** Add table
   ```sql
   CREATE TABLE receipts (
     id UUID,
     registration_id FK,
     generated_at TIMESTAMP
   )
   ```

2. **Layer 5 (API):** Create endpoint
   ```typescript
   POST /api/receipt/generate
   ```

3. **Layer 4 (Logic):** Business logic
   ```typescript
   Generate PDF receipt
   Store reference in receipts table
   ```

4. **Layer 3 (Validation):** Ensure valid data

5. **Layer 2 (Auth):** Check user can access

6. **Layer 1 (HTTP):** Send file to client

---

## Current Status

✅ **Frontend:** Complete with all pages
✅ **Authentication:** Login page ready
✅ **API Routes:** Structure in place
✅ **Database Design:** Schema defined
⏳ **Database Connection:** Ready for integration
⏳ **File Storage:** Ready for integration

Next steps: Connect to actual database and file storage services.
