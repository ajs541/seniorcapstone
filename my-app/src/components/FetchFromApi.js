

function apiFetch(itemType, subsection) {
    if (itemType !== "animal" && itemType !== "habitat" && itemType !== "habitatList") {
        throw new Error("Not valid item type")
    };

    if (itemType === "habitatList") {
        let habitatsData;
        fetch('http://127.0.0.1:5000/habitats')
            .then(response => response.json())
            .then(data => {
                habitatsData = data;
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        let finalList = [];
        for (let entry of habitatsData) {
            finalList.push(entry.name)
        }
        return finalList;
    }

    if (itemType === "habitat") {
        let habitatDesc = "";
        let habitatsData;
        fetch('http://127.0.0.1:5000/habitats')
            .then(response => response.json())
            .then(data => {
                habitatsData = data;
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        for (let entry of habitatsData) {
            if (entry.name === subsection) {
                habitatDesc = entry.description
                break
            }
        }
        if (habitatDesc === "") {
            throw new Error("habitat does not exit")
        }
        let animalsData
        fetch('http://127.0.0.1:5000/habitats/' + subsection)
            .then(response => response.json())
            .then(data => {
                animalsData = data;
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        let aList = [];
        for (let entry of animalsData) {
            aList.push(entry.name)
        }
        return [subsection, habitatDesc, aList];
    }
    if (itemType === "animal") {
        let animalData;
        fetch('http://127.0.0.1:5000/animals/' + subsection)
            .then(response => response.json())
            .then(data => {
                animalData = data;
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        return animalData;
    }

}
export default apiFetch;