{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 5,
  "iteration": 1721212888655,
  "links": [],
  "liveNow": false,
  "panels": [
    {
      "datasource": {
        "type": "prometheus",
        "uid": "9eCci3_Sz"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "ms"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "id": 2,
      "options": {
        "legend": {
          "calcs": [
            "min",
            "max",
            "last"
          ],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "9eCci3_Sz"
          },
          "exemplar": true,
          "expr": "histogram_quantile(0.95, \n  rate(http_server_requests_seconds_bucket{uri=\"/api/orders\"}[5m])\n)",
          "interval": "",
          "legendFormat": "{{uri}} {{status}} code",
          "refId": "A"
        }
      ],
      "title": "Request latency /api/orders",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "9eCci3_Sz"
      },
      "description": "Successfull requests to business endpoints",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 12,
        "y": 0
      },
      "id": 4,
      "options": {
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "9eCci3_Sz"
          },
          "exemplar": true,
          "expr": "http_server_requests_seconds_count{uri!=\"/actuator/health\", uri!=\"/actuator/prometheus\", status!~\"4..\"}",
          "interval": "",
          "legendFormat": "{{uri}} {{status}} code {{instance}}",
          "refId": "A"
        }
      ],
      "title": "Business endpoints traffic",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "9eCci3_Sz"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 9
      },
      "id": 6,
      "options": {
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "9eCci3_Sz"
          },
          "exemplar": true,
          "expr": "http_server_requests_seconds_count{uri!=\"/actuator/health\", uri!=\"/actuator/prometheus\", status=\"404\"}",
          "interval": "",
          "legendFormat": "404 errors count",
          "refId": "A"
        }
      ],
      "title": "404 error response",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "9eCci3_Sz"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 7,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 2,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 12,
        "y": 9
      },
      "id": 8,
      "options": {
        "legend": {
          "calcs": [
            "max",
            "min",
            "last"
          ],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "9eCci3_Sz"
          },
          "exemplar": true,
          "expr": "(sum(jvm_memory_used_bytes{area=\"nonheap\"}) / sum(jvm_memory_max_bytes{area=\"nonheap\"})) * 100\n",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "used (nonheap)",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "9eCci3_Sz"
          },
          "exemplar": true,
          "expr": "(sum(jvm_memory_used_bytes{area=\"heap\"}) / sum(jvm_memory_max_bytes{area=\"heap\"})) * 100\n",
          "hide": false,
          "interval": "",
          "legendFormat": "used (heap)",
          "refId": "B"
        }
      ],
      "title": "Mem saturation",
      "type": "timeseries"
    }
  ],
  "refresh": "5s",
  "schemaVersion": 35,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": [
      {
        "current": {
          "selected": false,
          "text": "172.16.193.17:8080",
          "value": "172.16.193.17:8080"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "9eCci3_Sz"
        },
        "definition": "label_values(jvm_memory_used_bytes, instance)",
        "hide": 0,
        "includeAll": false,
        "label": "instance",
        "multi": false,
        "name": "instance",
        "options": [],
        "query": {
          "query": "label_values(jvm_memory_used_bytes, instance)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      }
    ]
  },
  "time": {
    "from": "now-30m",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "Sausage Store App",
  "uid": "Rsr-H3_Sk",
  "version": 11,
  "weekStart": ""
}
