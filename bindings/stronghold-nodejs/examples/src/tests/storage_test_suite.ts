import { StorageTestSuite } from "@iota/identity-wasm/node";
import { stronghold } from "../stronghold";

// Only verifies that no uncaught exceptions are thrown, including syntax errors etc.
describe("Test Stronghold Node.js", function() {
    it("didCreateGenerateKey", async () => {
        await StorageTestSuite.didCreateGenerateKeyTest(await stronghold());
    });
    it("didCreatePrivateKey", async () => {
        await StorageTestSuite.didCreatePrivateKeyTest(await stronghold());
    });
    it("keyGenerate", async () => {
        await StorageTestSuite.keyGenerateTest(await stronghold());
    });
    it("keyDelete", async () => {
        await StorageTestSuite.keyDeleteTest(await stronghold());
    });
    it("keyInsert", async () => {
        await StorageTestSuite.keyInsertTest(await stronghold());
    });
    it("didList", async () => {
        await StorageTestSuite.didListTest(await stronghold());
    });
    it("keySignEd25519", async () => {
        await StorageTestSuite.keySignEd25519Test(await stronghold());
    });
    it("didPurge", async () => {
        await StorageTestSuite.didPurgeTest(await stronghold());
    });
    it("encryption", async () => {
        await StorageTestSuite.encryptionTest(await stronghold(), await stronghold());
    });
});
