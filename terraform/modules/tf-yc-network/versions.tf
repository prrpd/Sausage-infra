terraform {
  required_providers {
    yandex = {
      source  = "yandex-cloud/yandex"
      version = ">= 0.87.0"
    }
  }
  # Описание бэкенда хранения состояния
  backend "s3" {
    endpoint = "storage.yandexcloud.net"
    bucket   = "terraform-state-std027-58"
    region   = "ru-central1"
    key      = "prakt1/terraform.tfstate"

    skip_region_validation      = true
    skip_credentials_validation = true
  }
}
