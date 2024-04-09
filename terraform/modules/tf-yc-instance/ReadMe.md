Используется провайдер от Яндекса:
terraform {
  required_providers {
    yandex = {
      source  = "yandex-cloud/yandex"
      version = ">= 0.87.0"
    }
  }

В качестве параметров можно передать:
cloud_id    
folder_id   
zone        
platform_id 
image_id    
vm_name     