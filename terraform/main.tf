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

provider "yandex" {
  cloud_id  = "b1g3jddf4nv5e9okle7p"
  folder_id = "b1g7m6kc3j2jd2hagpgm"
  zone      = "ru-central1-d"
}


data "template_file" "user_data" {
  template = file("cloud-init.yaml")
}

resource "yandex_compute_instance" "vm-1" {
  name        = "chapter5-lesson2-std027-58"
  platform_id = "standard-v2"

  # Конфигурация ресурсов:
  # количество процессоров и оперативной памяти
  resources {
    cores  = 2
    memory = 2
  }

  # Загрузочный диск:
  # здесь указывается образ операционной системы
  # для новой виртуальной машины
  boot_disk {
    initialize_params {
      image_id = "fd80qm01ah03dkqb14lc"
    }
  }

  # Сетевой интерфейс:
  # нужно указать идентификатор подсети, к которой будет подключена ВМ
  network_interface {
    subnet_id = "fl838f9ca4c3mhger4e3"
    nat       = false
  }

  # Метаданные машины:
  # здесь можно указать скрипт, который запустится при создании ВМ
  # или список SSH-ключей для доступа на ВМ
  metadata = {
    ssh-keys  = "ubuntu:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDU4vp/4vCsyNg29+6rLmVaWK2nXmgrawzWivPCGfSF4D+/AGy/SUjlTvKbCySuVOw79IzS63VP/1NdE5ylkQlyRLH3GuVFzPzXA3KG+SR4M8Xl+HqzqEuGSx1+XCigcRbaBbepJUpz6zm2OuDf36gyB1HJI40xRTphQXD4ypM1fhEFAXD+ZKAqOP0rQbCYmPkx18/crxNOUUjD83LBahqxo7sTEb4LQg0FZOP2Nhhc9m6MyLmzJY8+MP3xbh4nUHL7bF1T5sqiOB81a2oCQ6bIhvJ8zfjVfYoaeDpAmOLUhOb5ld0mrjRAUCbRh8xAz8HGOMfqTVH3O9EfLiMQTtEJp0dImkL/EFpO4CwJ6NI1RxLm7z0GKArTNCoBi3NmUNdN68UEOQR2FT/8mbVffBAvuVrcSXWDzQz+qt0KHf1O1J/D3WmKAN79msbAQ5wuwTZcahk36EuV3VJVGtNUeSVfGkOJ9LGlmlugKE1EEcljGKomJHD9iTbdmNsIQxqFRXk= student@fhmiiph1brt44tdm105k"
    user_data = data.template_file.user_data.rendered
  }


}
