#include <Esp32Servo.h>

#define LED_GREEN_PIN 26
#define LED_RED_PIN 27

void setupPins(Servo* servo, String* roomAccessCode);

void processKeypadSequence(bool *isAdmin);

bool checkPassword(String* password, String* inputPassword);

void unlockDoor();

void lockDoor();