#include <Keypad.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>


#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
// Defining the WiFi channel speeds up the connection:
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


void connectToWifi();
void startWebServer();
void setupEndPoints(); // Declare the setupEndPoints function

bool checkPassword(String password, String inputPassword);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");

  connectToWifi();

  setupEndPoints(); // Call the setupEndPoints function

  server.begin();
}

String keyPadSequence = "";

String roomAccessCode = "123456";

void loop() {
  char key = keypad.getKey();

  if (key != NO_KEY) {
    Serial.println(key);    

    if(key == '#')
    {
      Serial.println("Checking password");
      Serial.println(keyPadSequence);
      Serial.println(ADMIN_PASSWORD);

      if(checkPassword(keyPadSequence, ADMIN_PASSWORD))
      {
        isAdmin = true;
        Serial.println("Admin mode activated");
      }
      else if(checkPassword(keyPadSequence, roomAccessCode))
      {
        Serial.println("Room access granted");
      }
      else
      {
        Serial.println("Access denied");
      }      

      keyPadSequence = "";
    }
    else if(key == '*')
    {
      isAdmin = false;
      Serial.println("Admin mode deactivated");
      keyPadSequence = "";
    }
    else
    {
      keyPadSequence += key;
    }
  }

  // put your main code here, to run repeatedly:
  delay(10); // this speeds up the simulation
}

void connectToWifi()
{
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD, WIFI_CHANNEL);
  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}


void setupEndPoints()
{
  server.on("/", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(200, "text/plain", "Hello, ESP32!");
    });

  server.on("/key", HTTP_GET, [](AsyncWebServerRequest* request) {
    char key = keypad.getKey();
    if (key != NO_KEY) {
      request->send(200, "text/plain", String(key));
    }
    else {
      request->send(200, "text/plain", "No key pressed");
    }
    });
}


#pragma region Keypad reader

bool checkPassword(String password, String inputPassword)
{
  return password == inputPassword;
}


#pragma endregion
