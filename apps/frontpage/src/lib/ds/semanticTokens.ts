import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  "colors": {
    "text": {
      "placeholder": {
        "type": "color",
        "value": "{colors.neutral.500}"
      },
      "heading": {
        "type": "color",
        "value": "{colors.primary.800}"
      },
      "body": {
        "type": "color",
        "value": "{colors.primary.950}"
      },
      "subdued": {
        "type": "color",
        "value": "{colors.neutral.600}"
      },
      "vibrant": {
        "type": "color",
        "value": "{colors.primary.500}"
      },
      "helper": {
        "type": "color",
        "value": "{colors.neutral.500}"
      },
      "contrast": {
        "type": "color",
        "value": "{colors.mono.off-white}"
      }
    },
    "borders": {
      "base": {
        "type": "color",
        "value": "{colors.neutral.300}"
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
          "value": "{colors.success.400}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.success.400}"
        },
        "background": {
          "type": "color",
          "value": "{colors.neutral.100}"
        }
      },
      "error": {
        "border": {
          "type": "color",
          "value": "{colors.error.400}"
        },
        "background": {
          "type": "color",
          "value": "{colors.neutral.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.error.400}"
        }
      }
    },
    "forms": {
      "action": {
        "type": "color",
        "value": "{colors.secondary.100}"
      }
    },
    "surface": {
      "primary": {
        "subdued": {
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
            "value": "{colors.primary.300}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.primary.600}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.mono.off-white}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.400}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.primary.200}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.primary.500}"
          }
        },
        "contrast": {
          "background": {
            "type": "color",
            "value": "{colors.primary.900}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.50}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.500}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.primary.200}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.primary.800}"
          }
        },
        "tonal": {
          "background": {
            "type": "color",
            "value": "{colors.primary.400}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.100}"
          },
          "border": {
            "type": "color",
            "value": "{colors.primary.500}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.primary.100}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.primary.200}"
          }
        }
      },
      "subdued": {
        "background": {
          "type": "color",
          "value": "{colors.neutral.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.text.body}"
        },
        "highlight": {
          "type": "color",
          "value": "{colors.primary.400}"
        },
        "accent": {
          "type": "color",
          "value": "{colors.mono.off-white}"
        }
      },
      "secondary": {
        "subdued": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.50}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.600}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.secondary.600}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.mono.off-white}"
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
            "value": "{colors.secondary.200}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.secondary.300}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.secondary.800}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.secondary.700}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.secondary.50}"
          },
          "border": {
            "type": "color",
            "value": "{colors.secondary.600}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.secondary.200}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.secondary.500}"
          }
        },
        "tonal": {
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
            "value": "{colors.secondary.700}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.secondary.600}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.mono.off-white}"
          }
        }
      },
      "default": {
        "background": {
          "type": "color",
          "value": "{colors.secondary.100}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.text.body}"
        },
        "highlight": {
          "type": "color",
          "value": "{colors.primary.400}"
        },
        "accent": {
          "type": "color",
          "value": "{colors.mono.off-white}"
        }
      },
      "contrast": {
        "background": {
          "type": "color",
          "value": "{colors.neutral.800}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.mono.off-white}"
        },
        "highlight": {
          "type": "color",
          "value": "{colors.primary.400}"
        },
        "accent": {
          "type": "color",
          "value": "{colors.neutral.700}"
        }
      },
      "tertiary": {
        "subdued": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.50}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.800}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.700}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.tertiary.600}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.mono.off-white}"
          }
        },
        "contrast": {
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
            "value": "{colors.tertiary.100}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.tertiary.300}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.tertiary.700}"
          }
        },
        "vibrant": {
          "background": {
            "type": "color",
            "value": "{colors.tertiary.700}"
          },
          "foreground": {
            "type": "color",
            "value": "{colors.tertiary.50}"
          },
          "border": {
            "type": "color",
            "value": "{colors.tertiary.500}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.tertiary.200}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.tertiary.500}"
          }
        },
        "tonal": {
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
            "value": "{colors.tertiary.700}"
          },
          "highlight": {
            "type": "color",
            "value": "{colors.tertiary.600}"
          },
          "accent": {
            "type": "color",
            "value": "{colors.mono.off-white}"
          }
        }
      }
    },
    "action": {
      "primary": {
        "background": {
          "default": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "hover": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "active": {
            "type": "color",
            "value": "{colors.primary.800}"
          }
        },
        "foreground": {
          "default": {
            "type": "color",
            "value": "{colors.neutral.50}"
          }
        }
      },
      "text": {
        "foreground": {
          "default": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "hover": {
            "type": "color",
            "value": "{colors.primary.800}"
          },
          "active": {
            "type": "color",
            "value": "{colors.primary.800}"
          }
        }
      },
      "disabled": {
        "background": {
          "type": "color",
          "value": "{colors.neutral.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.neutral.600}"
        },
        "contrast": {
          "type": "color",
          "value": "{colors.neutral.100}"
        }
      },
      "secondary": {
        "background": {
          "default": {
            "type": "color",
            "value": "{colors.primary.200}"
          },
          "hover": {
            "type": "color",
            "value": "{colors.primary.200}"
          },
          "active": {
            "type": "color",
            "value": "{colors.primary.200}"
          }
        },
        "foreground": {
          "default": {
            "type": "color",
            "value": "{colors.primary.800}"
          }
        }
      },
      "cta": {
        "background": {
          "default": {
            "type": "color",
            "value": "{colors.primary.400}"
          },
          "hover": {
            "type": "color",
            "value": "{colors.primary.400}"
          },
          "active": {
            "type": "color",
            "value": "{colors.primary.400}"
          }
        },
        "foreground": {
          "default": {
            "type": "color",
            "value": "{colors.neutral.50}"
          }
        }
      },
      "destructive": {
        "background": {
          "default": {
            "type": "color",
            "value": "{colors.error.400}"
          },
          "active": {
            "type": "color",
            "value": "{colors.error.400}"
          },
          "hover": {
            "type": "color",
            "value": "{colors.error.400}"
          }
        },
        "foreground": {
          "default": {
            "type": "color",
            "value": "{colors.error.50}"
          }
        }
      }
    },
    "commerce": {
      "rating": {
        "type": "color",
        "value": "{colors.alert.200}"
      },
      "campaign": {
        "background": {
          "type": "color",
          "value": "{colors.tertiary.50}"
        },
        "foreground": {
          "type": "color",
          "value": "{colors.tertiary.800}"
        },
        "text": {
          "type": "color",
          "value": "{colors.tertiary.600}"
        },
        "accent": {
          "type": "color",
          "value": "{colors.tertiary.100}"
        }
      }
    }
  },
  "spacing": {
    "none": {
      "value": "{spacing.0}"
    },
    "tight": {
      "value": {
        "base": "{spacing.3}",
        "md": "{spacing.4}",
        "lg": "{spacing.5}"
      }
    },
    "snug": {
      "value": {
        "base": "{spacing.5}",
        "md": "{spacing.6}",
        "lg": "{spacing.7}"
      }
    },
    "normal": {
      "value": {
        "base": "{spacing.6}",
        "md": "{spacing.7}",
        "lg": "{spacing.8}"
      }
    },
    "relaxed": {
      "value": {
        "base": "{spacing.7}",
        "md": "{spacing.8}",
        "lg": "{spacing.9}"
      }
    },
    "loose": {
      "value": {
        "base": "{spacing.8}",
        "md": "{spacing.9}",
        "lg": "{spacing.10}"
      }
    },
    "x-loose": {
      "value": {
        "base": "{spacing.10}",
        "md": "{spacing.11}",
        "lg": "{spacing.12}"
      }
    },
    "xx-loose": {
      "value": {
        "base": "{spacing.11}",
        "md": "{spacing.12}",
        "lg": "{spacing.13}"
      }
    },
    "app": {
      "value": {
        "base": "{spacing.6}",
        "md": "{spacing.8}",
        "lg": "{spacing.10}"
      }
    }
  },
  "radii": {
    "interactive": {
      "value": "{radii.4}"
    },
    "surface": {
      "sm": {
        "value": "{radii.6}"
      },
      "md": {
        "value": "{radii.7}"
      }
    },
    "forms": {
      "value": "{radii.0}"
    }
  },
  "sizes": {
    "screens": {
      "smallMobile": {
        "value": "320px"
      }
    },
    "container": {
      "wide": {
        "value": "{sizes.containers.2xl}"
      },
      "normal": {
        "value": "{sizes.containers.xl}"
      },
      "slim": {
        "value": "{sizes.containers.lg}"
      },
      "tight": {
        "value": "{sizes.containers.md}"
      }
    }
  },
  "fontSizes": {
    "xs": {
      "value": {
        "base": "{fontSizes.mobileXs}",
        "lg": "{fontSizes.desktopXs}"
      }
    },
    "sm": {
      "value": {
        "base": "{fontSizes.mobileSm}",
        "lg": "{fontSizes.desktopSm}"
      }
    },
    "md": {
      "value": {
        "base": "{fontSizes.mobileMd}",
        "lg": "{fontSizes.desktopMd}"
      }
    },
    "lg": {
      "value": {
        "base": "{fontSizes.mobileLg}",
        "lg": "{fontSizes.desktopLg}"
      }
    },
    "xl": {
      "value": {
        "base": "{fontSizes.mobileXl}",
        "lg": "{fontSizes.desktopXl}"
      }
    },
    "2xl": {
      "value": {
        "base": "{fontSizes.mobile2xl}",
        "lg": "{fontSizes.desktop2xl}"
      }
    },
    "3xl": {
      "value": {
        "base": "{fontSizes.mobile3xl}",
        "lg": "{fontSizes.desktop3xl}"
      }
    },
    "4xl": {
      "value": {
        "base": "{fontSizes.mobile4xl}",
        "lg": "{fontSizes.desktop4xl}"
      }
    },
    "5xl": {
      "value": {
        "base": "{fontSizes.mobile5xl}",
        "lg": "{fontSizes.desktop5xl}"
      }
    }
  }
});