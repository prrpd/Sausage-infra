resource "yandex_compute_instance" "vm-1" {
  name        = "chapter5-lesson2-std027-58"
  platform_id = var.platform_id
  zone        = var.zone
  #scheduling_policy = 

  resources {
    cores  = 2
    memory = 2
  }

  boot_disk {
    initialize_params {
      image_id = "fd80qm01ah03dkqb14lc"
      size     = var.disk_size
    }
  }

  network_interface {
    subnet_id = "fl838f9ca4c3mhger4e3"
    nat       = false
  }

  metadata = {
    ssh-keys = "ubuntu:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDU4vp/4vCsyNg29+6rLmVaWK2nXmgrawzWivPCGfSF4D+/AGy/SUjlTvKbCySuVOw79IzS63VP/1NdE5ylkQlyRLH3GuVFzPzXA3KG+SR4M8Xl+HqzqEuGSx1+XCigcRbaBbepJUpz6zm2OuDf36gyB1HJI40xRTphQXD4ypM1fhEFAXD+ZKAqOP0rQbCYmPkx18/crxNOUUjD83LBahqxo7sTEb4LQg0FZOP2Nhhc9m6MyLmzJY8+MP3xbh4nUHL7bF1T5sqiOB81a2oCQ6bIhvJ8zfjVfYoaeDpAmOLUhOb5ld0mrjRAUCbRh8xAz8HGOMfqTVH3O9EfLiMQTtEJp0dImkL/EFpO4CwJ6NI1RxLm7z0GKArTNCoBi3NmUNdN68UEOQR2FT/8mbVffBAvuVrcSXWDzQz+qt0KHf1O1J/D3WmKAN79msbAQ5wuwTZcahk36EuV3VJVGtNUeSVfGkOJ9LGlmlugKE1EEcljGKomJHD9iTbdmNsIQxqFRXk= student@fhmiiph1brt44tdm105k"
    #user_data = data.template_file.user_data.rendered
  }
}
