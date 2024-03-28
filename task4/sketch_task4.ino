#include <FastLED.h>
#define NUM_LEDS 600
#define NUM_ARTISTS 10
#define NUM_HASHES 100
CRGB leds[NUM_LEDS];

uint32_t hashes[NUM_ARTISTS][NUM_HASHES] = {0x18565e,0x58cce7,0xe68cd4,0x0c020c,0xb0648c,0xcba83f,0xd0356f,0x35204a,0x02b5f3,0xecf5a3,0x78806c,0x12994f,0xf49675,0x71ed6c,0x6bd38f,0x94cb0e,0x20bb36,0x41da91,0x33e1eb,0x79caa4,0xfcda6a,0xb0b536,0xa07d61,0x01aaa9,0xa21902,0x008c1c,0x91750e,0x774693,0x0a1aea,0xe5c48e,0x7b5d0b,0x97fe2d,0xbb4167,0xef4d86,0x3a8f40,0x77527d,0xb425bc,0x21dc70,0xb76292,0x92ba08,0x369512,0x8554b4,0xb3735a,0x24029c,0xacd899,0xff908a,0x786467,0x382a7a,0x4de65b,0xdc8d26,0xef6d02,0xb3d625,0x3b5a8a,0x4ae2ca,0x2f559a,0x3a5868,0xd30325,0x25310b,0x54c52a,0xb08e64,0x516bf1,0x12ed95,0x3887b7,0xa37d41,0x668576,0xcdc834,0x44863a,0x08d81a,0xfaf035,0x3ddb40,0xf74d77,0x4ba894,0x4d3bf9,0xa4e1c9,0x52150a,0x3a1160,0xc833eb,0xd9655e,0xea0f15,0xc104e5,0xd6e964,0xbfeb44,0x34cf2e,0xcb288d,0x6f0357,0x68e2cd,0x7c533e,0xbc524b,0x2f9037,0xb4214e,0x3f3b4b,0xc78c5e,0xb392e7,0xb24f0f,0x84f1a9,0xf8d212,0x4d00d7,0xe1f1d6,0x07b582,0x1e5304,0xed6d7c,0xfc1889,0x17897a,0x8d799d,0x6a6bb4,0xc948ab,0x8f3f2c,0xc2fe40,0x1a1ce1,0xd60952,0xe17f4c,0xf2e897,0xa4b7c4,0x5c1744,0x448e7f,0xbd324e,0xd95d7c,0x3550cc,0xfdab2a,0x2863f2,0x27ed7a,0x5517a8,0xe41b4c,0xe094a3,0x1513f0,0x3178b2,0x2bea12,0xedd9ed,0x75d256,0x5a8d71,0xb10505,0x8804d9,0xe96746,0x6f5cf7,0x405959,0x88aae1,0xfa7744,0x95dadd,0x3765bc,0x699a55,0xdfa0ed,0x984e81,0x812588,0x044e69,0x66281d,0x97f121,0x3f07ef,0x719c3a,0xc522b0,0xef39fe,0x67160b,0x3b4fc8,0x6d6810,0xf9d052,0x049010,0x3225f0,0xf0c471,0x2e5c6b,0x8573a4,0x3c4ca7,0xb0c18c,0x6e5b4d,0x8b4206,0xd74e62,0xdc6cf5,0x275e2c,0x60014e,0x1512ad,0xda8239,0x31c11f,0x7e0d50,0x2f6218,0xddf14e,0x682717,0xea88e0,0x02f711,0x432887,0x1bb11b,0xb443b8,0x0115b7,0x988e33,0xf03bfe,0x8437ee,0xf2b0a6,0x538072,0x546e34,0xf4e3ce,0xe87484,0x104c45,0x1c57b9,0x7f2fdf,0xff437f,0xe873d5,0x307d5e,0xee1dfc,0x1dc64e,0xf8ae77,0xd48e75,0x6a6263,0x2a4581,0x47c6ae,0x160fcd,0xbacaac,0x0b6254,0xdf5c9a,0xecded8,0xcae181,0x0bcd45,0xfe79ec,0x90dde6,0x2abe70,0x98309f,0xcd8a5b,0xf7652c,0xa96f46,0x797434,0xa88f09,0x39d97f,0x8683f5,0xebe0d9,0xbfe5f1,0xebf636,0xa73293,0x80fb01,0xa5079a,0xadfd0b,0x165df5,0xb37107,0x72f343,0x86a10d,0x7e53af,0x158219,0x34eb21,0x27530b,0x174b6f,0x05222c,0x6b3dc7,0x679946,0x48b8c0,0x471906,0x486466,0x545bdd,0x2146ad,0xa16816,0x8ebc9b,0x78ddb1,0x88ceb0,0xc2c13d,0x3ff684,0xa0f952,0xfef9ca,0x7f685b,0xde7ed6,0x46f9fc,0x69d51a,0xb47f9e,0xe59982,0x216087,0xecddb8,0x6ee229,0xbe279d,0x16a7e7,0x7a9df9,0x04acda,0x3a252f,0x921ece,0x3411dc,0xbc4e57,0x377976,0x5c147e,0x682b53,0xcc166f,0x012f39,0xaa987d,0x192835,0xee226f,0xe66bc3,0xc0fea6,0x558248,0x75b368,0x9a4a5b,0x8565b3,0xc6eac7,0xfd30b9,0x82ce5f,0xcf8239,0x5399af,0x4bb7d5,0xc91360,0xab6722,0xc30262,0xbc50fa,0x902456,0xb78eed,0x02170a,0x023231,0xeec693,0xf8e449,0xcaddc2,0xe96a59,0xd81b6e,0xb2179e,0xd76d98,0xc653b1,0xc7cdb9,0xbf10b6,0x2d8ad6,0x55a9fc,0xfbbbbc,0x2aef94,0x3a4f7d,0xc2e6f9,0xc59620,0x57bda0,0xc1cec0,0x364b1a,0x71c561,0x871851,0xefd957,0x80fa28,0x281a96,0xae2cdf,0xca7a90,0xceaf76,0x9e10ab,0xcf0211,0xf0d32b,0x24db48,0x0c1fb4,0x380165,0x018205,0x0e9bcd,0x3296b8,0xac68f2,0x2a1045,0x66477c,0xd41182,0xd436be,0x6b1021,0xdc19e2,0xf27f32,0xfcbcd8,0x75708d,0x01be1e,0x1ba303,0xb538d3,0x0487e6,0x356d79,0x31e79e,0x1bce30,0x333861,0xd0c9a2,0xf68120,0x94377d,0x712ec3,0x2ff487,0xc99bcc,0x95fe89,0x8ad145,0xe696f2,0x9cb14f,0x20a50c,0xb08a02,0xb1a009,0x66d362,0xab5221,0x10b992,0xd35125,0x92c205,0x61cf80,0x4c6917,0xb6f40e,0x709e8e,0xcd25e3,0x78acbc,0x53b227,0xbc7876,0x6f07bc,0xcffea4,0xfc95f9,0xab103d,0xc0c89b,0x209f59,0xa81bc8,0xd1dd9c,0x65e683,0x04141c,0x7940de,0x77fef6,0xf6c312,0xb86aa0,0x628808,0xb16b18,0xd68134,0xa1c841,0x7840f2,0x001f1f,0xc06685,0x75758f,0x8690d9,0x9abd0e,0xccb901,0xa97064,0x8df243,0x268ca0,0x0bf384,0x39d830,0x68e58f,0x2188b0,0x05d483,0x2ab811,0xd36b41,0xa769d5,0x210853,0xd9e5c6,0x8ce117,0xc4f757,0x8d9fd6,0x783e26,0x2a138b,0x71207f,0xeea792,0x4886f0,0x2ea27d,0xc6eac0,0x7ff70b,0xa858c7,0x0ba07e,0x8a3383,0xfbcf65,0xd98728,0x28e606,0x4b8e99,0x168c0d,0x12037d,0xc3b023,0x9519de,0xc04843,0xbd5a07,0x3364b6,0x31553e,0x16d9ce,0x06fb1b,0xd9837d,0x391299,0x876e45,0x35edb6,0x1290b3,0xd3ad93,0xc32b7d,0xd419ee,0x4a27fc,0x085d03,0x722b23,0x04ee26,0x1ea6f0,0x1c4c64,0x0d20cf,0xb2a044,0x51dc51,0x33d593,0x9aa634,0xef7e91,0xf6e9b1,0x784d2a,0x45389b,0x87b71a,0x2dbf9a,0x87c588,0x5e51aa,0x444d9b,0x0efa2a,0xa38755,0xe4cfed,0x3e48f5,0xecd16f,0xd0a40c,0xaeddf5,0x19068b,0x566cbc,0x0d508a,0xa6c364,0x1ed958,0x374830,0xcc669c,0xfd163e,0xe3d41d,0x99f1c2,0x987e83,0x0d7b13,0x381a22,0xeb98b9,0x555fc2,0xd7510a,0x012ef9,0xd37fb0,0xf97a8e,0xeb8d6b,0x03188b,0x7c3fb5,0x303efc,0x06f313,0xb81ed6,0x894824,0xb45337,0x0e5a77,0xc08525,0x34f9f2,0xc7c557,0x728c81,0x5deb07,0x1dfae2,0x663e13,0x08ba2c,0xa8ca00,0x8d27b1,0x115976,0xec917f,0x0f1d40,0xa83684,0x46ce01,0xfe44b6,0x8a0df8,0x6473f8,0x2bf284,0x88a903,0x42b4f4,0x2f493b,0xf17e82,0x810876,0x645748,0x75c794,0xb1432d,0x329d89,0x8dff4f,0x5bc1d6,0x69b8e4,0x2bec72,0x26373e,0x3e7de8,0x814590,0x83ba3e,0x387800,0xcbe945,0x25b1fb,0x2cd65b,0xe6bed3,0x333ec3,0x93d78b,0x50cabb,0x602e58,0xdb9644,0x331208,0xbeed2d,0xed96e0,0x247105,0xb5400b,0x07dc0b,0xf569d2,0xc77354,0xfc7e23,0x68567b,0xcdb192,0x9c8270,0x2ee9df,0xa73a39,0x09a320,0xcf3084,0x282e49,0x592289,0x6ca2ae,0x8d4745,0x466cbf,0x9f86b5,0x02a2e0,0x96270e,0x5275f0,0x97b9f0,0xa85912,0x20eb96,0x82bfbe,0x8bf1d0,0x86664c,0x972869,0x5e6538,0xc2b6a8,0xb27005,0x07029c,0x3e8d75,0x79db3e,0x79748a,0xcf2e34,0xf54973,0x6c2a0d,0x39e89c,0xaa07ae,0xb5bc9b,0x85e259,0x01219e,0x18329e,0x74ef55,0x0a689b,0x7262d3,0x31e65e,0x217181,0x0a76e0,0xd53195,0x2400e0,0xee1988,0x3497e9,0x4a63e1,0xea86e7,0x46e751,0xb3c08a,0xd2de16,0x5a386a,0xb2d4af,0x3fadae,0x62bac1,0xe6edf9,0x1d1a38,0xaf810e,0xa21580,0x728cc1,0x11170d,0xb2abf5,0xfa5bf1,0x228cc1,0x464fb2,0xba0b93,0xb2dd02,0xf6dac2,0xf016fc,0x1a60ff,0xfe3974,0x2e172e,0x61c5a5,0xff660a,0x48f6f4,0xbcb7bb,0x672a93,0xf27680,0x4f0721,0x53646c,0x0d3d79,0xd0eb68,0xe51f0a,0x69f2ab,0x1ed044,0xd1ce7c,0xc15895,0xb49276,0x984415,0x5e78cf,0xa35500,0x11ef6e,0xf1d761,0xcb8d23,0x05e0d6,0x068ed9,0x50d224,0xd1339c,0x46b86f,0x186db6,0xc9ab9c,0x70a1b0,0xeb07a9,0xa21c48,0x203dfe,0xe31f01,0x24e790,0x83ea04,0x50c656,0x148172,0xbe4607,0xd58a29,0xecec8a,0xd1a898,0xbb8c7a,0x97595d,0xd6cf18,0x936b88,0x3823c4,0x5bac78,0xf8e9df,0x619089,0x7ff70d,0x1621a9,0x19bf90,0xbc40c1,0xa3c347,0x8ab464,0x7a2781,0x1d929e,0xcf112f,0xda656d,0x82fb0f,0xf73e2a,0x127ee3,0x47f7bb,0x759345,0x9d8291,0x53d4c0,0x9752e7,0x634523,0xd83bd4,0x07f235,0x2a6ff9,0x7889c8,0xf3b53f,0xcaa2e3,0xe9bd54,0x81b847,0xb96faa,0x9501f5,0x4161cc,0xde8083,0x4db23b,0x3af12d,0x3fafb0,0x6c3654,0x4abbc1,0x133b21,0x30ee9d,0x3bcc50,0x8e610f,0x22becb,0xef4578,0x6e7d33,0xafbf63,0x1f7dc4,0x468432,0x4326ee,0x336aa6,0xaf51b3,0x47f57f,0x3c4459,0xf678f9,0xd48430,0xf00839,0x6cb6b4,0x1af4fd,0x39e904,0x643285,0x6f4047,0x835958,0xe2fcd1,0x3a8e21,0x361103,0x8d68f8,0x17fac8,0x4bab90,0x81b180,0xc9b722,0x0b87f7,0x4b41a7,0x836bb6,0xf76f51,0x671a38,0xebc492,0x2814c6,0x4f9de4,0xf6680d,0x0b2af4,0x79ee65,0x01afb8,0xdbf8ba,0x74cb0d,0xb1e211,0xe2f3e6,0x5e11e1,0x116796,0xf9d987,0x055d91,0x525c41,0x532fe0,0x74d491,0x5ecc2c,0xe3ec18,0xe36465,0x36580e,0x19f7e4,0xdaa9aa,0x64e5fb,0x4e7446,0xcd8b45,0x633971,0x52101d,0x989c1a,0xf26ba9,0xba7492,0x51f985,0x6e28a1,0x2b4259,0x799290,0xc8b1df,0xeddb66,0x7ff956,0xaaf496,0x370b41,0xcafee4,0x9e5902,0xbba7f2,0x90443d,0xf50b35,0x9501ee,0x7919e9,0xc4ba25,0x600c90,0x3abe04,0xd1a99d,0xbed094,0xecf1d1,0xb0ccfa,0x8df8f1,0xac65e8,0xe52c9b,0xb8f6b0,0x122427,0x669c67,0x884ea4,0x2f6529,0xc261e6,0xbf9c59,0x308f38,0xe59ab7,0x1cd7e9,0xf26b70,0xd5c1ab,0xa46dee,0x5a7f4a,0x0080c3,0xfa8960,0x5cf07b,0x2fa066,0x5c9826,0x24ea25,0x2f7a47,0x5424e8,0xf100a3,0xfe46eb,0xdc564e,0x37a148,0x41c115,0x72827b,0x5001b4,0xf8f272,0x9d98ea,0x6ebbf3,0x6b0d38,0xad56aa,0x210202,0x4e5869,0x253b41,0x22875a,0x7c4758,0x32e930,0x6a3ddb,0xcbdb49,0xd68e32,0x449493,0xf1fa35,0x3e3772,0x3986b5,0xedfb93,0x0f802b,0x7f724e,0x9fcfc0,0xe70180,0xaaf7da,0xe8a6f3,0xd26b5e,0x9adc6f,0x1c767d,0xfe3095,0x635bf0,0x0aab80,0xd30315,0x8a9c0a,0xe82354,0x086b0f,0xad5772,0x92750d,0x749bcd,0x75b1c7,0x062e40,0x910dcb,0x11f791,0xd8579d,0x599dba,0x80abb1,0x79afa0,0xebbeab,0xcbd43f,0xb5e0d0,0x274f22,0xc825db,0x9455c2,0xa374fe,0x795454,0xb26892,0x234e9a,0x09f4ba,0x0bb67a,0x8afee4,0xf4d5e0,0xb3b081,0x03509e,0x572143,0xc7ae3f,0x8cddbe,0xdfd561,0x36fda5,0x25ac96,0x3c4865,0xc4c525,0xda35c0,0xb45413,0x6301eb,0x7266f1,0x32350e,0xde310b,0x809555,0x661970,0xf9116a,0xc0702a,0x5e9c61,0x9c7d52,0x142e18,0xb6f853,0x97a5c4,0x94f41e,0x542f63,0x0b69c0,0xf1af25,0x8a928f,0xc2b9b9,0xf6fb43,0x91af41,0x70c832,0x9a7e46,0xa5c23c,0x9c31e7,0x3b1b6c,0xb0c7e5,0x781dc2,0x928dde,0x0b10b0,0xa33908,0xdf146d,0xc3f9e6,0x249fde,0x41c5ce,0xb131cd,0x473f2f,0xa2edf1,0x41e4f3,0x982ef6,0xfc9738,0x9d1463,0xee29a7,0xa276f9,0x82c525,0x7b0a18,0x333cc2,0x67585e,0xb8d9a7,0xe247a3,0xc997ee,0xa28a63,0x066da8,0x8f81fe,0xb93fbb,0xe08691,0xba8710,0xb53ad0,0xd4a78e,0xe9a6f0,0x6e3771,0x3db14b,0x77b49e,0x97b0bc,0x880b27,0xe18ac0,0x4593c6,0xef332d,0xe49c4e,0x8d5f8b,0xf58e83,0x4eca3f,0x9812a1,0x61378f,0xd4b4f5,0xfbf3e1,0x822f4a,0x63e2f3,0xf20d7c,0xd90da5,0x066a93,0x366c91};
uint32_t artists[] = {0x002AFF,0x80FFD0,0xFF7AC6,0x004281,0xFF9933,0x33FF55,0x990000,0x2600E6,0x00B31E,0xCCCC00};

