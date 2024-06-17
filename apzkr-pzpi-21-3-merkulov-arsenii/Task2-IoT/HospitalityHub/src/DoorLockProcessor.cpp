#include <Arduino.h> // Include the necessary header file
#include <Esp32Servo.h>
#include <Keypad.h>
#include "../lib/DoorLockProcessor.h"

#pragma region Keypad

const uint8_t ROWS = 4;
const uint8_t COLS = 3;
char keys[ROWS][COLS] = {
  { '1', '2', '3' },
  { '4', '5', '6' },
  { '7', '8', '9' },
  { '*', '0', '#' }
};

uint8_t colPins[COLS] = { 21, 22, 23 }; // Pins connected to C1, C2, C3
uint8_t rowPins[ROWS] = { 19, 18, 17, 4 }; // Pins connected to R1, R2, R3, R4

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

#pragma endregion


String* adminPassword = new String("987654321");

String* keyPadSequence = new String("");

Servo* _servo;

String* _roomAccessCode;

void setupPins(Servo* servo, String* roomAccessCode)
{
  _servo = servo;
  _roomAccessCode = roomAccessCode;

  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(LED_RED_PIN, OUTPUT);

  digitalWrite(LED_RED_PIN, HIGH);
  digitalWrite(LED_GREEN_PIN, LOW);

}

void processKeypadSequence(bool* isAdmin)
{
  char key = keypad.getKey();

  if (key == NO_KEY) {
    return;
  }

  if (key == '#')
  {
    Serial.println("Checking password");

    if (checkPassword(keyPadSequence, adminPassword))
    {
      *isAdmin = true;
      Serial.println("Admin mode activated");
    }
    else if (checkPassword(keyPadSequence, _roomAccessCode))
    {
      unlockDoor();
    }
    else
    {
      lockDoor();
    }

    keyPadSequence = new String("");
  }
  else if (key == '*')
  {
    if (*isAdmin)
    {
      *isAdmin = false;
      Serial.println("Admin mode deactivated");
    }
    lockDoor();
    keyPadSequence = new String("");
  }
  else
  {
    *keyPadSequence += key;
  }

}

bool checkPassword(String* password, String* inputPassword)
{
  return *password == *inputPassword;
}

void unlockDoor()
{
  Serial.println("Unlocking door");

  digitalWrite(LED_RED_PIN, LOW);
  digitalWrite(LED_GREEN_PIN, HIGH);

  _servo->write(180);
}


void lockDoor()
{
  Serial.println("Locking door");

  digitalWrite(LED_RED_PIN, HIGH);
  digitalWrite(LED_GREEN_PIN, LOW);

  _servo->write(-90);
}
