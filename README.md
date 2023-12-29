# Doctor Appointment API Documentation

## Overview

The Doctor Appointment API allows users to manage appointments for doctors. It provides functionality to retrieve, add, update, and delete appointments. Additionally, users can search for appointments based on various criteria.

# Doctor Appointment API

This is a RESTful API for managing doctor appointments. It's built with Node.js and Express.

## Features

- Create a new appointment
- Get all appointments
- Get a specific appointment by ID
- Update an appointment by ID
- Delete an appointment by ID
- Search for appointments by customer name, service, and time

## Installation

Follow these steps to install the project:

1. Clone this repository:

git clone https://github.com/yourusername/doctor_appointment_api.git

2. Navigate to the project directory:

cd doctor_appointment_api

3. Install the dependencies:

npm install

## Usage

To start the server, run:

npm start

The server will start on http://localhost:3000.

You can make requests to the API endpoints using tools like curl or Postman. For example, to get all appointments, you can send a GET request to http://localhost:3000/reservations.

## Testing

To run the tests, use:

npm test

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT (https://choosealicense.com/licenses/mit/)

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of a request. Common status codes include:

- `200 OK`: Successful operation
- `201 Created`: Resource successfully created
- `204 No Content`: Successful operation with no response body
- `400 Bad Request`: Invalid request format or parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Endpoints

### 1. Get All Reservations

- **Endpoint:** `/reservations`
- **Method:** `GET`
- **Description:** Retrieve all reservations in the calendar.
- **Response:**
  - `200 OK`: Successful operation
    - Example:
      ```json
      {
        "reservations": [
          {
            "id": 1,
            "doctor": "Dr. Smith",
            "customerName": "John Doe",
            "time": "2023-01-01T10:00:00",
            "durationMinutes": 30
          }
          // Additional reservations etc...
        ]
      }
      ```

### 2. Add New Reservation

- **Endpoint:** `/reservations`
- **Method:** `POST`
- **Description:** Add a new reservation to the calendar.
- **Request:**
  - Body:
    ```json
    {
      "doctor": "Dr. Smith",
      "customerName": "John Doe",
      "time": "2023-01-02T14:30:00",
      "durationMinutes": 45
    }
    ```
- **Response:**
  - `201 Created`: Reservation created successfully

### 3. Get Reservation by ID

- **Endpoint:** `/reservations/{reservationId}`
- **Method:** `GET`
- **Description:** Retrieve a reservation by its ID.
- **Parameters:**
  - `{reservationId}`: ID of the reservation to retrieve
- **Response:**
  - `200 OK`: Successful operation
    - Example:
      ```json
      {
        "id": 1,
        "doctor": "Dr. Smith",
        "customerName": "John Doe",
        "time": "2023-01-01T10:00:00",
        "durationMinutes": 30
      }
      ```

### 4. Update Reservation

- **Endpoint:** `/reservations/{reservationId}`
- **Method:** `PUT`
- **Description:** Update an existing reservation.
- **Parameters:**
  - `{reservationId}`: ID of the reservation to update
- **Request:**
  - Body:
    ```json
    {
      "doctor": "Dr. Smith",
      "customerName": "Jane Doe",
      "time": "2023-01-02T15:00:00",
      "durationMinutes": 60
    }
    ```
- **Response:**
  - `200 OK`: Reservation updated successfully

### 5. Delete Reservation

- **Endpoint:** `/reservations/{reservationId}`
- **Method:** `DELETE`
- **Description:** Delete a reservation by its ID.
- **Parameters:**
  - `{reservationId}`: ID of the reservation to delete
- **Response:**
  - `204 No Content`: Reservation deleted successfully

### 6. Search Reservations

- **Endpoint:** `/reservations/search`
- **Method:** `GET`
- **Description:** Search reservations based on service, customer name, and time period.
- **Parameters:**
  - `service` (optional): Service provided by the doctor
  - `customerName` (optional): Customer name
  - `startTime` (optional): Start time for the search period
  - `endTime` (optional): End time for the search period
- **Response:**
  - `200 OK`: Successful operation
    - Example:
      ```json
      {
        "reservations": [
          {
            "id": 1,
            "doctor": "Dr. Smith",
            "customerName": "John Doe",
            "time": "2023-01-01T10:00:00",
            "durationMinutes": 30
          }
          // Additional reservations etc....
        ]
      }
      ```

## Conclusion

This documentation provides a comprehensive guide on using the Doctor Appointment API. For detailed request and response specifications, refer to the provided examples and the OpenAPI 3.0 YAML file.
