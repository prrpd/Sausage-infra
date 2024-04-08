data "yandex_vpc_network" "network" {
  name = "default"
}

data "yandex_vpc_subnet" "subnet" {
  name = "${data.yandex_vpc_network.network.name}-${var.zone}"
}
