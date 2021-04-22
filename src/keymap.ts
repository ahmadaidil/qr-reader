type KeyMap = {
  [key: string]: {
    name: string,
    chars: string[]
  }
}

const KEYMAP: KeyMap = {
  "10": {
    "name": "KEY_M",
    "chars": [
      "m",
      "M"
    ]
  },
  "11": {
    "name": "KEY_N",
    "chars": [
      "n",
      "N"
    ]
  },
  "12": {
    "name": "KEY_O",
    "chars": [
      "o",
      "O"
    ]
  },
  "13": {
    "name": "KEY_P",
    "chars": [
      "p",
      "P"
    ]
  },
  "14": {
    "name": "KEY_Q",
    "chars": [
      "q",
      "Q"
    ]
  },
  "15": {
    "name": "KEY_R",
    "chars": [
      "r",
      "R"
    ]
  },
  "16": {
    "name": "KEY_S",
    "chars": [
      "s",
      "S"
    ]
  },
  "17": {
    "name": "KEY_T",
    "chars": [
      "t",
      "T"
    ]
  },
  "18": {
    "name": "KEY_U",
    "chars": [
      "u",
      "U"
    ]
  },
  "19": {
    "name": "KEY_V",
    "chars": [
      "v",
      "V"
    ]
  },
  "20": {
    "name": "KEY_3",
    "chars": [
      "3",
      "#"
    ]
  },
  "21": {
    "name": "KEY_4",
    "chars": [
      "4",
      "$"
    ]
  },
  "22": {
    "name": "KEY_5",
    "chars": [
      "5",
      "%"
    ]
  },
  "23": {
    "name": "KEY_6",
    "chars": [
      "6",
      "^"
    ]
  },
  "24": {
    "name": "KEY_7",
    "chars": [
      "7",
      "&"
    ]
  },
  "25": {
    "name": "KEY_8",
    "chars": [
      "8",
      "*"
    ]
  },
  "26": {
    "name": "KEY_9",
    "chars": [
      "9",
      "("
    ]
  },
  "27": {
    "name": "KEY_0",
    "chars": [
      "0",
      ")"
    ]
  },
  "28": {
    "name": "KEY_ENTER",
    "chars": [
      "\n"
    ]
  },
  "29": {
    "name": "KEY_ESC",
    "chars": []
  },
  "30": {
    "name": "KEY_RIGHTBRACE",
    "chars": [
      "]",
      "}"
    ]
  },
  "31": {
    "name": "KEY_BACKSLASH",
    "chars": [
      "\\",
      "|"
    ]
  },
  "32": {
    "name": "KEY_BACKSLASH",
    "chars": [
      "#",
      "~"
    ]
  },
  "33": {
    "name": "KEY_SEMICOLON",
    "chars": [
      ";",
      ":"
    ]
  },
  "34": {
    "name": "KEY_APOSTROPHE",
    "chars": [
      "'",
      "\""
    ]
  },
  "35": {
    "name": "KEY_GRAVE",
    "chars": [
      "`",
      "~"
    ]
  },
  "36": {
    "name": "KEY_COMMA",
    "chars": [
      ",",
      "<"
    ]
  },
  "37": {
    "name": "KEY_DOT",
    "chars": [
      ".",
      ">"
    ]
  },
  "38": {
    "name": "KEY_SLASH",
    "chars": [
      "/",
      "?"
    ]
  },
  "39": {
    "name": "KEY_CAPSLOCK",
    "chars": []
  },
  "40": {
    "name": "KEY_F7",
    "chars": []
  },
  "41": {
    "name": "KEY_F8",
    "chars": []
  },
  "42": {
    "name": "KEY_F9",
    "chars": []
  },
  "43": {
    "name": "KEY_F10",
    "chars": []
  },
  "44": {
    "name": "KEY_F11",
    "chars": []
  },
  "45": {
    "name": "KEY_F12",
    "chars": []
  },
  "46": {
    "name": "KEY_SYSRQ",
    "chars": []
  },
  "47": {
    "name": "KEY_SCROLLLOCK",
    "chars": []
  },
  "48": {
    "name": "KEY_PAUSE",
    "chars": []
  },
  "49": {
    "name": "KEY_INSERT",
    "chars": []
  },
  "50": {
    "name": "KEY_LEFT",
    "chars": []
  },
  "51": {
    "name": "KEY_DOWN",
    "chars": []
  },
  "52": {
    "name": "KEY_UP",
    "chars": []
  },
  "53": {
    "name": "KEY_NUMLOCK",
    "chars": []
  },
  "54": {
    "name": "KEY_KPSLASH",
    "chars": [
      "/"
    ]
  },
  "55": {
    "name": "KEY_KPASTERISK",
    "chars": [
      "*"
    ]
  },
  "56": {
    "name": "KEY_KPMINUS",
    "chars": [
      "-"
    ]
  },
  "57": {
    "name": "KEY_KPPLUS",
    "chars": [
      "+"
    ]
  },
  "58": {
    "name": "KEY_KPENTER",
    "chars": []
  },
  "59": {
    "name": "KEY_KP1",
    "chars": []
  },
  "60": {
    "name": "KEY_KP8",
    "chars": []
  },
  "61": {
    "name": "KEY_KP9",
    "chars": []
  },
  "62": {
    "name": "KEY_KP0",
    "chars": []
  },
  "63": {
    "name": "KEY_KPDOT",
    "chars": []
  },
  "64": {
    "name": "KEY_102ND",
    "chars": [
      "\\",
      "|"
    ]
  },
  "65": {
    "name": "KEY_COMPOSE",
    "chars": []
  },
  "66": {
    "name": "KEY_POWER",
    "chars": []
  },
  "67": {
    "name": "KEY_KPEQUAL",
    "chars": [
      "="
    ]
  },
  "68": {
    "name": "KEY_F13",
    "chars": []
  },
  "69": {
    "name": "KEY_F14",
    "chars": []
  },
  "70": {
    "name": "KEY_F21",
    "chars": []
  },
  "71": {
    "name": "KEY_F22",
    "chars": []
  },
  "72": {
    "name": "KEY_F23",
    "chars": []
  },
  "73": {
    "name": "KEY_F24",
    "chars": []
  },
  "74": {
    "name": "KEY_OPEN",
    "chars": []
  },
  "75": {
    "name": "KEY_HELP",
    "chars": []
  },
  "76": {
    "name": "KEY_PROPS",
    "chars": []
  },
  "77": {
    "name": "KEY_FRONT",
    "chars": []
  },
  "78": {
    "name": "KEY_STOP",
    "chars": []
  },
  "79": {
    "name": "KEY_AGAIN",
    "chars": []
  },
  "80": {
    "name": "KEY_VOLUMEUP",
    "chars": []
  },
  "81": {
    "name": "KEY_VOLUMEDOWN",
    "chars": []
  },
  "85": {
    "name": "KEY_KPCOMMA",
    "chars": []
  },
  "87": {
    "name": "KEY_RO",
    "chars": []
  },
  "88": {
    "name": "KEY_KATAKANAHIRAGANA",
    "chars": []
  },
  "89": {
    "name": "KEY_YEN",
    "chars": []
  },
  "90": {
    "name": "KEY_HANGEUL",
    "chars": []
  },
  "91": {
    "name": "KEY_HANJA",
    "chars": []
  },
  "92": {
    "name": "KEY_KATAKANA",
    "chars": []
  },
  "93": {
    "name": "KEY_HIRAGANA",
    "chars": []
  },
  "94": {
    "name": "KEY_ZENKAKUHANKAKU",
    "chars": []
  },
  "04": {
    "name": "KEY_A",
    "chars": [
      "a",
      "A"
    ]
  },
  "05": {
    "name": "KEY_B",
    "chars": [
      "b",
      "B"
    ]
  },
  "06": {
    "name": "KEY_C",
    "chars": [
      "c",
      "C"
    ]
  },
  "07": {
    "name": "KEY_D",
    "chars": [
      "d",
      "D"
    ]
  },
  "08": {
    "name": "KEY_E",
    "chars": [
      "e",
      "E"
    ]
  },
  "09": {
    "name": "KEY_F",
    "chars": [
      "f",
      "F"
    ]
  },
  "0a": {
    "name": "KEY_G",
    "chars": [
      "g",
      "G"
    ]
  },
  "0b": {
    "name": "KEY_H",
    "chars": [
      "h",
      "H"
    ]
  },
  "0c": {
    "name": "KEY_I",
    "chars": [
      "i",
      "I"
    ]
  },
  "0d": {
    "name": "KEY_J",
    "chars": [
      "j",
      "J"
    ]
  },
  "0e": {
    "name": "KEY_K",
    "chars": [
      "k",
      "K"
    ]
  },
  "0f": {
    "name": "KEY_L",
    "chars": [
      "l",
      "L"
    ]
  },
  "1a": {
    "name": "KEY_W",
    "chars": [
      "w",
      "W"
    ]
  },
  "1b": {
    "name": "KEY_X",
    "chars": [
      "x",
      "X"
    ]
  },
  "1c": {
    "name": "KEY_Y",
    "chars": [
      "y",
      "Y"
    ]
  },
  "1d": {
    "name": "KEY_Z",
    "chars": [
      "z",
      "Z"
    ]
  },
  "1e": {
    "name": "KEY_1",
    "chars": [
      "1",
      "!"
    ]
  },
  "1f": {
    "name": "KEY_2",
    "chars": [
      "2",
      "@"
    ]
  },
  "2a": {
    "name": "KEY_BACKSPACE",
    "chars": []
  },
  "2b": {
    "name": "KEY_TAB",
    "chars": [
      "\t"
    ]
  },
  "2c": {
    "name": "KEY_SPACE",
    "chars": [
      " "
    ]
  },
  "2d": {
    "name": "KEY_MINUS",
    "chars": [
      "-",
      "_"
    ]
  },
  "2e": {
    "name": "KEY_EQUAL",
    "chars": [
      "=",
      "+"
    ]
  },
  "2f": {
    "name": "KEY_LEFTBRACE",
    "chars": [
      "[",
      "{"
    ]
  },
  "3a": {
    "name": "KEY_F1",
    "chars": []
  },
  "3b": {
    "name": "KEY_F2",
    "chars": []
  },
  "3c": {
    "name": "KEY_F3",
    "chars": []
  },
  "3d": {
    "name": "KEY_F4",
    "chars": []
  },
  "3e": {
    "name": "KEY_F5",
    "chars": []
  },
  "3f": {
    "name": "KEY_F6",
    "chars": []
  },
  "4a": {
    "name": "KEY_HOME",
    "chars": []
  },
  "4b": {
    "name": "KEY_PAGEUP",
    "chars": []
  },
  "4c": {
    "name": "KEY_DELETE",
    "chars": []
  },
  "4d": {
    "name": "KEY_END",
    "chars": []
  },
  "4e": {
    "name": "KEY_PAGEDOWN",
    "chars": []
  },
  "4f": {
    "name": "KEY_RIGHT",
    "chars": []
  },
  "5a": {
    "name": "KEY_KP2",
    "chars": []
  },
  "5b": {
    "name": "KEY_KP3",
    "chars": []
  },
  "5c": {
    "name": "KEY_KP4",
    "chars": []
  },
  "5d": {
    "name": "KEY_KP5",
    "chars": [
      "5"
    ]
  },
  "5e": {
    "name": "KEY_KP6",
    "chars": []
  },
  "5f": {
    "name": "KEY_KP7",
    "chars": []
  },
  "6a": {
    "name": "KEY_F15",
    "chars": []
  },
  "6b": {
    "name": "KEY_F16",
    "chars": []
  },
  "6c": {
    "name": "KEY_F17",
    "chars": []
  },
  "6d": {
    "name": "KEY_F18",
    "chars": []
  },
  "6e": {
    "name": "KEY_F19",
    "chars": []
  },
  "6f": {
    "name": "KEY_F20",
    "chars": []
  },
  "7a": {
    "name": "KEY_UNDO",
    "chars": []
  },
  "7b": {
    "name": "KEY_CUT",
    "chars": []
  },
  "7c": {
    "name": "KEY_COPY",
    "chars": []
  },
  "7d": {
    "name": "KEY_PASTE",
    "chars": []
  },
  "7e": {
    "name": "KEY_FIND",
    "chars": []
  },
  "7f": {
    "name": "KEY_MUTE",
    "chars": []
  },
  "8a": {
    "name": "KEY_HENKAN",
    "chars": []
  },
  "8b": {
    "name": "KEY_MUHENKAN",
    "chars": []
  },
  "8c": {
    "name": "KEY_KPJPCOMMA",
    "chars": []
  },
  "b6": {
    "name": "KEY_KPLEFTPAREN",
    "chars": [
      "("
    ]
  },
  "b7": {
    "name": "KEY_KPRIGHTPAREN",
    "chars": [
      ")"
    ]
  },
  "e0": {
    "name": "KEY_LEFTCTRL",
    "chars": []
  },
  "e1": {
    "name": "KEY_LEFTSHIFT",
    "chars": []
  },
  "e2": {
    "name": "KEY_LEFTALT",
    "chars": []
  },
  "e3": {
    "name": "KEY_LEFTMETA",
    "chars": []
  },
  "e4": {
    "name": "KEY_RIGHTCTRL",
    "chars": []
  },
  "e5": {
    "name": "KEY_RIGHTSHIFT",
    "chars": []
  },
  "e6": {
    "name": "KEY_RIGHTALT",
    "chars": []
  },
  "e7": {
    "name": "KEY_RIGHTMETA",
    "chars": []
  },
  "e8": {
    "name": "KEY_PLAYPAUSE",
    "chars": []
  },
  "e9": {
    "name": "KEY_STOPCD",
    "chars": []
  },
  "ea": {
    "name": "KEY_PREVIOUSSONG",
    "chars": []
  },
  "eb": {
    "name": "KEY_NEXTSONG",
    "chars": []
  },
  "ec": {
    "name": "KEY_EJECTCD",
    "chars": []
  },
  "ed": {
    "name": "KEY_VOLUMEUP",
    "chars": []
  },
  "ee": {
    "name": "KEY_VOLUMEDOWN",
    "chars": []
  },
  "ef": {
    "name": "KEY_MUTE",
    "chars": []
  },
  "f0": {
    "name": "KEY_WWW",
    "chars": []
  },
  "f1": {
    "name": "KEY_BACK",
    "chars": []
  },
  "f2": {
    "name": "KEY_FORWARD",
    "chars": []
  },
  "f3": {
    "name": "KEY_STOP",
    "chars": []
  },
  "f4": {
    "name": "KEY_FIND",
    "chars": []
  },
  "f5": {
    "name": "KEY_SCROLLUP",
    "chars": []
  },
  "f6": {
    "name": "KEY_SCROLLDOWN",
    "chars": []
  },
  "f7": {
    "name": "KEY_EDIT",
    "chars": []
  },
  "f8": {
    "name": "KEY_SLEEP",
    "chars": []
  },
  "f9": {
    "name": "KEY_COFFEE",
    "chars": []
  },
  "fa": {
    "name": "KEY_REFRESH",
    "chars": []
  },
  "fb": {
    "name": "KEY_CALC",
    "chars": []
  }
}

export = KEYMAP
