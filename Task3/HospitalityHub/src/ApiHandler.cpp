#include <ESPAsyncWebServer.h>
#include "../lib/ApiHandler.h"

String apiKey; // Variable to store the API key

void setupEndPoints(AsyncWebServer& server, bool* isAdmin, String* roomAccessCode)
{
  Serial.println("Setting up endpoints");
  
  server.on("/set-api-key", HTTP_POST, [isAdmin](AsyncWebServerRequest* request) {
  
    Serial.println(*isAdmin);

    if (*isAdmin == true) {
        apiKey = request->getParam("api-key")->value();
        request->send(200, "text/plain", "true");
    } else {
        request->send(403, "text/plain", "Forbidden");
    }
  });

  server.on("/get-api-key", HTTP_GET, [isAdmin](AsyncWebServerRequest* request) {
    if(*isAdmin == true) {
      request->send(200, "application/json", apiKey);
    } else {
      request->send(403, "text/plain", "Forbidden");
    }
  });

  server.on("/set-doorlock-code", HTTP_POST, [roomAccessCode](AsyncWebServerRequest* request) {
    String apiKeyHeader = request->header("x-api-key");
    if (apiKeyHeader == apiKey) {
      String newCode = request->getParam("code")->value();
      *roomAccessCode = newCode;
      request->send(200, "text/plain", "true");
    }
    else {
      request->send(401, "text/plain", "Unauthorized");
    }
  });

}
