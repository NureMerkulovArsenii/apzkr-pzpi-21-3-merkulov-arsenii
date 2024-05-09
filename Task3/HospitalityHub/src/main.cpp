#include <Keypad.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <Esp32Servo.h>

//Todo: uncomment for production
//#include <WiFiClientSecure.h>

#define SERVO_PIN 32

#define LED_GREEN_PIN 26
#define LED_RED_PIN 27

#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
#define WIFI_CHANNEL 6

#define ADMIN_PASSWORD "987654321"

AsyncWebServer server(80);

/* Todo: Uncomment for production
WiFiClientSecure client;

const char* root_ca =
"-----BEGIN CERTIFICATE-----\n"
"MIIDLzCCAhcCFDgQQukVtr250xGvky+Xf69cEBHOMA0GCSqGSIb3DQEBCwUAMFQx/\n"
"CzAJBgNVBAYTAnVhMRAwDgYDVQQIDAdVa3JhaW5lMRAwDgYDVQQHDAdLaGFya2l2\n"
"MQ0wCwYDVQQKDARudXJlMRIwEAYDVQQLDAlwenBpLTIxLTMwHhcNMjMxMjE1MjI1\n"
"MzM5WhcNMjQxMjE0MjI1MzM5WjBUMQswCQYDVQQGEwJ1YTEQMA4GA1UECAwHVWty\n"
"YWluZTEQMA4GA1UEBwwHS2hhcmtpdjENMAsGA1UECgwEbnVyZTESMBAGA1UECwwJ\n"
"cHpwaS0yMS0zMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2IPUCage\n"
"jho7w4L/rFXpSPl5tEC2qAXt/xP4lI+eHCyn9QuiP9cZC0BEQw5//Zlrwc1Ba8Vy\n"
"+HBE6hJNGjgpXQrMPpPK3GrF+Sd+iALx18cFhyH8hn3MO9gwrvlTAgUoGN4CRa0E\n"
"tOpW4YSkypiZMwooSTd1//pQ4yldwFXJWhWGUGfpN4y+XrcdqeCP5m4Yx6xxaYu2\n"
"mp/oc1hqRDx5dfjK5sAObiE75kL76pyhn7zzZB0gZWXIAYrCoLxrtwz+ViVXUPll\n"
"JORWtkVXEuwtHtWl54bcyntNIBfQ2SdgntTw3dEyxO8ELWCxdB7sD/c5jpx6SQVQ\n"
"ZzkkGwLJGG9RQQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCDrEuTQ3sqkFOiL7TD\n"
"E2gjGgjWA4ZUwlRnE4PMAXtw3zpPuOW1BIsOVTuKTNIiSbqg0K5eM7/c5Qt6/xBW\n"
"y0JNxvEr/grBjEuIPUgk4JaeaOmFtztgfLSlWYbNT6aGwArzb/7Iu8lqm5gA0ETU\n"
"+0n5EEIFZtTjDCVS35PkCJ1ZMqNQeURe+bwg7kzFqR26un6diJSMnTDaxDxDfAuT\n"
"PO+VdENs8zNeC2U5Bx9iUpGXNd7i8Izg5kYJR5FWWomj+BIbj3veODXYBCRkvSi6\n"
"h1Ewjlze5xo98RNDbRiOH1eF4QOlIh2k537cuUuCVgHDdbnY+LeaTlTiq9YaUGze\n"
"+Jsx\n"
"-----END CERTIFICATE-----\n";

*/

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
void setupEndPoints();
bool checkPassword(String password, String inputPassword);

void setup() {
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");
  servo.attach(SERVO_PIN);
  servo.write(-90);

  //Todo: uncomment for production
  //client.setCACert(root_ca);

  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(LED_RED_PIN, OUTPUT);

  digitalWrite(LED_RED_PIN, HIGH);
  digitalWrite(LED_GREEN_PIN, LOW);

  connectToWifi();

  setupEndPoints();

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
      if (isAdmin)
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

  digitalWrite(LED_RED_PIN, LOW);
  digitalWrite(LED_GREEN_PIN, HIGH);

  servo.write(180);
}


void lockDoor()
{
  Serial.println("Locking door");

  digitalWrite(LED_RED_PIN, HIGH);
  digitalWrite(LED_GREEN_PIN, LOW);

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
    if (isAdmin) {
      apiKey = request->getParam("api-key")->value();
      request->send(200, "text/plain", "true");
    } else {
      request->send(403, "text/plain", "Forbidden");
    }
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


bool checkPassword(String password, String inputPassword)
{
  return password == inputPassword;
}
