//const cosmJS = require("@cosmjs/stargate")
/*
import {
  assertIsBroadcastTxSuccess,
  SigningStargateClient,
} from "https://npmjs.com/package/@cosmjs/stargate";
*/
document.sendForm.onsubmit = () => {
  let namespace_id = document.sendForm.namespace_id.value;
  let data = document.sendForm.data.value;

  (async () => {
    // See above.
    const chainId = "blockspacerace";
    await window.keplr.enable(chainId);
    const offlineSigner = window.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();

    const client = await SigningStargateClient.connectWithSigner(
      "http://pfb.mindheartsoul.org:26659/submit_pfb",
      offlineSigner
    );

/*
    const cosmJS = new SigningCosmosClient(
      "http://pfb.mindheartsoul.org:26659/submit_pfb",
      accounts[0].address,
      offlineSigner,
    );
*/

    const result = await client.sendTokens(
      accounts[0].address,
      namespace_id,
      data,
      fee,
      ""
    );
    assertIsBroadcastTxSuccess(result);

    if (result.code !== undefined && result.code !== 0) {
      alert("Failed to send tx: " + result.log || result.rawLog);
    } else {
      alert("Succeed to send tx:" + result.transactionHash);
    }
  })();

  return false;
};
