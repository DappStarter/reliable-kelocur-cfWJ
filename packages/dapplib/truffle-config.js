require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember hole hockey kitchen tail tonight'; 
let testAccounts = [
"0x567cf3b1e641b3d5739a80c18b533393a43f2bbc9bc298b560423da0a6697fa5",
"0x3fe2cac89c8dba59d8cee67e437424b2d457e2b96c3af2f72a78307ab552a6e1",
"0x07487ae3255386d80061ed832f801d697f3309332eee8535f937d0eb6f27dfb2",
"0x428ff6e5169bdba3227c7d6e54392b26dc9d8a5a82e9db96aee38d9879358554",
"0xecb1f99f1f5a02b3def96d39e180b29dc0f7f96098361d43128ed86bd2a3a6d5",
"0x7241f8d37533a7fd3312b718162ae7557e599f50acee4c3c2f2c139808071e0a",
"0xc797793a8afa7b39d43a40372c2a54d16a0e63d7ce87efd9d1ec3ef5a3915488",
"0x0ba9819210d2070192e16849e6ddb887545482cac02dea91e18e1e6b22e7c738",
"0x0f20226321e56396a3d7428a67fae461c8749326f5194e5e846cb52657875917",
"0x68f35dc8492d27c4c5d6c8109243c591bd62b77851820ea14e7e0e88ffaa10ec"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

