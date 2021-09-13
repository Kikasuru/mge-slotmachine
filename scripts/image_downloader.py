import json
import requests

def main():
    # Load the Mamano JSON
    with open("./mamano.json", "r") as file:
        mamano = json.load(file)
        file.close()

    # Go through each mamano
    for i in range(len(mamano)):
        # Download the picture file
        img_req = requests.get(mamano[i]["img"])
        img_name = f"{mamano[i]['name'].replace(' ', '_').replace('/', '')}.png"

        # Put it into a file
        with open(f"./images/{img_name}", "wb") as file:
            file.write(img_req.content)
            file.close()

        # Change the img property
        mamano[i]["img"] = f"/images/{img_name}"

        # Log this mamano as finished
        print(f"{mamano[i]['name']} has been downloaded as {img_name}!")

    # Save the changes done to the JSON
    with open("./mamano.json", "w") as file:
        file.write(json.dumps(mamano))
        file.close()

if __name__ == "__main__":
    main()