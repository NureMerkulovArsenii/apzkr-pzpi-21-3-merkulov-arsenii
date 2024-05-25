#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <Esp32Servo.h>
#include "../lib/ApiHandler.h"
#include "../lib/DoorLockProcessor.h"

//Todo: uncomment for production
//#include <WiFiClientSecure.h>

#define SERVO_PIN 32

#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
#define WIFI_CHANNEL 6

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

bool* isAdmin = new bool(false);
bool amdinLedState = false;

Servo* servo = new Servo();

void connectToWifi();
void startWebServer();
//bool checkPassword(String password, String inputPassword);

String* roomAccessCode = new String("123456");

void setup() {
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");
  servo->attach(SERVO_PIN);
  servo->write(-90);

  //Todo: uncomment for production
  //client.setCACert(root_ca);

  setupPins(servo, roomAccessCode);

  connectToWifi();

  setupEndPoints(server, isAdmin, roomAccessCode);

  server.begin();
}


void unlockDoor();
void lockDoor();

void loop() {

  processKeypadSequence(isAdmin);

  if (*isAdmin && !amdinLedState)
  {
    amdinLedState = true;
    digitalWrite(LED_GREEN_PIN, HIGH);
  }

  delay(10); // this speeds up the simulation
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
