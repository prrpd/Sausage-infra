data "yandex_vpc_network" "network" {
  name = "default"
}

data "yandex_vpc_subnet" "subnet" {
  for_each = data.yandex_vpc_network.network.subnet_ids
  name     = "${data.yandex_vpc_network.network.name}-${each.key}"
}
