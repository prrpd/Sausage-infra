variable "platform_id" {
}

variable "zone" {
}

variable "image_id" {
}

variable "vm_name" {
}

variable "disk_size" {
  type        = number
  default     = 30
  description = "disk_size"
}

variable "subnet_id" {
  type        = string
  description = "subnet_id"
}
