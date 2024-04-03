module "instance" {
  source = "./modules/tf-yc-instance"

}

module "network" {
  source = "./modules/tf-yc-network"

}
