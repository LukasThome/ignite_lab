import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log("Apertou");
export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl40z908jo01xpc26j4ukg/master',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwMjQ4NDQsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG5sNDB6OTA4am8wMXhwYzI2ajR1a2cvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTY4ZDE3YjMtNzBhOC00MjBlLWJiN2ItZDE3ZjU5ZTcxZmUyIiwianRpIjoiY2w0cm1mbzQ4MWFrZTAxejZmYzVqNDY2OCJ9.eW152ZHg5VbU7wJCcmIyT8ymhMYlk_tlcnR7bESPKbQRzrYo9wmmkvgFbjUdBI5yR6_VnCmBlibSEiI2oviie3jbeXRF2ECa5w-9SGiS58GodNga26bf_B1GdemSgzOKH9S002Gh_F4NTGPh6A23xuuS70l9xSluNWFYfoGI90vM4OtsoerarRvoc96zbBKYAZcSzdetOVxWn9WxneeWZcIMozVX4ke5c_J8FP8CXkc6yTaN8DamXyZFsPNaGRY7HOI5fAdLVaCDxzS1NdXcdkG9IP5x1u2kP-BPQw_aalLc9viHU3-RwEq54gakZIEala_f4CGx1IL8naqStLiaO3iufM96x-3eqFgpISQcv6RlYAgScMNT53jFMFyuKhDV2Q1BZ58sY85VdOff9AUehMhwDQF8zqFAFcVCUnJpDZWqCYpJD2KmQq0mb2cT-3Hnd_qy5jmZ4HHTZfjxJpsw1CHAiIoeNfoTcylLUVHYRPWrGz0pQCsk9cUxXSoS3yNhlgxt5LKHojqKroy_cIa4gUUk1vjauVtUZvCPMZNB_LayTEaWe3YycyebMj6D64PwSs-Xqf7i3fdxmeuTRy4oqyzg7Wphuai6IhdFGnO7IL8j-QGQl-6fmuDeKHpGpD4yLD-b0HNq08cfZjj5fm7JOzWNo-1IlDyBdGjA7VyowgY'
  },
  cache: new InMemoryCache(),
})
