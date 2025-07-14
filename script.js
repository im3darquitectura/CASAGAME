TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "class": "MenuItem",
     "label": "01. ACCESO - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "02. HALL ACCESO - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "03. SALON - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "04. HALL HAB - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "05. ALCOBA PPAL - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "06. HAB AUX",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "07. HAB AUX 2 - GAME",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "8. 360  SALON LECTURA - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "9. 360  HALL HAB 2 - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "10. 360  CINE GAME",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "11. 360  SALON TV - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "12. 360  BAÑO SOCIAL - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "13. 360  TERRAZA - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "14. 360 FIRE PIT -  CASA GAME -",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "15. 360  BAÑO ppal - CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "16. 360  VEST PPAL- CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "17. 360  BAÑO AUX- CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "class": "MenuItem",
     "label": "18. 360  ALCOBA HUESPEDES- CASA GAME",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "id": "panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B32ABD6E_B8BE_DF59_41DB_44D77B72E491",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8, this.camera_CF6B37D0_C1EF_7F9D_41C1_0CCA7D785BDD); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -97.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.69
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A828B727_B9B9_2CD6_41D9_BFFB615B6678",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081, this.camera_CF7927EB_C1EF_7F82_41D4_A6A1E40B0737); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -131.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 0.06
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_t.jpg",
  "label": "01. ACCESO - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "paddingRight": 0,
   "height": "76.75%",
   "maxWidth": 70,
   "mode": "push",
   "paddingBottom": 0,
   "shadow": false,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": false,
   "minHeight": 1,
   "propagateClick": false,
   "maxHeight": 70,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "data": {
    "name": "IconButton8475"
   },
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "minWidth": 1,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -89.26,
   "pitch": -0.8
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B36F7EEC_B8B9_3D5A_41E4_6A3F2717FB18",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16, this.camera_CFAC4772_C1EF_7082_41E1_3BA3C25C5785); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.58,
        "yaw": 175.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -4.21
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B36F0EEC_B8B9_3D5A_41CB_EC7BC8A3778C",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4, this.camera_CFC8174E_C1EF_7082_41E4_F7E2E9D86414); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 25.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -2.45
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B36F1EED_B8B9_3D5A_41E5_E45B67B4A0A0",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41, this.camera_CFC5C73C_C1EF_7086_4197_63026E009FCE); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.18,
        "yaw": -5.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 19.16
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A8AB5CBA_B9BF_DD3E_41E4_1D1996D75F84",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D, this.camera_CFDE0760_C1EF_70BE_41E2_42E03540DD65); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "yaw": -125.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -2.7
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_t.jpg",
  "label": "02. HALL ACCESO - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B50B25DC_B8B9_2F7A_41DD_B4C28DA0CF27",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8, this.camera_CC57662D_C1EF_7086_41DB_27AE82BD99B4); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 117.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_0_HS_16_0.png"
          }
         ]
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A8DC07F5_B9BF_2B4A_41D1_B923B5E1ECEA",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F, this.camera_CC39869D_C1EF_7187_41E6_FC4794AD4B78); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "yaw": -176.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_0_HS_19_0.png"
          }
         ]
        },
        "pitch": -3.45
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_AB55B5E9_B9B9_2F5A_41E0_DD70BCF95033",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B2F16777_B949_6B36_41D2_B3C49F474751, this.camera_CC25F64E_C1EF_7082_41CC_C73B7CC4351B); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -128.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_0_HS_20_0.png"
          }
         ]
        },
        "pitch": -1.7
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_AB9492DC_B9B9_257A_41D8_F7DFBFEC59E2",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8, this.camera_CC2BA67B_C1EF_7083_40F8_FF78B85A4A60); this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -116.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_0_HS_21_0.png"
          }
         ]
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_ABD4C447_B9B9_2D56_41C0_B532F04FDC5E",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A, this.camera_CC41960C_C1EF_7086_41E7_758D7861986A); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 2.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_0_HS_22_0.png"
          }
         ]
        },
        "pitch": -0.69
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_t.jpg",
  "label": "03. SALON - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -133.76,
   "pitch": -4.07
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6DED817_B8B9_24F6_41E2_F0DAC8B8391F",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8, this.camera_CFB25785_C1EF_7F86_41D2_3DE343D7011C); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.23,
        "yaw": 97.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_0_HS_12_0.png"
          }
         ]
        },
        "pitch": -18.03
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6DEC817_B8B9_24F6_41B8_A1460D2337E4",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5, this.camera_CF96F7A9_C1EF_7F81_41C9_95F7A003C7CA); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -76.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_0_HS_13_0.png"
          }
         ]
        },
        "pitch": 1.32
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6DEF817_B8B9_24F6_41C7_F8599470C9D3",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939, this.camera_CF64F7BB_C1EF_7F82_41E8_27AAD67F5457); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.22,
        "yaw": 65.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 92,
           "width": 93,
           "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_0_HS_14_0.png"
          }
         ]
        },
        "pitch": 0.46
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6DEE818_B8B9_24FA_41E1_662E8AE7DE84",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047, this.camera_CF80A797_C1EF_7F82_41DE_04DC2CEBEA6F); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.22,
        "yaw": 80.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 92,
           "width": 93,
           "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_0_HS_15_0.png"
          }
         ]
        },
        "pitch": 0.6
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_t.jpg",
  "label": "04. HALL HAB - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 5.8,
   "pitch": 2.81
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6160611_B8BB_6CCA_41DF_54D96694B987",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41, this.camera_CC1236DF_C1EF_7181_41C6_CC449D079E87); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 160.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 1.07
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_AA4C2395_B9BB_2BCA_41E6_22234FE92289",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73, this.camera_CC0C26BE_C1EF_7182_41D4_28B8964903C2); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 170.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 1.32
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_t.jpg",
  "label": "05. ALCOBA PPAL - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6DE9F73_B8BA_DB4E_41A2_D352A14834BC",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047, this.camera_CD5DA859_C1EF_708F_41E2_2C99F44BA1D3); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -58.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.58
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_AAA77599_B9BA_EFFA_41A9_F7631AF836A3",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A, this.camera_CD517845_C1EF_7086_41E3_36C01083E056); this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -35.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 0.82
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_t.jpg",
  "label": "06. HAB AUX",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -31.57,
   "pitch": -5.38
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6EE80D8_B8B9_257A_41E5_BE5E476CB859",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047, this.camera_CD21188C_C1EF_7185_41BE_085D50224E13); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 57.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.82
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_t.jpg",
  "label": "07. HAB AUX 2 - GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CFFAFB83_C1E7_1782_41E3_DCFB599DA5FB",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41, this.camera_CC8835C4_C1EF_7386_41CA_1897A4973B2A); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -154.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.57
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_t.jpg",
  "label": "8. 360  SALON LECTURA - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_CD92A09A_C1E5_1182_41B7_895707A20047",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CD93409B_C1E5_1182_41CF_53222400E0C9",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41, this.camera_CCACE57E_C1EF_7082_41C0_858980C7DC7E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "yaw": -160.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 2.83
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CD93609B_C1E5_1182_41C1_EDB538CE0F1D",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42, this.camera_CCB17596_C1EF_7382_41C6_D4D99141F980); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 15.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 1.82
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CD93009B_C1E5_1182_41B4_FF9627380C94",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3, this.camera_CCDBE56B_C1EF_7082_41D4_F4903C9CED8E); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 162.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 1.32
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CD92A09A_C1E5_1182_41B7_895707A20047_t.jpg",
  "label": "9. 360  HALL HAB 2 - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CD92A09A_C1E5_1182_41B7_895707A20047_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B2F16777_B949_6B36_41D2_B3C49F474751",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B2F16777_B949_6B36_41D2_B3C49F474751_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B45A4AE6_B94B_2556_4191_E10F7BDED8EE",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4, this.camera_CCD05559_C1EF_708E_41CB_27C66CC0BE80); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -23.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B2F16777_B949_6B36_41D2_B3C49F474751_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -2.45
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B2F16777_B949_6B36_41D2_B3C49F474751_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B2F16777_B949_6B36_41D2_B3C49F474751.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B2F16777_B949_6B36_41D2_B3C49F474751_t.jpg",
  "label": "10. 360  CINE GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B2F16777_B949_6B36_41D2_B3C49F474751_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B78B270F_B949_6CD6_41D9_0BC549162097",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4, this.camera_CFE18701_C1EF_707E_41D9_09D3C6DB0C59); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 8.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_t.jpg",
  "label": "11. 360  SALON TV - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B62AE6C3_B949_6D4E_41E3_87F6CE78169E",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8, this.camera_CD5B9876_C1EF_7082_41DF_F836359DCD4D); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.58,
        "yaw": -92.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -4.21
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_t.jpg",
  "label": "12. 360  BA\u00d1O SOCIAL - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B60624C3_B9B6_ED4E_41C3_669F5A279FBA",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4, this.camera_CF4CA7FF_C1EF_7F82_41D8_AE17B84FBF36); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -155.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_t.jpg",
  "label": "13. 360  TERRAZA - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CCE85688_C1E7_118E_41D8_789674D398F3",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16, this.camera_CC8515B2_C1EF_7382_41C5_2A754FB2C610); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.53,
        "yaw": 64.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 7.85
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_t.jpg",
  "label": "14. 360 FIRE PIT -  CASA GAME -",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B6F9ABE2_B9B6_FB4E_41E3_4AAB6EB68C26",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73, this.camera_CFF7D728_C1EF_708E_41CD_EEB26066651A); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -172.93,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.69
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_t.jpg",
  "label": "15. 360  BA\u00d1O ppal - CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A95FEE7D_B9B9_DD3A_41D5_2E454CE04A8F",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E, this.camera_CC6D05E8_C1EF_738E_41DC_68C851831BDA); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "yaw": -139.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 3.83
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A91A5F88_B9BB_3BDA_41C0_2651C6D73B01",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5, this.camera_CC9EE5D6_C1EF_7382_41D4_21191BD97C7D); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": 155.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 1.32
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_t.jpg",
  "label": "16. 360  VEST PPAL- CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A987FA0B_B9BB_64DE_41A0_8FE468350685",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3, this.camera_CCC85547_C1EF_7082_41D9_D1AADCB5403C); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.6,
        "yaw": -114.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.57
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_t.jpg",
  "label": "17. 360  BA\u00d1O AUX- CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "cardboardMenu": "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
  "id": "panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CC255E2C_C1E5_1085_41A1_440D0A112D76",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4, this.camera_CC7335FA_C1EF_7382_41E2_DE8B939F5D2C); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "yaw": 128.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -2.95
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_t.jpg",
  "label": "18. 360  ALCOBA HUESPEDES- CASA GAME",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16",
    "camera": "this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8",
    "camera": "this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4",
    "camera": "this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41",
    "camera": "this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5",
    "camera": "this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3",
    "camera": "this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42",
    "camera": "this.panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939",
    "camera": "this.panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047",
    "camera": "this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_B2F16777_B949_6B36_41D2_B3C49F474751",
    "camera": "this.panorama_B2F16777_B949_6B36_41D2_B3C49F474751_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F",
    "camera": "this.panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D",
    "camera": "this.panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A",
    "camera": "this.panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081",
    "camera": "this.panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E",
    "camera": "this.panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73",
    "camera": "this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A",
    "camera": "this.panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8",
    "camera": "this.panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16",
    "camera": "this.panorama_B32A8D6E_B8BE_DF59_41DA_C86922B95F16_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8",
    "camera": "this.panorama_B36F6EEC_B8B9_3D5A_41D6_84A6C85072C8_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4",
    "camera": "this.panorama_B50B05DC_B8B9_2F7A_41D3_BA308027B9B4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41",
    "camera": "this.panorama_B6DD1817_B8B9_24F6_41D7_C7A0DE36DD41_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5",
    "camera": "this.panorama_B6163611_B8BB_6CCA_41CC_8B5ABCF1ADD5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3",
    "camera": "this.panorama_B6DEEF73_B8BA_DB4E_41E6_B6D8604429B3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42",
    "camera": "this.panorama_B6EEF0D8_B8B9_257A_41D6_181893ACAE42_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939",
    "camera": "this.panorama_CFFA1B83_C1E7_1782_41BA_8751460A7939_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047",
    "camera": "this.panorama_CD92A09A_C1E5_1182_41B7_895707A20047_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_B2F16777_B949_6B36_41D2_B3C49F474751",
    "camera": "this.panorama_B2F16777_B949_6B36_41D2_B3C49F474751_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F",
    "camera": "this.panorama_B2ED4ECE_B949_5D56_41E2_73FB6A62451F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "media": "this.panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D",
    "camera": "this.panorama_B51D3C7F_B94A_DD36_41C6_41D312101D8D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "media": "this.panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A",
    "camera": "this.panorama_B51E6943_B94A_E74E_41E2_6CE5DB6C0D1A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
    "media": "this.panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081",
    "camera": "this.panorama_CCE8A688_C1E7_118E_41E2_3FC1DE66A081_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
    "media": "this.panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E",
    "camera": "this.panorama_B50B5679_B94B_6D3A_41D7_BE14EF98BC6E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
    "media": "this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73",
    "camera": "this.panorama_B504C552_B94B_2F4E_41DB_D0B1D29B8C73_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
    "media": "this.panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A",
    "camera": "this.panorama_B51EB1F5_B94B_E74A_41E0_1AE7CAEC0E9A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 0)",
    "media": "this.panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8",
    "camera": "this.panorama_CC252E2C_C1E5_1085_41E0_B9E6EB6446B8_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_CCFA1529_C1EF_708E_41E5_910EC8F92C4D",
 {
  "class": "PanoramaCamera",
  "id": "camera_CCC85547_C1EF_7082_41D9_D1AADCB5403C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 144.48,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CCD05559_C1EF_708E_41CB_27C66CC0BE80",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 51.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CCDBE56B_C1EF_7082_41D4_F4903C9CED8E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 121.62,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CCACE57E_C1EF_7082_41C0_858980C7DC7E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -99.36,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CCB17596_C1EF_7382_41C6_D4D99141F980",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -122.06,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC8515B2_C1EF_7382_41C5_2A754FB2C610",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 48.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC8835C4_C1EF_7386_41CA_1897A4973B2A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -114.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC9EE5D6_C1EF_7382_41D4_21191BD97C7D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -9.01,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC6D05E8_C1EF_738E_41DC_68C851831BDA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 7.07,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC7335FA_C1EF_7382_41E2_DE8B939F5D2C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 63.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC41960C_C1EF_7086_41E7_758D7861986A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 24.4,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC57662D_C1EF_7086_41DB_27AE82BD99B4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -154.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC25F64E_C1EF_7082_41CC_C73B7CC4351B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 156.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC2BA67B_C1EF_7083_40F8_FF78B85A4A60",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -51.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC39869D_C1EF_7187_41E6_FC4794AD4B78",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -171.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC0C26BE_C1EF_7182_41D4_28B8964903C2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -24.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CC1236DF_C1EF_7181_41C6_CC449D079E87",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 103.79,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFE18701_C1EF_707E_41D9_09D3C6DB0C59",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 3.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFF7D728_C1EF_708E_41CD_EEB26066651A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 40.98,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFC5C73C_C1EF_7086_4197_63026E009FCE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -82.37,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFC8174E_C1EF_7082_41E4_F7E2E9D86414",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -62.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFDE0760_C1EF_70BE_41E2_42E03540DD65",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 87.96,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFAC4772_C1EF_7082_41E1_3BA3C25C5785",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 82.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CFB25785_C1EF_7F86_41D2_3DE343D7011C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 174.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF80A797_C1EF_7F82_41DE_04DC2CEBEA6F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 19.63,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF96F7A9_C1EF_7F81_41C9_95F7A003C7CA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -19.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF64F7BB_C1EF_7F82_41E8_27AAD67F5457",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 25.91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF6B37D0_C1EF_7F9D_41C1_0CCA7D785BDD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -4.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF7927EB_C1EF_7F82_41D4_A6A1E40B0737",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -115.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CF4CA7FF_C1EF_7F82_41D8_AE17B84FBF36",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -177.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CD517845_C1EF_7086_41E3_36C01083E056",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 65.1,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CD5DA859_C1EF_708F_41E2_2C99F44BA1D3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -17.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CD5B9876_C1EF_7082_41DF_F836359DCD4D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 54.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CD21188C_C1EF_7185_41BE_085D50224E13",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -164.52,
   "pitch": 0
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "duration": 5000,
  "height": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "duration": 5000,
  "height": 800,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "duration": 5000,
  "height": 800,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "duration": 5000,
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "duration": 5000,
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "duration": 5000,
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "duration": 5000,
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg"
    }
   ]
  }
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "minHeight": 50,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowHorizontalLength": 0,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowVerticalLength": 0,
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "class": "ViewerArea",
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingRight": 0,
      "height": "76.75%",
      "maxWidth": 70,
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "toolTip": "Full Screen",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "class": "IconButton",
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "minHeight": 1,
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "toolTipTextShadowColor": "#000000",
      "maxHeight": 70,
      "toolTipPaddingTop": 9,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "borderSize": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingRight": 0,
      "height": "76.75%",
      "maxWidth": 70,
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "toolTip": "Audio On/Off",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "class": "IconButton",
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "minHeight": 1,
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "toolTipTextShadowColor": "#000000",
      "maxHeight": 70,
      "toolTipPaddingTop": 9,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "borderSize": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingRight": 0,
    "height": "100%",
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "propagateClick": false,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "data": {
     "name": "-Hide buttons"
    },
    "horizontalAlign": "right",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "borderSize": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "width": "22.545%",
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "class": "Container",
  "top": "89%",
  "scrollBarOpacity": 0.5,
  "minHeight": 50,
  "propagateClick": false,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "borderSize": 0,
  "minWidth": 265,
  "borderRadius": 5,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "right": 25,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingRight": 0,
  "height": "25%",
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "top",
  "class": "Container",
  "top": "3.5%",
  "minHeight": 120,
  "propagateClick": false,
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "data": {
   "name": "--Stickers Container"
  },
  "horizontalAlign": "left",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "borderSize": 0,
  "minWidth": 300,
  "left": "2.14%",
  "layout": "vertical",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingTop": 0
 },
 {
  "itemLabelHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelPosition": "bottom",
  "maxWidth": 150,
  "rollOverItemLabelFontWeight": "bold",
  "paddingRight": 15,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontStyle": "normal",
  "scrollBarColor": "#52B7EF",
  "scrollBarMargin": 4,
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadow": false,
  "scrollBarOpacity": 1,
  "itemBackgroundColor": [],
  "selectedItemBackgroundColor": [],
  "shadow": false,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemThumbnailWidth": 80,
  "itemLabelTextDecoration": "none",
  "itemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "underline",
  "minHeight": 1,
  "itemLabelFontWeight": "normal",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailBorderRadius": 50,
  "itemVerticalAlign": "middle",
  "borderSize": 0,
  "minWidth": 1,
  "itemPaddingLeft": 3,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailOpacity": 1,
  "selectedItemLabelFontStyle": "italic",
  "backgroundColorDirection": "vertical",
  "selectedItemBorderSize": 0,
  "scrollBarWidth": 7,
  "paddingTop": 20,
  "gap": 10,
  "itemPaddingRight": 3,
  "selectedItemBackgroundOpacity": 0,
  "selectedItemLabelFontSize": 12,
  "itemPaddingBottom": 3,
  "selectedItemLabelTextDecoration": "underline",
  "height": "82.127%",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundColorRatios": [],
  "itemPaddingTop": 3,
  "paddingBottom": 20,
  "paddingLeft": 15,
  "verticalAlign": "top",
  "itemMode": "normal",
  "class": "ThumbnailList",
  "selectedItemBorderRadius": 0,
  "itemThumbnailHeight": 80,
  "itemLabelGap": 9,
  "itemLabelFontFamily": "Arial",
  "itemLabelFontSize": 12,
  "visible": false,
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "top": "3.5%",
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver",
  "itemHorizontalAlign": "center",
  "layout": "vertical",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemThumbnailShadow": true,
  "data": {
   "name": "-ThumbnailList"
  },
  "itemLabelFontColor": "#FFFFFF",
  "itemOpacity": 1,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "borderRadius": 3,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "right": "2%"
 },
 {
  "children": [
   {
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "height": "55.435%",
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "propagateClick": false,
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "data": {
     "name": "Container Content"
    },
    "horizontalAlign": "left",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "borderSize": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingRight": 0,
  "height": 92,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "bottom",
  "class": "Container",
  "minHeight": 1,
  "propagateClick": false,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "data": {
   "name": "-Discover Container"
  },
  "horizontalAlign": "left",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "borderSize": 0,
  "minWidth": 1,
  "left": "2%",
  "layout": "vertical",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingTop": 0
 },
 {
  "width": "5%",
  "paddingRight": 0,
  "height": "5%",
  "maxWidth": 485,
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "class": "Image",
  "top": "0.98%",
  "minHeight": 1,
  "propagateClick": false,
  "maxHeight": 265,
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "data": {
   "name": "Image21736"
  },
  "horizontalAlign": "center",
  "borderSize": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "right": "0.6%",
  "paddingTop": 0
 }
], 
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "vrPolyfillScale": 0.85,
 "paddingBottom": 0,
 "shadow": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Player",
 "minHeight": 20,
 "propagateClick": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "horizontalAlign": "left",
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "paddingTop": 0
})