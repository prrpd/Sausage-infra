Если бы у Яндекса были регионы в других странах, то проще было бы разместить 
ресурсы ещё и там, а не уходить к ещё одному облачному провайдеру. В этом случае
не будет зоопарка решений из разных инструментов, т.е. будет использоваться уже 
знакомый отлаженный набор инструментов. И не нужно думать насколько совместимы 
между собой компоненты от разных провайдеров. По мере увеличения количества 
используемых облаков возрастает сложность управления и контроля. А это, в свою 
очередь, может повлечь за собой усложнение бизнес-процессов, увеличение штата 
ИТ-персонала, необходимость найма дорогостоящих сотрудников, закупку систем 
управления.
С другой стороны мультиоблако позволит не попадать в зависимость от одного 
провайдера, экосистемы. Также повысить доступность предоставляемых сервисов,
и, возможно, уменьшить затраты.

Описание архитектуры
Будем использовать ещё один кластер k8s, для этого используем в AWS Elastic 
Kubernetes Service (EKS). В ArgoCD настраиваем ещё один сервер k8s, и при деплое
поды фронта и бэка будут создаваться в облаке Яндекса и в облаке AWS (и там и 
там одинаковое поды).
Пользователей будем раскидывать по кластерам на основе их локации, для этого 
будем использовать AWS Route53 DNS сервис, в котором укажем правила 
распределения пользователей.

Таким образом мы обеспечим высокую доступность приложений frontend, backend и 
backend-report. Но базы данных будут только в облаке Яндекса.
Либо настраиваем БД в AWS, и настраиваем репликацию данных БД между облаками, но
в любом случае запись данных в БД всегда будет только в мастер, который будет 
активным в одном из облаков.

