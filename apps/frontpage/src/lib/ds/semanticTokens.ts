import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  "colors": {
    "text": {
      "placeholder": {
        "type": "color",
        "value": "{colors.neutral.200}"
      },
      "heading": {
        "type": "color",
        "value": "{colors.primary.800}"
      },
      "body": {
        "type": "color",
        "value": "{colors.primary.900}"
      },
      "subdued": {
        "type": "color",
        "value": "{colors.neutral.700}"
      },
      "vibrant": {
        "type": "color",
        "value": "{colors.primary.800}"
      },
      "helper": {
        "type": "color",
        "value": "{colors.neutral.800}"
      },
      "contrast": {
        "type": "color",
        "value": "{colors.neutral.50}"
      }
    },
    "borders": {
      "base": {
        "type": "color",
        "value": "{colors.neutral.400}"
      },
      "subdued": {
        "type": "color",
        "value": "{colors.neutral.50}"
      }
    },
    "feedback": {
      "success": {
        "border": {
          "type": "color",
          "value": "{colors.success.700}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.success.800}"
        },
        "background": {
          "type": "color",
          "value": "{colors.success.50}"
        }
      },
      "alert": {
        "border": {
          "type": "color",
          "value": "{colors.alert.700}"
        },
        "background": {
          "type": "color",
          "value": "{colors.alert.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.alert.700}"
        }
      },
      "error": {
        "border": {
          "type": "color",
          "value": "{colors.error.700}"
        },
        "background": {
          "type": "color",
          "value": "{colors.error.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.error.800}"
        }
      }
    },
    "forms": {
      "action": {
        "type": "color",
        "value": "{colors.primary.800}"
      }
    },
    "surface": {
      "primary": {
        "subdued": {
          "background": {
            "type": "color",
            "value": "{colors.primary.100}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.400}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.primary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.300}"
          }
        },
        "contrast": {
          "background": {
            "type": "color",
            "value": "{colors.primary.900}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.primary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.600}"
          }
        },
        "tonal": {
          "background": {
            "type": "color",
            "value": "{colors.primary.200}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.400}"
          }
        }
      },
      "subdued": {
        "background": {
          "type": "color",
          "value": "{colors.neutral.50}"
        }
      },
      "secondary": {
        "subdued": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.100}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.400}"
          }
        },
        "contrast": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.900}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.400}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.800}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.400}"
          }
        },
        "tonal": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.200}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.400}"
          }
        }
      },
      "default": {
        "background": {
          "type": "color",
          "value": "{colors.white.100}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.text.body}"
        }
      },
      "contrast": {
        "background": {
          "type": "color",
          "value": "{colors.neutral.900}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.white.100}"
        }
      },
      "tertiary": {
        "subdued": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.100}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.400}"
          }
        },
        "contrast": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.900}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.400}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.800}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.400}"
          }
        },
        "tonal": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.200}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.700}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.400}"
          }
        }
      },
      "campaign": {
        "background": {
          "type": "color",
          "value": "{colors.tertiary.100}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.tertiary.800}"
        }
      },
      'navbar': {
        'base': {
          'background': {
            'value': '{colors.primary.900}',
          },
          'foreground': {
            'value': '{colors.primary.100}',
          },
        },
        'top': {
          'background': {
            'value': '{colors.primary.950}',
          },
          'foreground': {
            'value': '{colors.primary.100}',
          },
        }
      }
    },
    "action": {
      "cta": {
        "background": {
          "default": { "value": "{colors.quarternary.900}" },
          "hover": { "value": "{colors.quarternary.800}" },
          "active": { "value": "{colors.quarternary.950}" }
        },
        "foreground": {
          "default": { "value": "{colors.quarternary.100}" }
        }
      },
      "primary": {
        "background": {
          "default": { "value": "{colors.primary.800}" },
          "hover": { "value": "{colors.primary.600}" },
          "active": { "value": "{colors.primary.800}" }
        },
        "foreground": {
          "default": { "value": "{colors.primary.50}" }
        },
        "border": {
          "default": { "value": "{colors.primary.700}" }
        }
      },
      "secondary": {
        "background": {
          "default": { "value": "{colors.secondary.100}" },
          "hover": { "value": "{colors.secondary.50}" },
          "active": { "value": "{colors.secondary.300}" }
        },
        "foreground": {
          "default": { "value": "{colors.secondary.800}" }
        },
        "border": {
          "default": { "value": "{colors.secondary.700}" }
        }
      },
      "text": {
        "foreground": {
          "default": { "value": "{colors.primary.800}" },
          "hover": { "value": "{colors.primary.600}" },
          "active": { "value": "{colors.primary.900}" }
        }
      },
      "destructive": {
        "background": {
          "default": { "value": "{colors.error.700}" },
          "hover": { "value": "{colors.error.600}" },
          "active": { "value": "{colors.error.800}" }
        },
        "foreground": {
          "default": { "value": "{colors.error.50}" }
        },
        "border": {
          "default": { "value": "{colors.error.700}" }
        }
      },
      "disabled": {
        "background": { "value": "{colors.neutral.50}" },
        "foreground": { "value": "{colors.neutral.700}" }
      }
    },
    'sizes': {
      'logo': {
        'navbar': {
          'value': {
            base: '100px',
            lg: '110px'
          }
        },
        'footer': {
          'value': {
            base: '100px',
            lg: '120px'
          }
        }
      },
    },
    "commerce": {
      "rating": {
        "type": "color",
        "value": "{colors.tertiary.300}"
      },
      "campaign": {
        "background": {
          "type": "color",
          "value": "{colors.tertiary.600}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.tertiary.100}"
        },
        "text": {
          "type": "color",
          "value": "{colors.tertiary.900}"
        }
      }
    }
  },
  "radii": {
    "interactive": {
      "type": "dimension",
      "value": "{radii.4}"
    },
    "image": {
      "content": {
        "type": "dimension",
        "value": "{radii.4}"
      }
    },
    "surface": {
      "sm": {
        "type": "dimension",
        "value": "{radii.4}"
      },
      "md": {
        "type": "dimension",
        "value": "{radii.6}"
      }
    },
    "forms": {
      "type": "dimension",
      "value": "{radii.2}"
    }
  },
});