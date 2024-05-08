#include <Keypad.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>

#include <Esp32Servo.h>

#define SERVO_PIN 32

#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
#define WIFI_CHANNEL 6

#define ADMIN_PASSWORD "1234"

AsyncWebServer server(80);

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

bool isAdmin = false;
bool amdinLedState = false;

Servo servo;



void connectToWifi();
void startWebServer();
void setupEndPoints(); // Declare the setupEndPoints function

bool checkPassword(String password, String inputPassword);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");
  servo.attach(SERVO_PIN);
  servo.write(-90);


  connectToWifi();

  setupEndPoints(); // Call the setupEndPoints function

  server.begin();
}

String keyPadSequence = "";

String roomAccessCode = "123456";

void unlockDoor();
void lockDoor();

void loop() {
  char key = keypad.getKey();

  if (key != NO_KEY) {
    Serial.println(key);

    if (key == '#')
    {
      Serial.println("Checking password");
      Serial.println(keyPadSequence);
      Serial.println(ADMIN_PASSWORD);

      if (checkPassword(keyPadSequence, ADMIN_PASSWORD))
      {
        isAdmin = true;
        Serial.println("Admin mode activated");
      }
      else if (checkPassword(keyPadSequence, roomAccessCode))
      {
        unlockDoor();
      }
      else
      {
        lockDoor();
      }

      keyPadSequence = "";
    }
    else if (key == '*')
    {
      if (isAdmin)\
      {
        isAdmin = false;
        Serial.println("Admin mode deactivated");
      }
      lockDoor();
      keyPadSequence = "";
    }
    else
    {
      keyPadSequence += key;
    }
  }

  delay(10); // this speeds up the simulation
}



void unlockDoor()
{
  Serial.println("Unlocking door");

  servo.write(180);

}



void lockDoor()
{
  Serial.println("Locking door");

  servo.write(-90);
}



void connectToWifi()
{
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD, WIFI_CHANNEL);
  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("");
  Serial.println("WiFi connected");
}


String apiKey; // Variable to store the API key

void setupEndPoints()
{
  server.on("/set-api-key", HTTP_POST, [](AsyncWebServerRequest* request) {
    apiKey = request->getParam("api-key")->value(); // Save the API key to the variable
    request->send(200, "text/plain", "true");
    });

  server.on("/get-api-key", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(200, "application/json", apiKey);
    });

  server.on("/set-doorlock-code", HTTP_POST, [](AsyncWebServerRequest* request) {
    String apiKeyHeader = request->header("x-api-key");
    if (apiKeyHeader == apiKey) {
      String newCode = request->getParam("code")->value();
      roomAccessCode = newCode;
      request->send(200, "text/plain", "true");
    }
    else {
      request->send(401, "text/plain", "Unauthorized");
    }
    });

  server.on("/reset-doorlock-code", HTTP_POST, [](AsyncWebServerRequest* request) {
    String apiKeyHeader = request->header("x-api-key");
    if (apiKeyHeader == apiKey) {
      roomAccessCode = "abcdef";
      request->send(200, "text/plain", "true");
    }
    else {
      request->send(401, "text/plain", "Unauthorized");
    }
    });

}


#pragma region Keypad reader

bool checkPassword(String password, String inputPassword)
{
  return password == inputPassword;
}


#pragma endregion
