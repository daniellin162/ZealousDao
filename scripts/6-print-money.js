import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xccE7a9b552496dcb831F5c4A259488a4c13A646c");

(async () => {
  try {
    // Max supply
    const amount = 1000000;
    // Minting
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out amount of tokens in circulation
    console.log("✅ There now is", totalSupply.displayValue, "$HOKAGE in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();