int artist_index = 0;

void shiftLeft() {
    CRGB tempColor = leds[0];
    for(int i = 0; i < NUM_LEDS - 1; i++) {
        leds[i].setRGB(leds[i + 1].r, leds[i + 1].g, leds[i + 1].b);
    }    
    leds[NUM_LEDS - 1] = tempColor;
}

void shiftRight() {
    CRGB tempColor = leds[NUM_LEDS - 1];
    for(int i = NUM_LEDS - 1; i > 0; i--) {
        leds[i].setRGB(leds[i - 1].r, leds[i - 1].g, leds[i - 1].b);
    }
    leds[0] = tempColor; 
}
void turnSomeOff(){
      for(int i = 0; i < NUM_LEDS; i++)
  {
    if (i%17==0) leds[i] = 0;
  }
}
void showArtist(int num){
  num = num % NUM_ARTISTS;
    for(int i = 0; i < NUM_LEDS; i++)
  {
    leds[i] = artists[num];
  }
  FastLED.delay(2000);
  
    for(int i = 0; i < NUM_LEDS; i++)
  {
    leds[i] = hashes[num][i%NUM_HASHES];
  }  


  
}
void setup() 
{
  FastLED.addLeds<WS2812, 2, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(10);
  FastLED.clear();
  showArtist(artist_index);
}
 
void loop() 
{
  EVERY_N_SECONDS(10){
  showArtist(artist_index);
  artist_index++;
}

EVERY_N_MILLISECONDS(70){
  shiftRight();
}
  FastLED.show();
}