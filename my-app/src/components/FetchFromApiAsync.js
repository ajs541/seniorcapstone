

async function apiFetchAsync(itemType, subsection) {
    if (itemType !== "animal" && itemType !== "habitat" && itemType !== "habitatList") {
        throw new Error("Not valid item type");
    }

    if (itemType === "habitatList") {
        try {
            const response = await fetch('http://127.0.0.1:5000/habitats');
            const habitatsData = await response.json();
            console.log(habitatsData);
            return habitatsData;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    if (itemType === "habitat") {
        try {
            const habitatResponse = await fetch('http://127.0.0.1:5000/habitats');
            const habitatsData = await habitatResponse.json();
            console.log(habitatsData);

            let habitatDesc = "";
            let habitatLink = "";
            for (let entry of habitatsData) {
                if (entry.name === subsection) {
                    habitatDesc = entry.description;
                    habitatLink = entry.picture;
                    break;
                }
            }

            if (!habitatDesc) {
                throw new Error("Habitat does not exist");
            }

            const animalResponse = await fetch(`http://127.0.0.1:5000/habitats/${subsection}`);
            const animalsData = await animalResponse.json();
            console.log(animalsData);

            return {
                habitat: subsection,
                description: habitatDesc,
                animals: animalsData,
                picture: habitatLink
            };
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    if (itemType === "animal") {
        try {
            const response = await fetch(`http://127.0.0.1:5000/animals/${subsection}`);
            const animalData = await response.json();
            console.log(animalData);
            return animalData; 
            // I DON'T KNOW WHY BUT THE API RETURNS A LIST FOR A SINGLE OBJECT, FIX THIS LATER WHEN API RETURNS OBJECT FOR SINGLE ANIMAL!!!!
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
}

export default apiFetchAsync;