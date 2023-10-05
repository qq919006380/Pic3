// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedImageUpload {
    struct Image {
        string cid;
        string name;
    }

    struct User {
        Image[] images;
        mapping(string => bool) cidExists;
    }

    mapping(address => User) private users;

    event ImagesAdded(address indexed user, string[] cids, string[] names);
    event ImagesRemoved(address indexed user, string[] cids);

    function addImages(string[] memory _cids, string[] memory _names) public {
        require(_cids.length == _names.length, "CID and name arrays must have the same length");
        
        for (uint256 i = 0; i < _cids.length; i++) {
            require(bytes(_cids[i]).length > 0, "CID cannot be empty");
            require(bytes(_names[i]).length > 0, "Name cannot be empty");
            require(!users[msg.sender].cidExists[_cids[i]], "CID already exists for the user");
        
            users[msg.sender].images.push(Image(_cids[i], _names[i]));
            users[msg.sender].cidExists[_cids[i]] = true;
        }

        emit ImagesAdded(msg.sender, _cids, _names);
    }

    function removeImages(string[] memory _cids) public {
        for (uint256 i = 0; i < _cids.length; i++) {
            string memory cidToRemove = _cids[i];
            uint256 imageIndexToRemove = getUserImageIndex(msg.sender, cidToRemove);
            require(imageIndexToRemove < users[msg.sender].images.length, "Image not found");

            // Swap the image to remove with the last image in the array
            uint256 lastIndex = users[msg.sender].images.length - 1;
            if (imageIndexToRemove != lastIndex) {
                users[msg.sender].images[imageIndexToRemove] = users[msg.sender].images[lastIndex];
            }

            // Remove the last element from the array
            users[msg.sender].images.pop();
            users[msg.sender].cidExists[cidToRemove] = false;
        }

        emit ImagesRemoved(msg.sender, _cids);
    }

    function getUserImages(address _user) public view returns (Image[] memory) {
        return users[_user].images;
    }

    function getUserImageIndex(address _user, string memory _cid) internal view returns (uint256) {
        for (uint256 i = 0; i < users[_user].images.length; i++) {
            if (keccak256(abi.encodePacked(users[_user].images[i].cid)) == keccak256(abi.encodePacked(_cid))) {
                return i;
            }
        }
        return users[_user].images.length; // Image not found
    }
}
