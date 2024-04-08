module "instance" {
  source      = "./modules/tf-yc-instance"
  zone        = var.zone
  platform_id = var.platform_id
  image_id    = var.image_id
  vm_name     = var.vm_name
  subnet_id   = module.network.yandex_vpc_subnet.subnet_id
}

module "network" {
  source = "./modules/tf-yc-network"
  zone   = var.zone
}
