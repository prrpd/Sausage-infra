variable "network_zones" {
  type = set(string)
  default = [
    "ru-central1-a",
    "ru-central1-b",
    "ru-central1-d",
  ]
  description = "network_zones"
}

variable "zone" {
}
