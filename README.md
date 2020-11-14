## Install

[Read the official "Getting Started" guide](https://api-platform.com/docs/distribution).

## Database structure
- La table des ventes ainsi que l'entité est nommé Mutation commet sur la [notice](https://www.data.gouv.fr/fr/datasets/r/d573456c-76eb-4276-b91c-e6b9c89d6656) 
- Veuillez importer la table contenant tout les données depuis la seconde semestre de 2015 jusqu'au premier semestre 2020 [mutation table](https://drive.google.com/file/d/1a-bNs2vR9iwJjcVHU_U_1hcsI4b0CpDW/view?usp=sharing)
- Les endpoints des api sont: 
* averageSalesPerYear: 
    curl -X GET "https://localhost:8443/averageSalesPerYear" -H  "accept: application/json"
* salesFilter 
    curl -X GET "https://localhost:8443/salesFilter?startDate=2015-01-01&endDate=2020-12-01" -H  "accept: application/json"   
* salesPerDepartment 
    curl -X GET "https://localhost:8443/salesPerDepartment" -H  "accept: application/json"   
