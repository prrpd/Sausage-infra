data "yandex_vpc_network" "network" {
  name = "default"
}

data "yandex_vpc_subnet" "subnet" {
  for_each = toset(["ru-central1-a", "ru-central1-b", "ru-central1-d"])
  name     = "${data.yandex_vpc_network.network.name}-${each.key}"
}

# data "yandex_vpc_subnet" "subnet" {
#   zone       = var.zone
#   network_id = "${yandex_vpc_network.network.id}"
# }
