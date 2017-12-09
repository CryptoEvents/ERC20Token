const ERC20Token = artifacts.require("./ERC20Token.sol");
contract('ERC20Token', function(accounts) {
    it("init token", async function() {
        let token = await ERC20Token.new();
        console.log(token);

    });

});
