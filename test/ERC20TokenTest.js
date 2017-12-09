const ERC20Token = artifacts.require("./ERC20Token.sol");
contract('ERC20Token', function(accounts) {
    it("init token", async function() {
        let token = await ERC20Token.new();
        console.log(token);

    });

    it("should allow only owner to transfer token", async function() {
        //todo mint account[0]
        //todo transfer  to account[1]
        //todo try transfer from another user account[1] to account[2]

    });

});
