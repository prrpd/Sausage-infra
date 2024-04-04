output "ip_address_internal" {
  value = module.instance.ip_address_internal
}

output "ip_address_external" {
  value = module.instance.ip_address_external
}

output "yandex_vpc_network" {
  value = module.network.yandex_vpc_network
}

# output "yandex_vpc_network2" {
#   value = module.network.yandex_vpc_network.subnet_ids
# }

output "yandex_vpc_subnet" {
  value = module.network.yandex_vpc_subnet
}
