import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x1cD53ae14ec62Bef9d3fba1c3e8C9B999e0932A1");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Zealous",
        description: "This NFT will give you access to Zealous Club!",
        image: readFileSync("scripts/assets/ZealousW.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();