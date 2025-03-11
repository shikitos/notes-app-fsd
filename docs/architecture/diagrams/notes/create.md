```mermaid
sequenceDiagram
  participant User
  participant Frontend
  participant Backend
  participant Database

  User->>Frontend: Creates Note
  Frontend->>Backend: POST /api/notes {body}
  
  alt Not Authorized
    Backend-->>Frontend: 401 Unauthorized
    Frontend-->>User: "Unauthorized access"
  else Validating Request
    Backend->>Backend: Validate note content
    alt Validation Fails
      Backend-->>Frontend: 400 Bad Request
      Frontend-->>User: "Validation error: Missing/invalid note content"
    else Valid Request
      Backend->>Database: INSERT INTO notes (body)
      alt Database Insertion Fails
        Database-->>Backend: Error
        Backend-->>Frontend: 500 Internal Server Error
        Frontend-->>User: "Note creation failed"
      else Database Insertion Succeeds
        Database-->>Backend: OK
        Backend-->>Frontend: 201 Created
        Frontend-->>User: "Note saved"
      end
    end
  end

