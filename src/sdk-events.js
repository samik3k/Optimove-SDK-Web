var optimoveCoreEvents = {
	"events": {
		"optimove_sdk_metadata": {
			"id": 1007,
			"supportedOnOptitrack": true,
			"supportedOnRealTime": false,
			"parameters": {
				"event_platform": {
					"id": 1000,
					"name": "Platform",
					"configName": "event_platform",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 8
				},
				"event_device_type": {
					"id": 1001,
					"name": "Device Type",
					"configName": "event_device_type",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 9
				},
				"event_os": {
					"id": 1002,
					"name": "OS",
					"configName": "event_os",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 10
				},
				"event_native_mobile": {
					"id": 1003,
					"name": "Native Mobile",
					"configName": "event_native_mobile",
					"type": "Boolean",
					"optional": true,
					"optiTrackDimensionId": 11
				},
				"sdk_platform": {
					"id": 1,
					"name": "SDK Platform",
					"configName": "sdk_platform",
					"type": "String",
					"optional": false,
					"optiTrackDimensionId": 12
				},
				"sdk_version": {
					"id": 2,
					"name": "SDK Version",
					"configName": "sdk_version",
					"type": "String",
					"optional": false,
					"optiTrackDimensionId": 13
				},
				"config_file_url": {
					"id": 3,
					"name": "Config file URL",
					"configName": "config_file_url",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 14
				},
				"app_ns": {
					"id": 4,
					"name": "App Namespace",
					"configName": "app_ns",
					"type": "String",
					"optional": false,
					"optiTrackDimensionId": 15
				},
				"campaign_name": {
					"id": 5,
					"name": "UTM Campaign Name",
					"configName": "campaign_name",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 16
				},
				"campaign_keyword": {
					"id": 6,
					"name": "UTM Campaign Keyword",
					"configName": "campaign_keyword",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 17
				},
				"campaign_source": {
					"id": 7,
					"name": "UTM Campaign Source",
					"configName": "campaign_source",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 18
				},
				"campaign_medium": {
					"id": 8,
					"name": "UTM Campaign Medium",
					"configName": "campaign_medium",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 19
				},
				"campaign_content": {
					"id": 9,
					"name": "UTM Campaign Content",
					"configName": "campaign_content",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 20
				},
				"campaign_id": {
					"id": 10,
					"name": "UTM Campaign ID",
					"configName": "campaign_id",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 21
				},
				"location": {
					"id": 11,
					"name": "GEO Location",
					"configName": "location",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 22
				},
				"location_latitude": {
					"id": 12,
					"name": "Location latitude",
					"configName": "location_latitude",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 23
				},
				"location_longitude": {
					"id": 13,
					"name": "Location longitude",
					"configName": "location_longitude",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 24
				},
				"ip": {
					"id": 14,
					"name": "IP Address",
					"configName": "ip",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 25
				},
				"language": {
					"id": 15,
					"name": "Language",
					"configName": "language",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 26
				}
			}
		},
		"web_popup_displayed": {
			"id": 1008,
			"supportedOnOptitrack": true,
			"supportedOnRealTime": true,
			"parameters": {
				"event_platform": {
					"id": 1000,
					"name": "Platform",
					"configName": "event_platform",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 8
				},
				"event_device_type": {
					"id": 1001,
					"name": "Device Type",
					"configName": "event_device_type",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 9
				},
				"event_os": {
					"id": 1002,
					"name": "OS",
					"configName": "event_os",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 10
				},
				"event_native_mobile": {
					"id": 1003,
					"name": "Native Mobile",
					"configName": "event_native_mobile",
					"type": "Boolean",
					"optional": true,
					"optiTrackDimensionId": 11
				},
				"campaign_detail_id": {
					"id": 1,
					"name": "Campaign Detail ID",
					"configName": "campaign_detail_id",
					"type": "Number",
					"optional": false,
					"optiTrackDimensionId": 12
				},
				"template_id": {
					"id": 2,
					"name": "Template ID",
					"configName": "template_id",
					"type": "Number",
					"optional": true,
					"optiTrackDimensionId": 13
				},
				"action_channel_id": {
					"id": 3,
					"name": "Action Channel ID",
					"configName": "action_channel_id",
					"type": "Number",
					"optional": true,
					"optiTrackDimensionId": 14
				},
				"send_id": {
					"id": 4,
					"name": "Send ID",
					"configName": "send_id",
					"type": "String",
					"optional": true,
					"optiTrackDimensionId": 15
				}
			}
		},
		"ticket_opened":{
			"id": 1023,
			"supportedOnOptitrack": false,
			"supportedOnRealTime": true,
			"parameters": {}
		},
		"ticket_resolved":{
			"id": 1024,
			"supportedOnOptitrack": false,
			"supportedOnRealTime": true,
			"parameters": {}
        },
        "set_user_id_event": {
            "id": 1001,
            "supportedOnOptitrack": true,
            "supportedOnRealTime": true,
            "parameters": {
              "event_platform": {
                "id": 1000,
                "name": "Platform",
                "configName": "event_platform",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 11
              },
              "event_device_type": {
                "id": 1001,
                "name": "Device Type",
                "configName": "event_device_type",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 12
              },
              "event_os": {
                "id": 1002,
                "name": "OS",
                "configName": "event_os",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 13
              },
              "event_native_mobile": {
                "id": 1003,
                "name": "Native Mobile",
                "configName": "event_native_mobile",
                "type": "Boolean",
                "optional": true,
                "optiTrackDimensionId": 14
              },
              "originalVisitorId": {
                "id": 1,
                "name": "Original Visitor ID",
                "configName": "originalVisitorId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 8
              },
              "userId": {
                "id": 2,
                "name": "User ID",
                "configName": "userId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 9
              },
              "updatedVisitorId": {
                "id": 3,
                "name": "Updated Visitor ID",
                "configName": "updatedVisitorId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 10
              }
            }
          },
          "set_email_event": {
            "id": 1002,
            "supportedOnOptitrack": true,
            "supportedOnRealTime": true,
            "parameters": {
              "event_platform": {
                "id": 1000,
                "name": "Platform",
                "configName": "event_platform",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 9
              },
              "event_device_type": {
                "id": 1001,
                "name": "Device Type",
                "configName": "event_device_type",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 10
              },
              "event_os": {
                "id": 1002,
                "name": "OS",
                "configName": "event_os",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 11
              },
              "event_native_mobile": {
                "id": 1003,
                "name": "Native Mobile",
                "configName": "event_native_mobile",
                "type": "Boolean",
                "optional": true,
                "optiTrackDimensionId": 12
              },
              "email": {
                "id": 1,
                "name": "Email",
                "configName": "email",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 8
              }
            }
          },
          "stitch_event": {
            "id": 1004,
            "supportedOnOptitrack": true,
            "supportedOnRealTime": false,
            "parameters": {
              "event_platform": {
                "id": 1000,
                "name": "Platform",
                "configName": "event_platform",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 11
              },
              "event_device_type": {
                "id": 1001,
                "name": "Device Type",
                "configName": "event_device_type",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 12
              },
              "event_os": {
                "id": 1002,
                "name": "OS",
                "configName": "event_os",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 13
              },
              "event_native_mobile": {
                "id": 1003,
                "name": "Native Mobile",
                "configName": "event_native_mobile",
                "type": "Boolean",
                "optional": true,
                "optiTrackDimensionId": 14
              },
              "sourcePublicCustomerId": {
                "id": 1,
                "name": "Source Public Customer Id",
                "configName": "sourcePublicCustomerId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 8
              },
              "sourceVisitorId": {
                "id": 2,
                "name": "Source Visitor ID",
                "configName": "sourceVisitorId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 9
              },
              "targetVisitorId": {
                "id": 3,
                "name": "Target Visitor ID",
                "configName": "targetVisitorId",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 10
              }
            }
          },
          "user_agent_header_event": {
            "id": 1005,
            "supportedOnOptitrack": true,
            "supportedOnRealTime": false,
            "parameters": {
              "event_platform": {
                "id": 1000,
                "name": "Platform",
                "configName": "event_platform",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 10
              },
              "event_device_type": {
                "id": 1001,
                "name": "Device Type",
                "configName": "event_device_type",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 11
              },
              "event_os": {
                "id": 1002,
                "name": "OS",
                "configName": "event_os",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 12
              },
              "event_native_mobile": {
                "id": 1003,
                "name": "Native Mobile",
                "configName": "event_native_mobile",
                "type": "Boolean",
                "optional": true,
                "optiTrackDimensionId": 13
              },
              "user_agent_header1": {
                "id": 1,
                "name": "User Agent Header Part 1",
                "configName": "user_agent_header1",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 8
              },
              "user_agent_header2": {
                "id": 2,
                "name": "User Agent Header Part 2",
                "configName": "user_agent_header2",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 9
              }
            }
          },
          "set_page_visit": {
            "id": 1006,
            "supportedOnOptitrack": true,
            "supportedOnRealTime": true,
            "parameters": {
              "event_platform": {
                "id": 1000,
                "name": "Platform",
                "configName": "event_platform",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 11
              },
              "event_device_type": {
                "id": 1001,
                "name": "Device Type",
                "configName": "event_device_type",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 12
              },
              "event_os": {
                "id": 1002,
                "name": "OS",
                "configName": "event_os",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 13
              },
              "event_native_mobile": {
                "id": 1003,
                "name": "Native Mobile",
                "configName": "event_native_mobile",
                "type": "Boolean",
                "optional": true,
                "optiTrackDimensionId": 14
              },
              "customURL": {
                "id": 1,
                "name": "Page URL",
                "configName": "customURL",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 8
              },
              "pageTitle": {
                "id": 2,
                "name": "Page Title",
                "configName": "pageTitle",
                "type": "String",
                "optional": false,
                "optiTrackDimensionId": 9
              },
              "category": {
                "id": 3,
                "name": "Page Category",
                "configName": "category",
                "type": "String",
                "optional": true,
                "optiTrackDimensionId": 10
              }
            }
          }
	}
};

export default optimoveCoreEvents;
