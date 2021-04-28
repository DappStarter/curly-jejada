require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom process only venture stove crawl praise clutch gentle light army genre'; 
let testAccounts = [
"0xa00de2ef435ae5193521baa3fc41556598e8270d69254d35a0403f668e47df13",
"0x6cde7f305acfb5339010e0ab796c6085d044bd1a3457633f2cd59c9519cb2f29",
"0x6b2382797c56e071ac5f010e0dced0f40809f2d4649889c3e33116623a5055e4",
"0x754ceabf3675965e338b616b92408aa08319398a29e775ccb0878b84163e25f8",
"0x7a9da949a108ee9f737c33234ae8f44907549d3e234a3eb1bf618a3a21b22b38",
"0x5c15fedc6387fc02346d78b571d22b2f76e4584b6329811ec29464066d0ba2a4",
"0x820f27839740277745bdb1fd87dbafb2ff68be97be0860e6ffb9f6a95d849b0b",
"0x26bb9b329cd0019c30c4cb8b413225ea04e1e98adaea8648abb242bf4d73bbaf",
"0x63ea903ad53914104aeb9b0e494bc2f50c979b288340b687c37d099c66ba5796",
"0xc00f3d8f1994e68018e6ecb86b341dad6f4b4fef8cb8ea6b5188761d73300e95"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

