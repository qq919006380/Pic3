// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EncryptedDataStorage {
    struct UserData {
        bytes encryptedToken; // 存储用户的加密令牌
    }

    mapping(address => UserData) private users;

    event TokenUploaded(address indexed user, bytes encryptedToken);

    function uploadToken(bytes memory _encryptedToken) public {
        require(_encryptedToken.length > 0, "Encrypted token cannot be empty");
        
        users[msg.sender].encryptedToken = _encryptedToken;

        emit TokenUploaded(msg.sender, _encryptedToken);
    }

    function retrieveToken() public view returns (bytes memory) {
        return users[msg.sender].encryptedToken;
    }
}

