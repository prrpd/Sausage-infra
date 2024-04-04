module "instance" {
  source      = "./modules/tf-yc-instance"
  zone        = var.zone
  platform_id = var.platform_id
  image_id    = var.image_id
  vm_name     = var.vm_name
}

module "network" {
  source = "./modules/tf-yc-network"
  zone   = var.zone
}
