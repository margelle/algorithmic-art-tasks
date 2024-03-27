#include <FastLED.h>
 
CRGB leds[150];

int r = 255;
int b = 0;
int g = 0;
 
void setup() 
{
  FastLED.addLeds<WS2812, 2, GRB>(leds, 150);
}
 
void loop() 
{
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  }

  for(int i = 0; i < 150; i++)
  {
    leds[i] = CRGB(r, g, b);
  }
  FastLED.show();
}