variable "platform_id" {
  type        = string
  default     = "standard-v2"
  description = "platform_id"
}

variable "zone" {
  type        = string
  default     = "ru-central1-d"
  description = "zone_id"
}

variable "disk_size" {
  type        = number
  default     = 50
  description = "disk_size"
}
