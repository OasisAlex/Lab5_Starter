# Lab 5 - Starter

Alex Yang

## answer

1. No,The "message" feature, which allows a user to write and send a message to another user, involves multiple components and their interactions, such as the user interface, network communications, server-side processing, and database interactions. It is clear that the message feature is on a big scale of whole application. It's not suitable to unit test.

2. Yes,  This feature has a clear, isolated functionality: it prevents the user from typing more than 80 characters. since the max message length is a small scale of whole message application. It suitable to do unit test on it.